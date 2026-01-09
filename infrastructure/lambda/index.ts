import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import OpenAI from 'openai';

const region = process.env.AWS_REGION || 'us-east-1';
const secretsClient = new SecretsManagerClient({ region });
const s3Client = new S3Client({ region });
const cloudfrontClient = new CloudFrontClient({ region });

// 7-Day Weekly Topic Rotation
const TOPIC_SCHEDULE: Record<number, TopicConfig> = {
  0: { // Sunday
    theme: 'Evergreen SEO & Authority Boosters',
    category: 'Evergreen',
    categoryColor: 'gray',
    searchIntent: 'FAQs, comparisons, lists, glossaries',
    contentRole: 'Long-tail traffic + internal linking',
    guidelines: `
      Create comprehensive reference content that will remain relevant for years.
      Focus on: FAQs, comparisons between trading concepts, educational lists,
      common mistakes to avoid, or glossary-style content.
    `,
  },
  1: { // Monday
    theme: 'Beginner Crypto Education',
    category: 'Getting Started',
    categoryColor: 'blue',
    searchIntent: 'What is / How to / Beginner guide',
    contentRole: 'Primary traffic driver - top of funnel',
    guidelines: `
      Write for absolute beginners entering the crypto trading space.
      Explain concepts clearly without jargon. Use analogies to familiar concepts.
    `,
  },
  2: { // Tuesday
    theme: 'Trading Strategy Deep Dives',
    category: 'Trading Strategy',
    categoryColor: 'purple',
    searchIntent: 'strategy / setup / how to trade',
    contentRole: 'High-intent, long-tail SEO',
    guidelines: `
      Provide actionable, detailed trading strategy explanations.
      Include entry/exit criteria, risk management, when to use it.
    `,
  },
  3: { // Wednesday
    theme: 'Risk Management & Psychology',
    category: 'Risk Management',
    categoryColor: 'orange',
    searchIntent: 'risk / losing money / stop loss / psychology',
    contentRole: 'Trust + authority building',
    guidelines: `
      Focus on the psychological and risk management aspects of trading.
      Be honest about the challenges. Provide practical frameworks.
    `,
  },
  4: { // Thursday
    theme: 'Market Structure & Cycles',
    category: 'Market Structure',
    categoryColor: 'indigo',
    searchIntent: 'market structure / cycles / support resistance',
    contentRole: 'Intermediate authority content',
    guidelines: `
      Explain how markets work at a structural level.
      Cover concepts like market cycles, support/resistance, liquidity.
    `,
  },
  5: { // Friday
    theme: 'Capital Growth & Long-Term Strategy',
    category: 'Capital Growth',
    categoryColor: 'green',
    searchIntent: 'long term / investing / growth / compounding',
    contentRole: 'Bridge to investing + lending products',
    guidelines: `
      Focus on building wealth over time, not just day trading.
      Cover position sizing, compounding, when NOT to trade.
    `,
  },
  6: { // Saturday
    theme: 'Lending Education',
    category: 'Lending',
    categoryColor: 'teal',
    searchIntent: 'crypto lending explained / passive income / yield',
    contentRole: 'Educational monetization support',
    guidelines: `
      Educate about crypto lending as a concept. Be neutral and risk-aware.
      Never be promotional. Focus on how it works, risks involved.
    `,
  },
};

interface TopicConfig {
  theme: string;
  category: string;
  categoryColor: string;
  searchIntent: string;
  contentRole: string;
  guidelines: string;
}

interface BlogSection {
  heading: string;
  content: string;
}

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  imagePath: string;
  sections: BlogSection[];
  publishDate: string;
  generated: boolean;
}

interface GeneratedContent {
  title: string;
  description: string;
  sections: BlogSection[];
}

// Color mappings for Tailwind classes
const categoryColors: Record<string, { bg: string; text: string; bgLight: string; border: string }> = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-700', bgLight: 'bg-blue-100', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-700', bgLight: 'bg-purple-100', border: 'border-purple-200' },
  green: { bg: 'bg-green-600', text: 'text-green-700', bgLight: 'bg-green-100', border: 'border-green-200' },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-700', bgLight: 'bg-indigo-100', border: 'border-indigo-200' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-700', bgLight: 'bg-orange-100', border: 'border-orange-200' },
  teal: { bg: 'bg-teal-600', text: 'text-teal-700', bgLight: 'bg-teal-100', border: 'border-teal-200' },
  gray: { bg: 'bg-gray-600', text: 'text-gray-700', bgLight: 'bg-gray-100', border: 'border-gray-200' },
};

