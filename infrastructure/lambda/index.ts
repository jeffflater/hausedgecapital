import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import OpenAI from 'openai';

const secretsClient = new SecretsManagerClient({ region: process.env.AWS_REGION || 'us-east-1' });

// 7-Day Weekly Topic Rotation - These are thematic guidelines, not specific titles
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
      Examples of good topics: "Crypto Trading FAQs", "Common Mistakes",
      "Best Timeframes for Trading", "Trading Glossary"
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
      Examples: "What Is Crypto Trading?", "How to Start Trading Safely",
      "Spot vs Futures Explained", "Terms Beginners Must Know"
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
      Include entry/exit criteria, risk management for the strategy,
      when to use it, and when to avoid it.
      Examples: "VWAP Strategy Explained", "RSI Divergence Strategy",
      "EMA Ribbon for Trend Trading", "Breakout Strategy Guide"
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
      Examples: "How Much Should You Risk Per Trade?", "Stop Loss Placement",
      "Why Most Traders Lose Money", "Overtrading and How to Stop"
    `,
  },
  4: { // Thursday
    theme: 'Market Structure & Cycles',
    category: 'Market Structure',
    categoryColor: 'indigo',
    searchIntent: 'market structure / cycles / support resistance / liquidity',
    contentRole: 'Intermediate authority content',
    guidelines: `
      Explain how markets work at a structural level.
      Cover concepts like market cycles, support/resistance, liquidity, order flow.
      Examples: "What Are Market Cycles?", "Bull vs Bear Markets",
      "Support and Resistance Explained", "Liquidity Zones"
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
      Cover position sizing, compounding, when NOT to trade, passive strategies.
      Examples: "Trading vs Investing", "Dollar-Cost Averaging",
      "When Not to Trade", "Compounding Gains Over Time"
    `,
  },
  6: { // Saturday
    theme: 'Lending Education',
    category: 'Lending',
    categoryColor: 'teal',
    searchIntent: 'crypto lending explained / passive income / yield',
    contentRole: 'Educational monetization support - NOT sales-focused',
    guidelines: `
      Educate about crypto lending as a concept. Be neutral and risk-aware.
      Never be promotional. Focus on how it works, risks involved, who it's for.
      Examples: "What Is Crypto Lending?", "Crypto Lending vs Staking",
      "Risks of Crypto Lending", "Who Should Consider Lending?"
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
- Use concrete examples and practical frameworks

TODAY'S CONTENT THEME: ${config.theme}
CATEGORY: ${config.category}
TARGET SEARCH INTENT: ${config.searchIntent}
CONTENT ROLE: ${config.contentRole}

THEME GUIDELINES:
${config.guidelines}

IMPORTANT: Generate a UNIQUE, ORIGINAL topic that fits within these thematic guidelines.
Do NOT use generic titles. Create something specific and valuable.`;

  const userPrompt = `Generate a comprehensive, SEO-optimized blog post for today's theme.

REQUIREMENTS:
1. Create a unique, specific title that fits the theme (not generic)
2. Write a compelling meta description (150-160 characters)
3. Structure the content with 4-5 detailed sections
4. Each section should have 2-4 substantial paragraphs
5. Total content should be 1200-1800 words
6. Include practical examples, frameworks, or actionable advice
7. End with a thoughtful conclusion that reinforces key learnings

FORMAT YOUR RESPONSE AS JSON:
{
  "title": "Your unique, SEO-optimized title here",
  "description": "Compelling meta description under 160 characters",
  "sections": [
    {
      "heading": "Section Heading",
      "content": "Full section content with multiple paragraphs separated by \\n\\n"
    }
  ]
}

Remember: This content should provide genuine value to someone learning about crypto trading.
Be specific, be helpful, be honest about risks.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
    max_tokens: 4000,
    temperature: 0.8, // Slightly higher for more creative titles
  });

  const content = response.choices[0].message.content;
  if (!content) {
    throw new Error('No content generated from OpenAI');
  }

  return JSON.parse(content) as GeneratedContent;
}

