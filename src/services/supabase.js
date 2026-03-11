import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://clwoczslasksnwsidmvi.supabase.co";
const supabaseKey =
  "***REMOVED-SUPABASE-ANON-KEY-2***";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
