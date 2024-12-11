import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true, // Ensures it fails if port 80 is unavailable
    host: true, // Listen on all available IPs
  },
})