function formatBlogPost(content: GeneratedContent, config: TopicConfig): BlogPost {
  const slug = generateSlug(content.title);
  const publishDate = new Date().toISOString().split('T')[0];

  return {
    slug,
    category: config.category,
    categoryColor: config.categoryColor,
    title: content.title,
    description: content.description,
    imagePath: `/blog/${slug}.webp`, // Placeholder - could integrate DALL-E later
    sections: content.sections,
    publishDate,
    generated: true,
  };
}

async function commitToGitHub(
  githubToken: string,
  repo: string,
  branch: string,
  blogPost: BlogPost
): Promise<{ sha: string }> {
  const [owner, repoName] = repo.split('/');
  const filePath = 'src/data/blog-posts.json';

  // Get current file content
  const getFileResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repoName}/contents/${filePath}?ref=${branch}`,
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'HausEdge-BlogGenerator',
      },
    }
  );

  let existingPosts: BlogPost[] = [];
  let sha: string | null = null;

  if (getFileResponse.ok) {
    const fileData = await getFileResponse.json();
    sha = fileData.sha;
    const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
    existingPosts = JSON.parse(content);
  }

  // Check if post with same slug already exists (avoid duplicates)
  const existingIndex = existingPosts.findIndex((p) => p.slug === blogPost.slug);
  if (existingIndex >= 0) {
    // Make slug unique by appending date
    blogPost.slug = `${blogPost.slug}-${Date.now()}`;
    blogPost.imagePath = `/blog/${blogPost.slug}.webp`;
  }

  // Add new post at the beginning (newest first)
  existingPosts.unshift(blogPost);

  // Prepare the commit
  const newContent = Buffer.from(JSON.stringify(existingPosts, null, 2)).toString('base64');

  const commitBody: Record<string, unknown> = {
    message: `Add blog post: ${blogPost.title}\n\nAuto-generated daily blog post for ${blogPost.publishDate}\nCategory: ${blogPost.category}`,
    content: newContent,
    branch,
  };

  if (sha) {
    commitBody.sha = sha;
  }

  const commitResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repoName}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'HausEdge-BlogGenerator',
      },
      body: JSON.stringify(commitBody),
    }
  );

  if (!commitResponse.ok) {
    const error = await commitResponse.text();
    throw new Error(`GitHub commit failed: ${error}`);
  }

  const result = await commitResponse.json();
  return { sha: result.commit.sha };
}

export const handler = async (event: unknown): Promise<{ statusCode: number; body: string }> => {
  console.log('Blog Generator Lambda triggered');
  console.log('Event:', JSON.stringify(event, null, 2));

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = dayNames[today.getDay()];

  try {
    // Get secrets
    console.log('Fetching secrets...');
    const [openaiApiKey, githubToken] = await Promise.all([
      getSecret(process.env.OPENAI_SECRET_ARN!),
      getSecret(process.env.GITHUB_SECRET_ARN!),
    ]);

    // Initialize OpenAI
    const openai = new OpenAI({ apiKey: openaiApiKey });

    // Get today's configuration
    const config = getTodayConfig();

    console.log(`Today is ${dayName}`);
    console.log(`Theme: ${config.theme}`);
    console.log(`Category: ${config.category}`);
    console.log(`Content Role: ${config.contentRole}`);

    // Generate the blog post content
    console.log('Generating blog post with OpenAI...');
    const generatedContent = await generateBlogContent(openai, config);
    console.log(`Generated title: ${generatedContent.title}`);

    // Format for JSON storage
    const blogPost = formatBlogPost(generatedContent, config);
    console.log(`Formatted post with slug: ${blogPost.slug}`);

    // Commit to GitHub
    console.log('Committing to GitHub...');
    const repo = process.env.GITHUB_REPO!;
    const branch = process.env.GITHUB_BRANCH || 'main';
    const commitResult = await commitToGitHub(githubToken, repo, branch, blogPost);
    console.log(`Committed: ${commitResult.sha}`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Blog post generated and committed successfully',
        day: dayName,
        theme: config.theme,
        post: {
          title: blogPost.title,
          slug: blogPost.slug,
          category: blogPost.category,
          publishDate: blogPost.publishDate,
        },
        commit: commitResult.sha,
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
