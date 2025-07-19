'use client';

import React, { useState } from 'react';
import DeliverableTemplate from '@/components/deliverables/DeliverableTemplate';
import DeliverableTemplateVisual from '@/components/deliverables/DeliverableTemplateVisual';
import { getDeliverableBySlug } from '@/lib/deliverables';

export default function DeliverableTestPage() {
  const [currentTemplate, setCurrentTemplate] = useState<'standard' | 'visual'>('visual');
  
  // Get sample deliverable data
  const brandIdentity = getDeliverableBySlug('brand-identity');
  
  if (!brandIdentity) {
    return <div>Deliverable not found</div>;
  }

  return (
    <div>
      {/* Template Switcher */}
      <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-2 border">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentTemplate('standard')}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              currentTemplate === 'standard' 
                ? 'bg-obsidian text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setCurrentTemplate('visual')}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              currentTemplate === 'visual' 
                ? 'bg-obsidian text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Visual
          </button>
        </div>
      </div>

      {/* Render Selected Template */}
      {currentTemplate === 'standard' ? (
        <DeliverableTemplate deliverable={brandIdentity} />
      ) : (
        <DeliverableTemplateVisual deliverable={brandIdentity} />
      )}
    </div>
  );
} 