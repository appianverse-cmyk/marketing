export interface CreatorProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  niche: string;
  city: string;
  followers: string;
  engagement: string;
  platforms: ('instagram' | 'youtube' | 'linkedin')[];
  language: string;
  recentCollab?: string;
  verified?: boolean;
}

export interface BrandInquiry {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  industry: string;
  campaignType: string;
  targetAudience: string;
  location: string;
  budget: string;
  details: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  creatorCount: string;
  growth: string;
  tags: string[];
  gradient: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'brands' | 'creators';
}
