interface CaseStudyGalleryType {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

interface CaseStudyGalleryProps {
  data: CaseStudyGalleryType;
}

export default function CaseStudyGallery({ data }: CaseStudyGalleryProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-display mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 