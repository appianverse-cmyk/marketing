import type { CreatorProfile, CategoryItem, FAQItem } from '../types';

export const FEATURED_CREATORS: CreatorProfile[] = [
  {
    id: '1',
    name: 'Aanya Sharma',
    handle: '@aanyastyles',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    niche: 'Fashion & Handlooms',
    city: 'Mumbai',
    followers: '92K',
    engagement: '5.2%',
    platforms: ['instagram', 'youtube'],
    language: 'Hindi & English',
    recentCollab: 'Festive Wear D2C',
    verified: true
  },
  {
    id: '2',
    name: 'Rohan Deshmukh',
    handle: '@rohanbuildstech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    niche: 'SaaS & Productivity Gadgets',
    city: 'Bengaluru',
    followers: '68K',
    engagement: '6.4%',
    platforms: ['youtube', 'linkedin'],
    language: 'English',
    recentCollab: 'Fintech App Launch',
    verified: true
  },
  {
    id: '3',
    name: 'Pooja Iyer',
    handle: '@pooja.eats.south',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    niche: 'Culinary & Regional Recipes',
    city: 'Chennai',
    followers: '115K',
    engagement: '7.1%',
    platforms: ['instagram', 'youtube'],
    language: 'Tamil & English',
    recentCollab: 'Spice Brand Campaign',
    verified: true
  },
  {
    id: '4',
    name: 'Kabir Varma',
    handle: '@kabir_fitpulse',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    niche: 'Holistic Fitness & Calisthenics',
    city: 'Delhi NCR',
    followers: '54K',
    engagement: '5.8%',
    platforms: ['instagram'],
    language: 'Hindi',
    recentCollab: 'Clean Protein D2C',
    verified: true
  },
  {
    id: '5',
    name: 'Tanvi Kulkarni',
    handle: '@tanvi.traveljournal',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    niche: 'Offbeat Indian Travel',
    city: 'Pune',
    followers: '88K',
    engagement: '4.9%',
    platforms: ['instagram', 'youtube'],
    language: 'Marathi & Hindi',
    recentCollab: 'Heritage Homestays',
    verified: true
  },
  {
    id: '6',
    name: 'Arjun Reddy',
    handle: '@arjun.wealthcraft',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    niche: 'Personal Finance & Investing',
    city: 'Hyderabad',
    followers: '76K',
    engagement: '6.1%',
    platforms: ['youtube', 'linkedin'],
    language: 'Telugu & English',
    recentCollab: 'Neo-banking App',
    verified: true
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    description: 'Streetwear, Indian ethnic, sustainable thrift, styling guides and jewelry.',
    creatorCount: '28+ Creators',
    growth: '+32% MoM',
    tags: ['OOTD', 'Handlooms', 'Streetwear', 'Festive'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    iconName: 'Shirt'
  },
  {
    id: 'beauty',
    name: 'Beauty & Skincare',
    description: 'Clean Indian skincare, shade matching, everyday glam and dermatologist reviews.',
    creatorCount: '22+ Creators',
    growth: '+40% MoM',
    tags: ['Ayurvedic', 'K-Beauty', 'Clean Beauty', 'Swatches'],
    gradient: 'from-purple-500/20 to-indigo-500/10',
    iconName: 'Sparkles'
  },
  {
    id: 'food',
    name: 'Food & Culinary',
    description: 'Regional recipes, street food discovery, home brewing, and cloud kitchen tasting.',
    creatorCount: '25+ Creators',
    growth: '+28% MoM',
    tags: ['Regional Flavour', 'Quick Meals', 'Street Food', 'Gourmet'],
    gradient: 'from-amber-500/20 to-orange-500/10',
    iconName: 'Utensils'
  },
  {
    id: 'tech',
    name: 'Technology & Gadgets',
    description: 'Smartphones, productivity setups, AI tools, developer peripherals and unboxings.',
    creatorCount: '19+ Creators',
    growth: '+45% MoM',
    tags: ['Unboxings', 'Desk Setups', 'AI Tools', 'Smart Living'],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    iconName: 'Cpu'
  },
  {
    id: 'travel',
    name: 'Travel & Experiences',
    description: 'Hidden Indian getaways, backpacker itineraries, hill-station guides & budget stays.',
    creatorCount: '16+ Creators',
    growth: '+25% MoM',
    tags: ['Homestays', 'Himachal', 'Western Ghats', 'Weekend Trips'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    iconName: 'Compass'
  },
  {
    id: 'fitness',
    name: 'Fitness & Wellness',
    description: 'Home workouts, yoga, marathon training, calisthenics and nutrition breakdowns.',
    creatorCount: '18+ Creators',
    growth: '+30% MoM',
    tags: ['HIIT', 'Yoga', 'Macro Tracking', 'Calisthenics'],
    gradient: 'from-red-500/20 to-pink-500/10',
    iconName: 'Activity'
  },
  {
    id: 'finance',
    name: 'Finance & Career',
    description: 'Tax planning for Gen-Z, mutual funds, creator economy finances and credit tips.',
    creatorCount: '14+ Creators',
    growth: '+50% MoM',
    tags: ['SIPs', 'Index Funds', 'Tax Filing', 'Side Hustles'],
    gradient: 'from-emerald-500/20 to-indigo-500/10',
    iconName: 'TrendingUp'
  },
  {
    id: 'gaming',
    name: 'Gaming & Esports',
    description: 'Mobile gaming tournaments, PC building, BGMI/Valorant streams and gaming gear.',
    creatorCount: '15+ Creators',
    growth: '+35% MoM',
    tags: ['BGMI', 'Valorant', 'Custom Rigs', 'Live Streams'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconName: 'Gamepad2'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Decor',
    description: 'Minimalist Indian apartments, college life, DIY room transformations and routines.',
    creatorCount: '21+ Creators',
    growth: '+22% MoM',
    tags: ['Aesthetic Rooms', 'Daily Vlogs', 'College Diaries', 'Organization'],
    gradient: 'from-amber-500/20 to-pink-500/10',
    iconName: 'Home'
  },
  {
    id: 'regional',
    name: 'Regional & Vernacular',
    description: 'Authentic content in Hindi, Tamil, Telugu, Marathi, Bengali, Kannada & Malayalam.',
    creatorCount: '35+ Creators',
    growth: '+60% MoM',
    tags: ['Tier 2/3 Reach', 'Native Tongue', 'Cultural Relatability'],
    gradient: 'from-indigo-500/20 to-cyan-500/10',
    iconName: 'Languages'
  },
  {
    id: 'education',
    name: 'EdTech & Learning',
    description: 'Coding bootcamps, UPSC/CAT study vlogs, design tips and freelancing blueprints.',
    creatorCount: '12+ Creators',
    growth: '+18% MoM',
    tags: ['Design Tips', 'Study With Me', 'Freelancing', 'Tech Skills'],
    gradient: 'from-blue-500/20 to-slate-500/10',
    iconName: 'GraduationCap'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Comedy',
    description: 'Relatable Indian sketches, corporate satire, meme commentary and pop-culture takes.',
    creatorCount: '24+ Creators',
    growth: '+42% MoM',
    tags: ['Relatable Humor', 'Office Satire', 'POV Sketches', 'Pop Culture'],
    gradient: 'from-rose-500/20 to-amber-500/10',
    iconName: 'Film'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Define Intent & Criteria',
    brandDesc: 'Tell us your campaign objective — whether launch awareness, app installs, or footfalls in specific Indian cities.',
    creatorDesc: 'Register your profile, platform links, and audience demographics in our creator roster in under 2 minutes.',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Match',
    subtitle: 'Precision Creator Curation',
    brandDesc: 'Nexora analyzes real audience engagement, regional language depth, and brand alignment to recommend the best emerging voices.',
    creatorDesc: 'Get hand-picked for paid campaigns where your authentic voice genuinely fits the product story.',
    iconName: 'Target'
  },
  {
    number: '03',
    title: 'Collaborate',
    subtitle: 'Friction-Free Execution',
    brandDesc: 'We coordinate briefs, deliverable timelines, creative approvals, and content distribution without standard agency lag.',
    creatorDesc: 'Receive clear creative briefs, timely communication, and prompt milestone payments.',
    iconName: 'MessageSquareShare'
  },
  {
    number: '04',
    title: 'Grow',
    subtitle: 'Compound Real ROI',
    brandDesc: 'Gain high-intent consumer trust and engagement across targeted micro-communities without blowing budget on inflated celebrity reach.',
    creatorDesc: 'Build long-term brand relationships, expand your media portfolio, and monetize your creative craft.',
    iconName: 'TrendingUp'
  }
];

export const WHY_NEXORA_POINTS = [
  {
    title: 'Authentic Conversations',
    description: 'Emerging micro-creators hold intimate relationships with followers who genuinely ask for recommendations, not just passive scrolling.',
    highlight: '5.2% avg engagement vs 1.1% for mega celebrities',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Hyperlocal & Regional Reach',
    description: "India is not a single market. We connect you with voices speaking Hindi, Tamil, Telugu, Marathi, and regional dialects across Tier 1, 2, and 3 cities.",
    highlight: '15+ Indian cities covered',
    iconName: 'MapPin'
  },
  {
    title: 'Transparent Creator Pricing',
    description: 'No opaque agency markups or hidden retainers. Pay for real content and measurable engagement aligned with your business goals.',
    highlight: '100% transparent payouts',
    iconName: 'ShieldCheck'
  },
  {
    title: 'End-to-End Campaign Handling',
    description: 'From scouting and briefing to quality checks and dispatch tracking, Nexora handles the heavy lifting so your marketing team stays lean.',
    highlight: 'Zero coordination headache',
    iconName: 'Layers'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'brands',
    question: 'Why should we work with micro-influencers instead of big celebrities?',
    answer: 'Emerging creators (10K to 150K followers) typically generate 3x to 5x higher engagement rates than mega-influencers. Their followers view them as trusted peers rather than distant billboards. For the price of a single celebrity post, Nexora lets you activate 15-25 micro-creators, generating high diversity, hyperlocal reach, and authentic social proof.'
  },
  {
    category: 'brands',
    question: 'How does Nexora verify creator authenticity and metrics?',
    answer: 'We manually review engagement rates, comment-to-like ratios, audience geography, and past brand collaborations to filter out ghost followers or bot pods. You only collaborate with creators who drive authentic community conversations.'
  },
  {
    category: 'brands',
    question: 'Can we run regional campaigns in specific Indian states or languages?',
    answer: 'Yes! That is one of Nexora’s key strengths. We have creators across Maharashtra, Karnataka, Delhi NCR, Tamil Nadu, Telangana, Gujarat, West Bengal, and more who create content in their native languages.'
  },
  {
    category: 'creators',
    question: 'What is the minimum follower count needed to join the Nexora Creator Network?',
    answer: 'We prioritize high engagement and authentic storytelling over vanity numbers. If you have over 3,000 active followers on Instagram or YouTube and consistently post original, quality content, you are welcome to apply.'
  },
  {
    category: 'creators',
    question: 'Is joining Nexora free for creators?',
    answer: 'Yes, 100% free. There are no registration fees, platform charges, or hidden deductions. When you work on a paid campaign, you receive your agreed fee directly.'
  },
  {
    category: 'creators',
    question: 'How do I get matched with brands after submitting the form?',
    answer: 'Once you fill out our Google Form, your profile enters our curated creator database. When a brand campaign matches your niche, language, city, and creative style, our campaign manager will contact you directly on WhatsApp or Email with the campaign brief and commercials.'
  }
];
