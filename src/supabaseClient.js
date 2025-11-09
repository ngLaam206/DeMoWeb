// ✅ supabaseClient.js
// Dành cho frontend - chỉ dùng public key (anon)

import { createClient } from "@supabase/supabase-js";

// ⚙️ Thay bằng URL và public key thật của bạn
const SUPABASE_URL = "https://fxxatsxrzyhsdryawliq.supabase.co";
const SUPABASE_PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldndpZGhrcmN2d2h1d25sbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTQ4NDMsImV4cCI6MjA3NTQ5MDg0M30.891VnWKN3lg_Z9YI_9ITM2gnGpwvm0ScTdnVZDqEe2o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
