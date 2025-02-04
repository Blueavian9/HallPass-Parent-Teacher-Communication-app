import { createClient } from "@supabase/supabase-js"; // ✅ Correct import


const supabaseUrl = 'https://uvbefnnzcblmhzmsqruj.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey); // ✅ No conflicts
