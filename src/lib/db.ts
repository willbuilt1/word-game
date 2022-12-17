import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    "https://ievqvciyfimnpptynkbt.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldnF2Y2l5ZmltbnBwdHlua2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyOTgyNzgsImV4cCI6MTk4Njg3NDI3OH0.DQM_pJAQ7S6mrh0QuLop5XoWUbsS68EWwYwJNKVmR14"
)
export default supabase 