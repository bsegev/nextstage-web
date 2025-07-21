import { SubserviceData } from './types';

// Import subservice data files
import { brandingDesignSubservices } from './branding-design';
import { marketingGrowthSubservices } from './marketing-growth';
import { techSoftwareSubservices } from './tech-software';
import { strategyPlanningSubservices } from './strategy-planning';

// Map of all subservices by slug
export const SUBSERVICES: Record<string, SubserviceData> = {
  // Branding & Design
  ...brandingDesignSubservices,
  
  // Marketing & Growth
  ...marketingGrowthSubservices,
  
  // Tech & Software
  ...techSoftwareSubservices,
  
  // Strategy & Planning
  ...strategyPlanningSubservices,
};

// Function to get subservice by slug
export function getSubserviceBySlug(slug: string) {
  return SUBSERVICES[slug] || null;
}

// Function to get all subservice slugs
export function getAllSubserviceSlugs() {
  return Object.keys(SUBSERVICES);
}

// Function to get subservices by service
export function getSubservicesByService(service: string) {
  return Object.values(SUBSERVICES).filter(subservice => subservice.service === service);
} 