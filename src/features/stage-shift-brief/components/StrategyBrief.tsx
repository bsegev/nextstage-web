import { useState, useEffect } from "react";
import { Button } from "./ui/button";
// import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Calendar, Mail, RefreshCw, Brain, CheckCircle2, ArrowLeft, Download } from "lucide-react";
import { UserResponse } from "@/features/strategy-chat/types";
import { supabase } from "@/lib/supabase";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";

interface StrategyBriefProps {
  responses: UserResponse[];
  submissionId: string;
  onRefine: () => void;
  onStartOver: () => void;
}

// Mock AI-generated brief for demonstration
interface BriefSection {
  title: string;
  content: string;
  reasoning: string;
}

interface Brief {
  personalMessage: string;
  sections: BriefSection[];
}

const generateMockBrief = (responses: UserResponse[]): Brief => {
  const name = responses.find(r => r.questionIndex === 0)?.answer || "Friend";
  const building = responses.find(r => r.questionIndex === 1)?.answer || "your project";
  const audience = responses.find(r => r.questionIndex === 2)?.answer || "your target market";
  const problem = responses.find(r => r.questionIndex === 3)?.answer || "market challenges";
  const success = responses.find(r => r.questionIndex === 4)?.answer || "your goals";
  const timeline = responses.find(r => r.questionIndex === 5)?.answer || "your timeline";
  const budget = responses.find(r => r.questionIndex === 6)?.answer || "your budget";
  
  return {
    personalMessage: `Hi ${name}, I've analyzed your responses and I'm excited about what you're building. Here's my strategic assessment of your opportunity.`,
    
    sections: [
      {
        title: "Executive Summary",
        content: `${name} is developing ${building} to serve ${audience}. This represents a focused approach to addressing specific market needs while building sustainable value. The timing appears strong given current market conditions and the clear problem-solution fit identified.`,
        reasoning: "I've distilled your core concept to highlight the key value proposition and target focus. This framing helps potential partners and investors quickly understand your direction."
      },
      {
        title: "Target Market Analysis",
        content: `Primary audience: ${audience}. The key insight here is understanding not just who they are, but what drives their decision-making and how they currently solve this problem. Market size appears significant with clear segmentation opportunities.`,
        reasoning: "Defining your audience with precision is crucial for product-market fit. I've highlighted the behavioral aspects that will inform your go-to-market strategy."
      },
      {
        title: "Problem Statement",
        content: `Core challenge: ${problem}. This represents a fundamental pain point that your target audience faces regularly. The problem is well-defined, validated, and creates a clear opportunity for a differentiated solution.`,
        reasoning: "Problems that people actively seek to solve represent the strongest foundation for sustainable businesses. I've positioned yours within this framework."
      },
      {
        title: "Success Metrics & Vision",
        content: `Your 6-month vision: ${success}. This demonstrates clear thinking about measurable outcomes and realistic goal-setting. The vision is ambitious yet achievable given your timeline of ${timeline}.`,
        reasoning: "Successful ventures have clear success metrics and realistic timelines. Your vision shows strong strategic thinking about what matters most."
      },
      {
        title: "Strategic Recommendations",
        content: `Given your ${budget} budget and ${timeline} timeline, I recommend focusing on rapid validation, minimal viable product development, and early customer feedback loops. Your competitive advantage likely lies in execution speed and customer intimacy.`,
        reasoning: "In fast-moving markets, operational excellence often trumps product features. I've identified the key capabilities that will drive your long-term success."
      },
      {
        title: "Next Steps",
        content: `Immediate priorities: 1) Validate core assumptions through 10+ customer interviews, 2) Build MVP for testing within 30 days, 3) Establish metrics dashboard for tracking progress, 4) Secure initial funding if needed, 5) Build core team with complementary skills.`,
        reasoning: "The most successful founders move quickly from idea to customer validation. These steps are sequenced to minimize risk while maximizing learning velocity."
      }
    ]
  };
};

