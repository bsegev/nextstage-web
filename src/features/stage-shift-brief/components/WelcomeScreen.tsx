import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface WelcomeScreenProps {
  onBeginBrief: () => void;
}

export const WelcomeScreen = ({ onBeginBrief }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Hero Content */}
        <div className="space-y-8">
          <h1 className="text-hero font-serif">
            Let&apos;s build the future you&apos;ve been thinking about.
          </h1>
          
          <p className="text-subtitle max-w-2xl mx-auto">
            A few questions. A clearer path. A taste of what&apos;s possible.
          </p>
          
          {/* Primary CTA */}
          <div className="space-y-4 pt-8">
            <Button 
              onClick={onBeginBrief}
              size="lg"
              className="btn-primary px-8 py-6 text-lg rounded-full group"
            >
              Begin the Brief
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Secondary CTA */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to talk?
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="btn-secondary px-6 py-3 rounded-full"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
        
        {/* Subtle branding */}
        <div className="pt-16 opacity-60">
          <p className="text-sm font-medium tracking-wide">
            NEXTSTAGE STRATEGY CONCIERGE
          </p>
        </div>
      </div>
    </div>
  );
};