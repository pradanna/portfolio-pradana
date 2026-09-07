export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detail: string;
  features: string[];
  proofs?: string[];
  shapeVariant: 'rounded-square' | 'flow-node' | 'connector' | 'cluster';
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: 'Proyek Klien' | 'Studi Kasus & Eksplorasi';
  tagVariant: 'client' | 'exploration';
  headline: string;
  problem: string;
  solution: string;
  result: string;
  metrics?: {
    value: string;
    label: string;
  };
  stack: string[];
  mockup: {
    type: 'hris' | 'erp';
    title: string;
    subtitle: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  badge: string;
  description: string;
  images: string[];
  aspectRatio?: 'desktop' | 'mobile';
  stack: string[];
}

export interface PricingPlan {
  id: string;
  category: string;
  startingPrice: string;
  priceNote: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface MaintenancePlan {
  name: string;
  price: string;
  cadence: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  name: string;
  summary: string;
  deliverable: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  impactMetric: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  philosophy: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
}
