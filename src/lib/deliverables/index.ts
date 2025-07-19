import { brandIdentityDeliverable } from './brand-identity';
import { websiteDesignDeliverable } from './website-design';
import { marketResearchDeliverable } from './market-research';
import { mvpDevelopmentDeliverable } from './mvp-development';
import { competitiveAnalysisDeliverable } from './competitive-analysis';
import { brandStrategyDeliverable } from './brand-strategy';
import { pitchDeckDesignDeliverable } from './pitch-deck-design';
import { socialMediaAssetsDeliverable } from './social-media-assets';
import { contentStrategyDeliverable } from './content-strategy';
import { marketingCollateralDeliverable } from './marketing-collateral';
import { digitalBrandManagementDeliverable } from './digital-brand-management';
import { businessStrategyDeliverable } from './business-strategy';
import { financialPlanningDeliverable } from './financial-planning';
import { goToMarketStrategyDeliverable } from './go-to-market-strategy';
import { productStrategyDeliverable } from './product-strategy';
import { strategicPartnershipsDeliverable } from './strategic-partnerships';
import { businessIntelligenceDeliverable } from './business-intelligence';
import { customGptDevelopmentDeliverable } from './custom-gpt-development';
import { workflowAutomationDeliverable } from './workflow-automation';
import { digitalTransformationDeliverable } from './digital-transformation';
import { interactiveDemoDeliverable } from './interactive-demo';
import { uxUiPrototypesDeliverable } from './ux-ui-prototypes';
import { productivityStackSetupDeliverable } from './productivity-stack-setup';
import { softwareConsultingDeliverable } from './software-consulting';

// Map of all deliverables by slug
export const DELIVERABLES = {
  'brand-identity': brandIdentityDeliverable,
  'website-design': websiteDesignDeliverable,
  'market-research': marketResearchDeliverable,
  'brand-strategy': brandStrategyDeliverable,
  'pitch-deck-design': pitchDeckDesignDeliverable,
  'social-media-assets': socialMediaAssetsDeliverable,
  'content-strategy': contentStrategyDeliverable,
  'marketing-collateral': marketingCollateralDeliverable,
  'digital-brand-management': digitalBrandManagementDeliverable,
  'business-strategy': businessStrategyDeliverable,
  'financial-planning': financialPlanningDeliverable,
  'go-to-market-strategy': goToMarketStrategyDeliverable,
  'product-strategy': productStrategyDeliverable, 
  'strategic-partnerships': strategicPartnershipsDeliverable,
  'business-intelligence': businessIntelligenceDeliverable,
  'competitive-analysis': competitiveAnalysisDeliverable,

  
  // New Tech/Software Deliverables
  'custom-gpt-development': customGptDevelopmentDeliverable,
  'workflow-automation': workflowAutomationDeliverable,
  'digital-transformation': digitalTransformationDeliverable,
  'interactive-demo': interactiveDemoDeliverable,
  'ux-ui-prototypes': uxUiPrototypesDeliverable,
  'productivity-stack-setup': productivityStackSetupDeliverable,
  'software-consulting': softwareConsultingDeliverable,
  'mvp-development': mvpDevelopmentDeliverable,
  
  // Legacy redirects (keeping for backward compatibility)
  'product-development': mvpDevelopmentDeliverable,
  'ai-implementation': mvpDevelopmentDeliverable,
  'system-integration': mvpDevelopmentDeliverable,
  'technical-architecture': mvpDevelopmentDeliverable,
  'api-development': mvpDevelopmentDeliverable,
  'platform-migration': mvpDevelopmentDeliverable,
  'performance-marketing': marketResearchDeliverable,
  'content-marketing-systems': brandIdentityDeliverable,
  'email-marketing-automation': mvpDevelopmentDeliverable,
  'conversion-rate-optimization': websiteDesignDeliverable,
  'customer-acquisition-strategy': marketResearchDeliverable,
  'marketing-analytics-setup': mvpDevelopmentDeliverable,
  'sales-funnel-development': websiteDesignDeliverable,
  'growth-strategy': marketResearchDeliverable,
};

// Function to get deliverable by slug
export function getDeliverableBySlug(slug: string) {
  return DELIVERABLES[slug as keyof typeof DELIVERABLES] || null;
}

// Function to get all deliverable slugs
export function getAllDeliverableSlugs() {
  return Object.keys(DELIVERABLES);
} 