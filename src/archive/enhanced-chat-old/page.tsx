'use client'

import { useState } from 'react'
import { EnhancedConversationalFlow } from '@/components/archive/EnhancedConversationalFlow'
import { EnhancedStrategyBrief } from '@/components/chat/EnhancedStrategyBrief'

export default function EnhancedChatOldPage() {
  const [isComplete, setIsComplete] = useState(false)
  const [briefData, setBriefData] = useState<{ 
    responses: any[]; 
    extractedInfo: any;
    submissionId: string 
  } | null>(null)

  const handleComplete = (responses: any[], submissionId: string, extractedInfo?: any) => {
    setBriefData({ responses, extractedInfo: extractedInfo || {}, submissionId })
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
      <EnhancedStrategyBrief 
        responses={briefData.responses}
        extractedInfo={briefData.extractedInfo}
        submissionId={briefData.submissionId}
        onRefine={handleRefine}
        onStartOver={handleStartOver}
      />
    )
  }

  return (
    <div className="bg-obsidian min-h-screen">
      <EnhancedConversationalFlow onComplete={handleComplete} />
    </div>
  )
} 