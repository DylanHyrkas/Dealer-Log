// supabase database password = lZmOIJzuCjK0bFOF


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ayaufgwubtfcrtekmcap.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5YXVmZ3d1YnRmY3J0ZWttY2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNDc3NzYsImV4cCI6MjA0OTYyMzc3Nn0.3eohx03sCIG2KKkVKPlqYYUgiHWCJ06IIgVS-C1_xa8'
export const supabase = createClient(supabaseUrl, supabaseKey)