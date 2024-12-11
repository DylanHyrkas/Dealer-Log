// supabase database password = r8umSGLD2GCBLg87


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqjauaooueyoyezafwww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxamF1YW9vdWV5b3llemFmd3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODI2ODYsImV4cCI6MjA0OTQ1ODY4Nn0.bPqMbu0hZVivCo6XfcNdrMy-h9ubEcNJrL3FJLDjoNY'
export const supabase = createClient(supabaseUrl, supabaseKey)