export const StrategyBrief = ({ responses, submissionId, onRefine, onStartOver }: StrategyBriefProps) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [brief, setBrief] = useState<Brief | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadBrief();
  }, [submissionId]);

  const loadBrief = async () => {
    try {
      // Generate brief directly since we're not using database storage
      const response = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          submissionId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate brief');
      }

      const { brief } = await response.json();
      setBrief(brief);
    } catch (error) {
      console.error('Error loading brief:', error);
      toast({
        title: "Error",
        description: "Failed to load your brief. Please try again.",
        variant: "destructive",
      });
      // Fallback to mock brief
      setBrief(generateMockBrief(responses));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSendEmail = async () => {
    if (!email.trim()) return;
    
    setIsLoadingEmail(true);
    
    try {
      // Email sending temporarily disabled
      console.log('Email sending disabled - would send to:', email.trim());
      
      // Simulate success for UI feedback
      setTimeout(() => {
        setEmailSent(true);
        setIsLoadingEmail(false);
        toast({
          title: "Feature Coming Soon!",
          description: `Email delivery will be available soon. For now, use the download option.`,
        });
      }, 1000);

    } catch (error) {
      console.error('Error in email handler:', error);
      setIsLoadingEmail(false);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleBookCall = async () => {
    try {
      // Note: Database tracking disabled since we're using the simplified system
      console.log('Calendar booking clicked');
      
      // Open calendly
      window.open("https://cal.com/bensegev/30min", "_blank");
    } catch (error) {
      console.error('Error opening calendar:', error);
      // Still open calendly even if error occurs
      window.open("https://cal.com/bensegev/30min", "_blank");
    }
  };

  const handlePrintDownload = async () => {
    try {
      // Note: Database tracking disabled since we're using the simplified system
      console.log('PDF download requested');
      
      // Trigger browser print
      window.print();
    } catch (error) {
      console.error('Error triggering print:', error);
      // Still trigger print even if error occurs
      window.print();
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col pt-24 bg-obsidian">
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center relative overflow-hidden">
                <Brain className="w-12 h-12 text-obsidian animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bone/20 to-transparent animate-gradient" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-medium text-bone mb-4">
              Generating your strategic brief...
            </h2>
            <p className="text-bone/70 text-lg">
              Analyzing your responses and crafting personalized recommendations
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!brief) {
    return (
      <div className="h-screen flex flex-col pt-24 bg-obsidian">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="font-display text-2xl font-medium text-bone mb-4">
              Unable to load brief
            </h2>
            <Button onClick={onRefine} variant="default">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col pt-24 bg-obsidian">
      {/* Fixed Header */}
      <div className="flex-shrink-0 bg-obsidian/95 backdrop-blur-sm border-b border-accent/20 px-6 py-4 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                onClick={onRefine}
                variant="ghost"
                size="sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Chat
              </Button>
              <Button
                onClick={onStartOver}
                variant="ghost"
                size="sm"
                className="text-bone/60 hover:text-bone"
              >
                Start Over
              </Button>
              <div className="h-6 w-px bg-accent/20" />
              <h1 className="font-display text-xl font-medium text-bone">Your Strategic Brief</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handlePrintDownload}
                variant="ghost"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 bg-obsidian print:overflow-visible print:px-0 print:py-0">
        <div className="max-w-4xl mx-auto space-y-8 print:max-w-none print:space-y-6">
          {/* Print Header */}
          <div className="hidden print:block mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Strategic Brief</h1>
            <p className="text-gray-600">Generated by NextStage</p>
            <hr className="mt-4 border-gray-300" />
          </div>

          {/* Personal Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm print:bg-gray-50 print:border-gray-200 print:rounded-lg print:p-4"
          >
            <p className="text-bone text-lg leading-relaxed print:text-black print:text-base">
              {brief.personalMessage}
            </p>
          </motion.div>

          {/* Brief Sections */}
          <div className="space-y-6 print:space-y-4">
            {brief.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-accent/5 border border-accent/10 rounded-2xl p-6 backdrop-blur-sm print:bg-white print:border-gray-200 print:rounded-lg print:p-4 print:mb-4"
              >
                <h3 className="font-display text-xl font-semibold text-bone mb-4 print:text-black print:text-lg print:mb-3">
                  {section.title}
                </h3>
                <p className="text-bone/90 leading-relaxed mb-4 print:text-black print:text-sm print:mb-3 print:leading-normal">
                  {section.content}
                </p>
                <div className="border-t border-accent/10 pt-4 print:border-gray-200 print:pt-3">
                  <p className="text-bone/60 text-sm italic print:text-gray-600 print:text-xs">
                    <strong>Strategic Insight:</strong> {section.reasoning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm print:hidden"
          >
            <h3 className="font-display text-xl font-semibold text-bone mb-6">
              Ready to move forward?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Section */}
              <div className="space-y-4">
                <h4 className="font-medium text-bone">Get this brief via email</h4>
                {!emailSent ? (
                  <div className="flex space-x-3">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-accent/10 border-accent/30 text-bone placeholder-bone/50"
                    />
                    <Button
                      onClick={handleSendEmail}
                      disabled={!email.trim() || isLoadingEmail}
                      variant="default"
                    >
                      {isLoadingEmail ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Email sent successfully!</span>
                  </div>
                )}
              </div>

              {/* Calendar Section */}
              <div className="space-y-4">
                <h4 className="font-medium text-bone">Discuss your strategy</h4>
                <Button
                  onClick={handleBookCall}
                  variant="default"
                  className="w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Print Footer */}
          <div className="hidden print:block mt-8 pt-4 border-t border-gray-300">
            <p className="text-xs text-gray-500 text-center">
              Generated by NextStage • {new Date().toLocaleDateString()} • nextstage.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};