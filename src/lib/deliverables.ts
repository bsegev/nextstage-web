// Re-export everything from the new organized deliverables structure
export * from './deliverables/index';

// Maintain backward compatibility with existing imports
export {
  DELIVERABLES as deliverables,
  getDeliverableBySlug,
  getAllDeliverableSlugs,
} from './deliverables/index'; 