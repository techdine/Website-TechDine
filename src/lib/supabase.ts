// ============================================
// COMPLETE IMPLEMENTATION - DEMO FORM + SUPABASE
// ============================================

// FILE 1: src/lib/supabase.ts
// ---------------------------------------------
// Create this new file for Supabase client

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_DEMO_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_DEMO_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Supabase configuration is missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database