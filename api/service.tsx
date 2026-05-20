// services.ts
import type { StaticImageData } from 'next/image'

import icon1 from '@/public/images/icon/research.gif'
import icon2 from '@/public/images/icon/durability.gif'
import icon3 from '@/public/images/icon/digital-tra.gif'
import icon4 from '@/public/images/icon/business-develop.gif'
import icon5 from '@/public/images/icon/search.gif'
import icon6 from '@/public/images/icon/warning.gif'

import sicon1 from '@/public/images/icon/ser-icon01.svg'
import sicon2 from '@/public/images/icon/ser-icon02.svg'
import sicon3 from '@/public/images/icon/ser-icon03.svg'
import sicon4 from '@/public/images/icon/ser-icon04.svg'

import sdicon1 from '@/public/images/icon/da-fea_icon01.svg'
import sdicon2 from '@/public/images/icon/da-fea_icon02.svg'
import sdicon3 from '@/public/images/icon/da-fea_icon03.svg'
import sdicon4 from '@/public/images/icon/da-fea_icon04.svg'

import scicon1 from '@/public/images/icon/airdrop-white.svg'
import scicon2 from '@/public/images/icon/cloud-add.svg'
import scicon3 from '@/public/images/icon/check02.svg'
import scicon4 from '@/public/images/icon/finger-scan.svg'
import scicon5 from '@/public/images/icon/ranking.svg'

import cdicon1 from '@/public/images/icon/cd-ser_icon01.svg'
import cdicon2 from '@/public/images/icon/cd-ser_icon02.svg'
import cdicon3 from '@/public/images/icon/cd-ser_icon03.svg'
import cdicon4 from '@/public/images/icon/cd-ser_icon04.svg'
import cdicon5 from '@/public/images/icon/cd-ser_icon05.svg'
import cdicon6 from '@/public/images/icon/cd-ser_icon06.svg'
import cdicon7 from '@/public/images/icon/cd-ser_icon08.svg'
import cdicon8 from '@/public/images/icon/cd-ser_icon09.svg'

import serviceImg01 from '@/public/images/service/bg-img-1.png'
import serviceImg02 from '@/public/images/service/bg-img-2.png'
import serviceImg03 from '@/public/images/service/bg-img-3.png'
import serviceImg04 from '@/public/images/service/bg-img-4.png'

import sMockup01 from '@/public/images/service/service-imag-1.png'
import sMockup02 from '@/public/images/service/service-imag-2.png'
import sMockup03 from '@/public/images/service/service-imag-3.png'
import sMockup04 from '@/public/images/service/service-imag-4.png'

export interface Service {
  Id: string
  title: string
  slug: string
  category: 'Core' | 'Website Type' | 'Industry'
  sImg?: StaticImageData
  bgImg?: StaticImageData
  sIcon?: StaticImageData | string
  description?: string
  features?: string[]
  priceRange?: string
  targetClients?: string
}

