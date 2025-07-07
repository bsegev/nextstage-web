'use client'

import { useState } from 'react'
import { PremiumLeadCapture } from '@/components/PremiumLeadCapture'
import { EnhancedStrategyBrief } from '@/components/EnhancedStrategyBrief'
import NextStageNavbar from '@/components/NextStageNavbar'
import Footer from '@/components/Footer'

interface BriefData {
  responses: Array<{
    question: string;
    answer: string;
    questionIndex: number;
  }>;
  extractedInfo: {
    name?: string;
    project?: string;
    audience?: string;
    problem?: string;
    budget?: string;
    timeline?: string;
    industry?: string;
    stage?: string;
    founderType?: string;
  };
  submissionId: string;
}

export default function ChatPage() {
  const [isComplete, setIsComplete] = useState(false)
  const [briefData, setBriefData] = useState<BriefData | null>(null)

  const handleComplete = (responses: any[], extractedInfo: any, submissionId: string) => {
    setBriefData({ responses, extractedInfo, submissionId })
    setIsComplete(true)
  }

  const handleRefine = () => {
    setIsComplete(false)
    setBriefData(null)
  }

  const handleStartOver = () => {
    setIsComplete(false)
    setBriefData(null)
  }

  if (isComplete && briefData) {
    return (
      <div className="bg-gradient-to-br from-bone via-white to-accent/5 min-h-screen">
        <NextStageNavbar />
        <div className="pt-20">
          <EnhancedStrategyBrief 
            responses={briefData.responses}
            extractedInfo={briefData.extractedInfo}
            submissionId={briefData.submissionId}
            onRefine={handleRefine}
            onStartOver={handleStartOver}
          />
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-obsidian min-h-screen">
      <NextStageNavbar />
      <div className="pt-20">
        <PremiumLeadCapture onComplete={handleComplete} />
      </div>
      <Footer />
    </div>
  )
} 