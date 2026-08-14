export interface TechSpec {
  parameter: string;
  unit?: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  model: string;
  tagline: string;
  description: string;
  mainImage: string;
  images: string[];
  features: string[];
  applications: string[];
  specifications: TechSpec[];
  highlights: { label: string; value: string }[];
  inStock: boolean;
  isHotProduct?: boolean;
  warranty: string;
  catalogPdfName: string;
}

export interface Certificate {
  id: string;
  title: string;
  number: string;
  issuedBy: string;
  validUntil: string;
  description: string;
  imageUrl: string;
  category: 'ISO' | 'GST' | 'QUALITY' | 'EXCELLENCE' | 'GOVT GST' | 'GOVT MSME' | 'ISO 9001';
}

export interface TargetCity {
  id: string;
  name: string;
  region: string;
  country: string;
  isInternational: boolean;
  title: string;
  description: string;
  keywords: string[];
  industrialHubs: string[];
  popularMachines: string[];
  deliveryEstimate: string;
  seoBadges: string[];
  metaGradients: string;
  heroHeadline: string;
}

export interface Lead {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  city: string;
  productInterest: string;
  message: string;
  source: 'QUERY_FORM' | 'CATALOG_DOWNLOAD' | 'AI_CHAT' | 'WHATSAPP_DIRECT' | 'CITY_LANDING';
  status: 'NEW' | 'CONTACTED' | 'IN_DISCUSSION' | 'QUOTATION_SENT' | 'CLOSED';
  createdAt: string;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  whatsappLink?: string;
  suggestedActions?: { label: string; action: string; payload?: string }[];
}

export interface AnalyticsSummary {
  totalVisits: number;
  totalLeads: number;
  catalogDownloads: number;
  aiChatSessions: number;
  topProducts: { name: string; inquiries: number }[];
  topCities: { name: string; inquiries: number }[];
  conversionRate: number;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  youtubeId: string;
  embedUrl: string;
  duration: string;
  category: string;
  machineModel: string;
  views: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  tags: string[];
}

export interface CustomerReview {
  id: string;
  customerName: string;
  company: string;
  city: string;
  country: string;
  rating: number;
  date: string;
  machineModel: string;
  reviewText: string;
  verifiedPurchase: boolean;
  avatarUrl?: string;
}
