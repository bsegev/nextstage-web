import { Deliverable } from './types';
import { strategyPlanningDeliverables } from './strategy-planning';
import { brandingDesignDeliverables } from './branding-design';
import { techSoftwareDeliverables } from './tech-software';
import { marketingGrowthDeliverables } from './marketing-growth';

// Combine all deliverables into a single object
export const deliverables: Record<string, Deliverable> = {
  ...strategyPlanningDeliverables,
  ...brandingDesignDeliverables,
  ...techSoftwareDeliverables,
  ...marketingGrowthDeliverables,
};

// Helper functions for filtering and organizing deliverables
export const getDeliverablesByCategory = (category: string) => {
  return Object.values(deliverables).filter(d => d.category === category);
};

export const getDeliverableById = (id: string) => {
  return deliverables[id];
};

export const getAllCategories = () => {
  return [...new Set(Object.values(deliverables).map(d => d.category))];
};

// Export types
export type { Deliverable } from './types';
export type { Bundle } from './bundles';

// Export individual category collections for direct access if needed
export {
  strategyPlanningDeliverables,
  brandingDesignDeliverables,
  techSoftwareDeliverables,
  marketingGrowthDeliverables,
};

// Export bundles
export {
  bundles,
  getBundlesForDeliverable,
  getAllBundles,
  getBundleById,
} from './bundles'; 