async function getSecret(secretArn: string): Promise<string> {
  const command = new GetSecretValueCommand({ SecretId: secretArn });
  const response = await secretsClient.send(command);
  return response.SecretString || '';
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60)
    .trim();
}

function getTodayConfig(): TopicConfig {
  const dayOfWeek = new Date().getDay();
  return TOPIC_SCHEDULE[dayOfWeek];
}

async function generateBlogContent(openai: OpenAI, config: TopicConfig): Promise<GeneratedContent> {
  const systemPrompt = `You are an expert crypto education content writer for Haus Edge Capital.

YOUR WRITING STYLE:
- Clear, accessible, and educational
- Professional but approachable tone
- SEO-optimized with natural keyword integration
- Always risk-aware and honest about the challenges of trading
- Never give specific financial advice or promise returns

TODAY'S CONTENT THEME: ${config.theme}
CATEGORY: ${config.category}
TARGET SEARCH INTENT: ${config.searchIntent}

THEME GUIDELINES:
${config.guidelines}

IMPORTANT: Generate a UNIQUE, ORIGINAL topic that fits within these thematic guidelines.`;

  const userPrompt = `Generate a comprehensive blog post for today's theme.

CRITICAL WORD COUNT REQUIREMENT:
- The TOTAL post must be between 900-1,200 words (not including title/description)
- This is MANDATORY - posts under 900 words are unacceptable
- Aim for approximately 1,000-1,100 words for optimal length

CONTENT REQUIREMENTS:
1. Create a unique, specific title (not generic)
2. Write a compelling meta description (150-160 characters)
3. Structure with 5-6 detailed sections (more sections = more depth)
4. Each section MUST have 3-4 substantial paragraphs (150-200 words per section minimum)
5. Include practical examples, specific strategies, and actionable advice
6. Add real-world scenarios and concrete use cases
7. Explain the "why" behind concepts, not just the "what"

DEPTH GUIDELINES:
- Don't just list points - explain each concept thoroughly
- Include specific numbers, percentages, or examples where relevant
- Address common mistakes and how to avoid them
- Provide step-by-step guidance where applicable

FORMAT AS JSON:
{
  "title": "Your unique title here",
  "description": "Meta description under 160 characters",
  "sections": [
    { "heading": "Section Heading", "content": "Paragraphs separated by \\n\\n" }
  ]
}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
    max_tokens: 4000,
    temperature: 0.8,
  });

  const content = response.choices[0].message.content;
  if (!content) throw new Error('No content generated from OpenAI');
  return JSON.parse(content) as GeneratedContent;
}

function generateHTML(post: BlogPost): string {
  const colors = categoryColors[post.categoryColor] || categoryColors.blue;

  // Generic Lending CTA to insert after first section
  const lendingCTA = `
      <div class="my-10 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="flex-grow text-center md:text-left">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Explore Lending Options</h3>
            <p class="text-gray-600">Discover flexible lending solutions to help you reach your financial goals. Compare rates and find the right fit for you.</p>
          </div>
          <a href="/lending" class="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors">
            View Lending Options
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
  `;

  const sectionsHTML = post.sections.map((section, index) => {
    const paragraphs = section.content.split('\n\n').map(p =>
      `<p class="text-gray-600 mb-6 leading-relaxed">${escapeHtml(p)}</p>`
    ).join('\n');
    const sectionHTML = `
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">${escapeHtml(section.heading)}</h2>
        ${paragraphs}
      </div>
    `;
    // Insert Lending CTA after the first section
    return index === 0 ? sectionHTML + lendingCTA : sectionHTML;
  }).join('\n');

  // Generate JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Haus Edge Capital",
      url: "https://hausedgecapital.com"
    },
    publisher: {
      "@type": "Organization",
      name: "Haus Edge Capital",
      logo: {
        "@type": "ImageObject",
        url: "https://hausedgecapital.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hausedgecapital.com/blog/${post.slug}`
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(post.title)} | Haus Edge Capital</title>
  <meta name="description" content="${escapeHtml(post.description)}">
  <meta name="keywords" content="${post.category}, crypto trading, cryptocurrency, trading education">
  <meta name="author" content="Haus Edge Capital">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://hausedgecapital.com/blog/${post.slug}">
  <meta property="og:title" content="${escapeHtml(post.title)}">
  <meta property="og:description" content="${escapeHtml(post.description)}">
  <meta property="og:site_name" content="Haus Edge Capital">
  <meta property="article:published_time" content="${post.publishDate}">
  <meta property="article:author" content="Haus Edge Capital">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.title)}">
  <meta name="twitter:description" content="${escapeHtml(post.description)}">

  <link rel="canonical" href="https://hausedgecapital.com/blog/${post.slug}">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="icon" href="/favicon.ico">

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-07H8XGQGPF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-07H8XGQGPF');
  </script>

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
</head>
<body class="min-h-screen bg-white">
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z"/>
          </svg>
          <span class="text-xl font-semibold text-gray-900">Haus Edge Capital</span>
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="/learn" class="text-gray-600 hover:text-blue-600 transition-colors">Learn</a>
          <a href="/trade" class="text-gray-600 hover:text-blue-600 transition-colors">Trade</a>
          <a href="/lending" class="text-gray-600 hover:text-blue-600 transition-colors">Lending</a>
          <a href="/blog" class="text-blue-600 font-medium">Blog</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Article -->
  <article class="pt-24 pb-16">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <a href="/blog" class="hover:text-blue-600 transition-colors">Blog</a>
        <span>/</span>
        <span class="text-gray-900">${escapeHtml(post.category)}</span>
      </div>

      <!-- Category Tag -->
      <div class="inline-block mb-4 px-3 py-1 ${colors.bgLight} rounded-full">
        <span class="${colors.text} font-medium text-sm">${escapeHtml(post.category)}</span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        ${escapeHtml(post.title)}
      </h1>

      <!-- Meta Description -->
      <p class="text-xl text-gray-600 mb-8">${escapeHtml(post.description)}</p>

      <!-- Publish Date -->
      <p class="text-sm text-gray-500 mb-12">Published: ${post.publishDate}</p>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        ${sectionsHTML}

        <!-- CTA Box -->
        <div class="${colors.bgLight} ${colors.border} border rounded-xl p-6 my-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Practice Risk-Free</h3>
          <p class="text-gray-600 mb-4">Master these concepts with paper trading before risking real capital.</p>
          <a href="/learn" class="inline-flex items-center gap-2 px-6 py-3 rounded-full ${colors.bg} text-white font-semibold hover:opacity-90 transition-opacity">
            Start Paper Trading
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial advice.
          Trading involves significant risk of loss. Cryptocurrency investments are volatile and high-risk.
          Always do your own research before making any investment decisions.
        </p>
      </div>
    </div>
  </article>

  <!-- Footer -->
  <footer class="py-12 px-6 bg-gray-900 border-t border-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="/" class="flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z"/>
          </svg>
          <span class="text-xl font-semibold text-white">Haus Edge Capital</span>
        </a>
        <div class="flex items-center gap-8">
          <a href="/learn" class="text-gray-400 hover:text-white transition-colors">Learn</a>
          <a href="/trade" class="text-gray-400 hover:text-white transition-colors">Trade</a>
          <a href="/lending" class="text-gray-400 hover:text-white transition-colors">Lending</a>
          <a href="/blog" class="text-blue-400 font-medium">Blog</a>
        </div>
        <p class="text-gray-500 text-sm">&copy; ${new Date().getFullYear()} Haus Edge Capital.</p>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-500 text-xs">
          This site contains affiliate links. Haus Edge Capital may receive compensation at no additional cost to you.
          This website is for educational purposes only. Nothing on this site constitutes financial advice.
        </p>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function getExistingGeneratedPosts(bucket: string): Promise<BlogPost[]> {
  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: 'data/generated-posts.json',
    });
    const response = await s3Client.send(command);
    const body = await response.Body?.transformToString();
    return body ? JSON.parse(body) : [];
  } catch (error) {
    // File might not exist yet
    console.log('No existing generated-posts.json found, starting fresh');
    return [];
  }
}

