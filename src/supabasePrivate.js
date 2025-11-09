// 🔒 supabasePrivate.js
// Dành cho backend - dùng service role key (toàn quyền)

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fxxatsxrzyhsdryawliq.supabase.co";
const SUPABASE_SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldndpZGhrcmN2d2h1d25sbnNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTkxNDg0MywiZXhwIjoyMDc1NDkwODQzfQ.F6O3kIsqPN5OAtkAuCW4g-pqLvNtkbeeFbOVD9wNJjk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
