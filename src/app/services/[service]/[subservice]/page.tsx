'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getSubserviceBySlug } from '@/lib/subservices';
import SubserviceTemplate from '@/components/subservices/SubserviceTemplate';
import { useParams } from 'next/navigation';

export default function SubservicePage() {
  const params = useParams();
  const service = params.service as string;
  const subservice = params.subservice as string;
  
  const subserviceData = getSubserviceBySlug(subservice);

  if (!subserviceData) {
    notFound();
  }

  return <SubserviceTemplate subservice={subserviceData} />;
} 