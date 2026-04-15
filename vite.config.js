import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base path below to match your GitHub repository name
// Example: if your repo is at github.com/yourusername/soundous_portfolio, use '/soundous_portfolio/'
// If deploying to a custom domain, you can remove the base property entirely
export default defineConfig({
  plugins: [react()],
  base: '/soundous_portfolio/',
})
