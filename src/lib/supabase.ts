import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client for client-side operations (browser)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client for server-side operations (API routes) with service role key
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Database types
export interface Submission {
  id: string
  responses: { questionIndex: number; answer: string; question: string }[]
  status: 'draft' | 'completed'
  generated_brief?: { personalMessage: string; sections: { title: string; content: string; reasoning: string }[] }
  created_at: string
  updated_at: string
  calendly_clicked?: boolean
  calendly_clicked_at?: string
}

export interface Analytics {
  id: string
  submission_id: string
  event_type: string
  event_data: Record<string, unknown>
  created_at: string
} 