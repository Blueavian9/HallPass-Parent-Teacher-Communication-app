import {createClient }  from "@supabase/supabase-js"; // ✅ Correct import


ServerRouter(async (req: Request) => {

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables!");

// Do server-side stuff here
}})