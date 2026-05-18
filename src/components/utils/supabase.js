import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://youebxqmzggcwlblpwqm.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdWVieHFtemdnY3dsYmxwd3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMDY1MTMsImV4cCI6MjA5NDY4MjUxM30.JWoZKETXRX9LhatiDRgzgwBBbkCaibumuJm6fVlHDRM";

export const supabase_client = createClient(
  supabaseUrl,
  supabaseAnonKey
);