import { notFound } from "next/navigation";
import { getBundleById } from "@/lib/deliverables";
import BundleTemplate from "@/components/bundles/BundleTemplate";

interface BundlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BundlePage({ params }: BundlePageProps) {
  const { slug } = await params;
  const bundle = getBundleById(slug);
  
  if (!bundle) {
    notFound();
  }
  
  return <BundleTemplate bundle={bundle} />;
}

export async function generateStaticParams() {
  // This will be populated with all bundle IDs
  const bundleIds = [
    'brand-foundation-bundle',
    'market-entry-bundle', 
    'growth-systems-bundle',
    'mvp-launch-bundle',
    'digital-optimization-bundle',
    'business-intelligence-bundle'
  ];
  
  return bundleIds.map((id) => ({
    slug: id,
  }));
} 