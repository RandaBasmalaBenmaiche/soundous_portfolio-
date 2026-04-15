import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base path below to match your GitHub repository name
// Example: if your repo is at github.com/yourusername/soundous_portfolio, use '/soundous_portfolio/'
// If deploying to a custom domain, you can remove the base property entirely
export default defineConfig({
  plugins: [react()],
  base: '/soundous_portfolio-/',
  build: {
    // Use esbuild for minification (faster and doesn't introduce eval)
    minify: 'esbuild',
    // Ensure clean output without sourcemaps that might trigger CSP
    sourcemap: false,
    // Target modern browsers for better CSP compatibility
    target: 'esnext',
  },
  // Disable Vite's CSP nonce injection which can conflict with strict policies
  appType: 'spa',
})
