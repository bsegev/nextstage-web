// Re-export everything from the new organized deliverables structure
export * from './deliverables/index';

// Maintain backward compatibility with existing imports
export {
  deliverables,
  getDeliverablesByCategory,
  getDeliverableById,
  getAllCategories,
} from './deliverables/index';

export type { Deliverable } from './deliverables/types'; 