async function getStaticBlogPosts(bucket: string): Promise<BlogPost[]> {
  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: 'data/blog-posts.json',
    });
    const response = await s3Client.send(command);
    const body = await response.Body?.transformToString();
    return body ? JSON.parse(body) : [];
  } catch (error) {
    console.log('No static blog-posts.json found');
    return [];
  }
}

async function uploadToS3(bucket: string, key: string, content: string, contentType: string): Promise<void> {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: contentType,
    CacheControl: contentType.includes('html') ? 'public, max-age=3600' : 'public, max-age=86400',
  });
  await s3Client.send(command);
  console.log(`Uploaded: s3://${bucket}/${key}`);
}

async function updateSitemap(bucket: string, staticPosts: BlogPost[], generatedPosts: BlogPost[]): Promise<void> {
  const baseUrl = 'https://hausedgecapital.com';
  const staticPages = ['', '/learn', '/trade', '/lending', '/blog', '/trading-strategies', '/capital-growth', '/daily-updates'];
  const today = new Date().toISOString().split('T')[0];

  // Combine all blog posts for sitemap
  const allBlogPosts = [...generatedPosts, ...staticPosts];

  const urls = [
    ...staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page === '/blog' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/blog' ? '0.9' : '0.8'}</priority>
  </url>`),
    ...allBlogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  await uploadToS3(bucket, 'sitemap.xml', sitemap, 'application/xml');
}

async function invalidateCloudFront(distributionId: string, paths: string[]): Promise<void> {
  const command = new CreateInvalidationCommand({
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: `blog-${Date.now()}`,
      Paths: {
        Quantity: paths.length,
        Items: paths,
      },
    },
  });
  await cloudfrontClient.send(command);
  console.log(`CloudFront invalidation created for: ${paths.join(', ')}`);
}

async function sendStandupSummary(blogPost: BlogPost, config: TopicConfig): Promise<void> {
  const apiKey = process.env.STANDUP_API_KEY;
  const propertyId = process.env.STANDUP_PROPERTY_ID;

  if (!apiKey || !propertyId) {
    console.log('Standup API not configured, skipping notification');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const summary = `Generated blog post: "${blogPost.title}" (${config.category}). Published to https://hausedgecapital.com/blog/${blogPost.slug}`;

  try {
    const response = await fetch('https://bob.ensomniamedia.com/api/external/standup-summaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        propertyId,
        date: today,
        summary,
      }),
    });

    if (!response.ok) {
      console.error(`Standup API error: ${response.status} ${response.statusText}`);
    } else {
      const result = await response.json();
      console.log('Standup summary sent successfully:', result.id);
    }
  } catch (error) {
    console.error('Failed to send standup summary:', error instanceof Error ? error.message : 'Unknown error');
  }
}