const Services: Service[] = [
  // CORE (Shown on Homepage - Wevtex Big Three + SEO)
  { Id: 'core-1', title: 'Web Development', slug: 'web-development', category: 'Core', sImg: sMockup01, bgImg: serviceImg01, sIcon: sicon1, description: 'Custom web applications, SaaS platforms, and high-performance websites built with modern frameworks.' },
  { Id: 'core-2', title: 'Desktop Applications', slug: 'desktop-applications', category: 'Core', sImg: sMockup02, bgImg: serviceImg02, sIcon: sicon4, description: 'Specialized software for Windows and macOS, optimized for performance and professional workflows.' },
  { Id: 'core-3', title: 'E-Commerce Solutions', slug: 'ecommerce-solutions', category: 'Core', sImg: sMockup03, bgImg: serviceImg03, sIcon: sicon2, description: 'High-converting online stores, marketplaces, and booking systems tailored to drive sales.' },
  { Id: 'core-4', title: 'SEO & GEO Optimization', slug: 'seo-geo-optimization', category: 'Core', sImg: sMockup04, bgImg: serviceImg04, sIcon: sicon3, description: 'Data-driven search engine optimization and localized GEO strategies to dominate your market.' },
  { Id: 'core-5', title: 'Corporate Website', slug: 'corporate-website', category: 'Core', sImg: serviceImg01, sIcon: sicon1, description: 'Professional websites for B2B, agencies, and enterprises.', priceRange: '2,000 - 12,000 MAD', targetClients: 'Accountants, consultants, agencies, law firms' },
  { Id: 'core-6', title: 'Booking & Scheduling Website', slug: 'booking-website', category: 'Core', sImg: serviceImg04, sIcon: sicon4, description: 'Advanced reservation and appointment booking tools.', priceRange: '3,000 - 18,000 MAD', targetClients: 'Clinics, salons, gyms, hotels, consultants' },

  // WEBSITE TYPES
  { Id: 'type-1', title: 'Landing Page', slug: 'landing-page', category: 'Website Type', sIcon: sdicon2, priceRange: '800 - 6,000 MAD', targetClients: 'Coaches, marketers, product launches' },
  { Id: 'type-2', title: 'Portfolio Website', slug: 'portfolio-website', category: 'Website Type', sIcon: sdicon3, priceRange: '1,500 - 5,000 MAD', targetClients: 'Creatives, consultants, agencies' },
  { Id: 'type-3', title: 'Marketplace', slug: 'marketplace', category: 'Website Type', sIcon: sdicon4, priceRange: '15,000 - 50,000+ MAD', targetClients: 'Founders, logistics, B2B' },
  { Id: 'type-4', title: 'News & Magazine Website', slug: 'news-magazine', category: 'Website Type', sIcon: scicon1, priceRange: '4,000 - 15,000 MAD', targetClients: 'Publishers, content creators' },
  { Id: 'type-5', title: 'Directory Website', slug: 'directory-website', category: 'Website Type', sIcon: scicon2, priceRange: '5,000 - 25,000 MAD', targetClients: 'Local businesses, portal operators' },
  { Id: 'type-6', title: 'Membership Portal', slug: 'membership-portal', category: 'Website Type', sIcon: scicon3, priceRange: '5,000 - 20,000 MAD', targetClients: 'Coaches, NGOs, exclusive communities' },
  { Id: 'type-7', title: 'Restaurant & Menu Website', slug: 'restaurant-menu', category: 'Website Type', sIcon: scicon4, priceRange: '2,000 - 8,000 MAD', targetClients: 'Restaurants, cafes, food businesses' },
  { Id: 'type-8', title: 'Real Estate Listing Website', slug: 'real-estate-listing', category: 'Website Type', sIcon: scicon5, priceRange: '5,000 - 25,000 MAD', targetClients: 'Real Estate Agencies, Property Developers' },
  { Id: 'type-9', title: 'Event Website', slug: 'event-website', category: 'Website Type', sIcon: cdicon1, priceRange: '3,000 - 10,000 MAD', targetClients: 'Event planners, conferences' },
  { Id: 'type-10', title: 'Job Board', slug: 'job-board', category: 'Website Type', sIcon: cdicon2, priceRange: '5,000 - 25,000 MAD', targetClients: 'Recruitment Agencies, HR firms' },
  { Id: 'type-11', title: 'Wiki / Knowledge Base', slug: 'knowledge-base', category: 'Website Type', sIcon: cdicon3, priceRange: '3,000 - 8,000 MAD', targetClients: 'SaaS companies, large enterprises' },
  { Id: 'type-12', title: 'Donation & Fundraising Website', slug: 'donation-fundraising', category: 'Website Type', sIcon: cdicon4, priceRange: '2,000 - 8,000 MAD', targetClients: 'Non-profits, associations' },
  { Id: 'type-13', title: 'Forum & Community Platform', slug: 'community-platform', category: 'Website Type', sIcon: cdicon5, priceRange: '5,000 - 20,000 MAD', targetClients: 'Niche groups, brands' },
  { Id: 'type-14', title: 'Subscription Box Website', slug: 'subscription-box', category: 'Website Type', sIcon: cdicon6, priceRange: '5,000 - 20,000 MAD', targetClients: 'E-commerce brands' },

  // INDUSTRIES
  { Id: 'ind-1', title: 'Healthcare & Wellness', slug: 'healthcare-wellness', category: 'Industry', sIcon: cdicon7, priceRange: '4,000 - 20,000 MAD', targetClients: 'Clinics, dentists, psychologists' },
  { Id: 'ind-2', title: 'Real Estate', slug: 'real-estate', category: 'Industry', sIcon: cdicon8, priceRange: '5,000 - 25,000 MAD', targetClients: 'Real Estate Agencies, Property Management' },
  { Id: 'ind-3', title: 'Retail & E-commerce', slug: 'retail-ecommerce', category: 'Industry', sIcon: sicon1, priceRange: '4,000 - 25,000 MAD', targetClients: 'Fashion brands, local shops, electronics' },
  { Id: 'ind-4', title: 'Finance & Fintech', slug: 'finance-fintech', category: 'Industry', sIcon: sicon2, priceRange: '5,000 - 150,000 MAD', targetClients: 'Accountants, CPAs, Financial Advisors' },
  { Id: 'ind-5', title: 'Education & E-learning', slug: 'education-elearning', category: 'Industry', sIcon: sicon3, priceRange: '3,000 - 15,000 MAD', targetClients: 'Private schools, tutors, language schools' },
  { Id: 'ind-6', title: 'Food & Hospitality', slug: 'food-hospitality', category: 'Industry', sIcon: sicon4, priceRange: '2,000 - 15,000 MAD', targetClients: 'Restaurants, cafes, food delivery brands' },
  { Id: 'ind-7', title: 'Legal & Professional Services', slug: 'legal-professional', category: 'Industry', sIcon: sdicon1, priceRange: '3,000 - 18,000 MAD', targetClients: 'Law firms, notaries, marketing agencies' },
  { Id: 'ind-8', title: 'Construction & Real Estate Development', slug: 'construction-development', category: 'Industry', sIcon: sdicon2, priceRange: '8,000 - 30,000 MAD', targetClients: 'Property developers, construction firms' },
  { Id: 'ind-9', title: 'Logistics & Transportation', slug: 'logistics-transportation', category: 'Industry', sIcon: sdicon3, priceRange: '4,000 - 30,000 MAD', targetClients: 'Car rental companies, fleet management' },
  { Id: 'ind-10', title: 'Creative & Media', slug: 'creative-media', category: 'Industry', sIcon: sdicon4, priceRange: '3,000 - 15,000 MAD', targetClients: 'Architecture firms, IT companies, designers' },
  { Id: 'ind-11', title: 'Sports & Fitness', slug: 'sports-fitness', category: 'Industry', sIcon: scicon1, priceRange: '2,000 - 12,000 MAD', targetClients: 'Gyms, personal trainers, studios' },
  { Id: 'ind-12', title: 'Startups & SaaS', slug: 'startups-saas', category: 'Industry', sIcon: scicon2, priceRange: '20,000 - 100,000+ MAD', targetClients: 'Tech founders, global startups' },
  { Id: 'ind-13', title: 'Beauty & Fashion', slug: 'beauty-fashion', category: 'Industry', sIcon: scicon3, priceRange: '2,000 - 10,000 MAD', targetClients: 'Hair salons, barbers, beauty clinics' },
  { Id: 'ind-14', title: 'NGO & Non-Profit', slug: 'ngo-non-profit', category: 'Industry', sIcon: scicon4, priceRange: '2,000 - 8,000 MAD', targetClients: 'Non-profits, associations' },
  { Id: 'ind-15', title: 'Government & Public Sector', slug: 'government-public', category: 'Industry', sIcon: scicon5, priceRange: '10,000 - 50,000+ MAD', targetClients: 'Government projects, public utility' },
  { Id: 'ind-16', title: 'Automotive', slug: 'automotive', category: 'Industry', sIcon: cdicon1, priceRange: '4,000 - 25,000 MAD', targetClients: 'Car dealerships, mechanic shops' },
  { Id: 'ind-17', title: 'Travel & Tourism', slug: 'travel-tourism', category: 'Industry', sIcon: cdicon2, priceRange: '3,000 - 25,000 MAD', targetClients: 'Travel agencies, tour operators, hotels' },
  { Id: 'ind-18', title: 'Agriculture & Food Tech', slug: 'agriculture-food-tech', category: 'Industry', sIcon: cdicon3, priceRange: '5,000 - 30,000 MAD', targetClients: 'Agri-tech startups, distribution' },
  { Id: 'ind-19', title: 'Manufacturing & Industry', slug: 'manufacturing-industry', category: 'Industry', sIcon: cdicon4, priceRange: '10,000 - 50,000 MAD', targetClients: 'Factories, B2B manufacturers' },
  { Id: 'ind-20', title: 'Technology & IT Services', slug: 'technology-it-services', category: 'Industry', sIcon: cdicon5, priceRange: '8,000 - 40,000 MAD', targetClients: 'IT firms, hosting companies' }
]

export default Services
