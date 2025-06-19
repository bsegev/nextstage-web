interface CaseStudyTestimonialType {
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

interface CaseStudyTestimonialProps {
  data: CaseStudyTestimonialType;
}

export default function CaseStudyTestimonial({ data }: CaseStudyTestimonialProps) {
  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-2xl font-light italic text-foreground mb-8">
          "{data.quote}"
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          {data.image && (
            <img src={data.image} alt={data.author} className="w-12 h-12 rounded-full" />
          )}
          <div>
            <p className="font-semibold text-foreground">{data.author}</p>
            <p className="text-sm text-foreground/60">{data.title}, {data.company}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 