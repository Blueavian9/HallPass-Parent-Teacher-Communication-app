import { createClient } from "@supabase/supabase-js";
// import { Database } from "../database.types";
import { supabase } from "./supabaseClient";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables! Check your .env file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
