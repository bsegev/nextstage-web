'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getDeliverableBySlug } from '@/lib/deliverables';
import DeliverableTemplateNew from '@/components/deliverables/DeliverableTemplateNew';
import { useParams } from 'next/navigation';

export default function DeliverablePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const deliverable = getDeliverableBySlug(slug);

  if (!deliverable) {
    notFound();
  }

  return <DeliverableTemplateNew deliverable={deliverable} />;
} 