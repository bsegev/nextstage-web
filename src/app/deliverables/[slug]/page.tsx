import { notFound } from 'next/navigation';
import { getDeliverableById } from '@/lib/deliverables';
import DeliverableTemplate from '@/components/deliverables/DeliverableTemplate';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const deliverable = getDeliverableById(slug);
  
  if (!deliverable) {
    return {
      title: 'Deliverable Not Found',
    };
  }

  return {
    title: `${deliverable.title} - NextStage`,
    description: deliverable.description,
    openGraph: {
      title: `${deliverable.title} - NextStage`,
      description: deliverable.description,
      images: [deliverable.heroImage],
    },
  };
}

export default async function DeliverablePage({ params }: Props) {
  const { slug } = await params;
  const deliverable = getDeliverableById(slug);

  if (!deliverable) {
    notFound();
  }

  return <DeliverableTemplate deliverable={deliverable} />;
} 