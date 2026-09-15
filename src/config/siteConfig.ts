/**
 * Nexora Configuration
 * Central place to configure external links, Google Form URL, contact details, and brand identity.
 */

export const siteConfig = {
  brandName: "Nexora",
  tagline: "Connecting Brands With Influence",
  headline: "Where Brands Meet the Next Generation of Creators.",
  
  /**
   * IMPORTANT: Primary conversion target for Creators.
   * Replace this placeholder with your live Google Form URL.
   * All creator registration CTA buttons across the website reference this single constant.
   */
  CREATOR_GOOGLE_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSc7QWnexoraCreatorNetworkRegister/viewform",

  contact: {
    email: "collaborate@nexoramarketing.in",
    supportEmail: "creators@nexoramarketing.in",
    phone: "+91 98200 12345",
    whatsapp: "+91 98200 12345",
    address: {
      hub: "Indiranagar, Bengaluru, Karnataka 560038",
      presence: ["Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune"]
    }
  },

  socials: {
    instagram: "https://instagram.com/nexora.india",
    linkedin: "https://linkedin.com/company/nexora-marketing",
    youtube: "https://youtube.com/@nexoracreators",
    twitter: "https://x.com/nexora_in"
  },

  stats: [
    { value: "100+", label: "Vetted Emerging Creators", change: "Growing monthly", isPlaceholder: true },
    { value: "25+", label: "Successful Campaigns", change: "Across D2C & Tech", isPlaceholder: true },
    { value: "15+", label: "Indian Tier 1 & 2 Cities", change: "Hyperlocal reach", isPlaceholder: true },
    { value: "4.8%", label: "Average Engagement Rate", change: "3x vs mega celebrities", isPlaceholder: true },
  ],

  hubs: [
    { city: "Mumbai", state: "Maharashtra", flag: "West", desc: "Bollywood, Fashion & D2C Brands" },
    { city: "Bengaluru", state: "Karnataka", flag: "South", desc: "Tech, Startups & Gaming" },
    { city: "Delhi NCR", state: "North", flag: "North", desc: "Lifestyle, Food & Quick Commerce" },
    { city: "Hyderabad", state: "Telangana", flag: "South", desc: "Regional Cinema & Tech" },
    { city: "Chennai", state: "Tamil Nadu", flag: "South", desc: "Automobile & Vernacular Creators" },
    { city: "Pune", state: "Maharashtra", flag: "West", desc: "Youth & Campus Culture" },
    { city: "Kolkata", state: "West Bengal", flag: "East", desc: "Art, Literature & Culinary" },
    { city: "Ahmedabad", state: "Gujarat", flag: "West", desc: "Finance & Retail Commerce" },
  ]
};