export const handler = async (event: unknown): Promise<{ statusCode: number; body: string }> => {
  console.log('Blog Generator Lambda triggered');
  console.log('Event:', JSON.stringify(event, null, 2));

  const bucket = process.env.S3_BUCKET!;
  const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID!;
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = dayNames[today.getDay()];

  try {
    // Get OpenAI API key
    console.log('Fetching OpenAI secret...');
    const openaiApiKey = await getSecret(process.env.OPENAI_SECRET_ARN!);
    const openai = new OpenAI({ apiKey: openaiApiKey });

    // Get today's configuration
    const config = getTodayConfig();
    console.log(`Today is ${dayName} - Theme: ${config.theme}`);

    // Generate blog content
    console.log('Generating blog post with OpenAI...');
    const generatedContent = await generateBlogContent(openai, config);
    console.log(`Generated title: ${generatedContent.title}`);

    // Create blog post object
    const slug = generateSlug(generatedContent.title);
    const publishDate = today.toISOString().split('T')[0];

    const blogPost: BlogPost = {
      slug,
      category: config.category,
      categoryColor: config.categoryColor,
      title: generatedContent.title,
      description: generatedContent.description,
      imagePath: `/blog/${slug}.webp`,
      sections: generatedContent.sections,
      publishDate,
      generated: true,
    };

    // Get existing generated posts (separate file that won't be overwritten by deployments)
    const existingGeneratedPosts = await getExistingGeneratedPosts(bucket);

    // Check for duplicate slug
    if (existingGeneratedPosts.some(p => p.slug === blogPost.slug)) {
      blogPost.slug = `${slug}-${Date.now()}`;
      blogPost.imagePath = `/blog/${blogPost.slug}.webp`;
    }

    // Add new post at beginning
    const allGeneratedPosts = [blogPost, ...existingGeneratedPosts];

    // Generate and upload HTML (matching Next.js export pattern: blog/slug.html)
    const html = generateHTML(blogPost);
    await uploadToS3(bucket, `blog/${blogPost.slug}.html`, html, 'text/html');

    // Update generated-posts.json (separate file for AI-generated posts)
    await uploadToS3(bucket, 'data/generated-posts.json', JSON.stringify(allGeneratedPosts, null, 2), 'application/json');

    // Get static blog posts and update sitemap with both static and generated posts
    const staticPosts = await getStaticBlogPosts(bucket);
    await updateSitemap(bucket, staticPosts, allGeneratedPosts);

    // Send standup summary notification
    await sendStandupSummary(blogPost, config);

    // Invalidate CloudFront cache
    await invalidateCloudFront(distributionId, [
      `/blog/${blogPost.slug}.html`,
      '/blog.html',
      '/sitemap.xml',
      '/data/generated-posts.json',
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Blog post generated and published to S3',
        day: dayName,
        theme: config.theme,
        post: {
          title: blogPost.title,
          slug: blogPost.slug,
          category: blogPost.category,
          publishDate: blogPost.publishDate,
          url: `https://hausedgecapital.com/blog/${blogPost.slug}`,
        },
      }),
    };
  } catch (error) {
    console.error('Error generating blog post:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        day: dayName,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
