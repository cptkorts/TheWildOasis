import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://***REMOVED-OLD-PROJECT-REF***.supabase.co";
const supabaseKey =
  "***REMOVED-SUPABASE-ANON-KEY-1***";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
