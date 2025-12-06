import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://gmdrlrqtitgayddvyfpk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZHJscnF0aXRnYXlkZHZ5ZnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5Njk2MTEsImV4cCI6MjA4MDU0NTYxMX0.3Rs468Yz-9HVSnBRh4jATxETSMihPV1EwveT3rpkdT4"
);

export default supabase;
