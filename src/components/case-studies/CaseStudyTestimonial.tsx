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
    <section className="py-20 bg-background dark:bg-obsidian">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-2xl font-light text-foreground/90 mb-8 italic">
          &ldquo;{data.quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          {data.image && (
            <img src={data.image} alt={data.author} className="w-12 h-12 rounded-full" />
          )}
          <div>
            <div className="font-semibold text-foreground">{data.author}</div>
            <div className="text-foreground/60">{data.title}, {data.company}</div>
          </div>
        </div>
      </div>
    </section>
  );
} 