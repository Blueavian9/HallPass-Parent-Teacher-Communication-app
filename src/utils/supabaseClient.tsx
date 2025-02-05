import { createClient } from "@supabase/supabase-js";

// Load from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure environment variables exist
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables! Check your .env file.");
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
