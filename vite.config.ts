import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use conditional base URL - empty for development, path for production
  base: process.env.NODE_ENV === 'production' ? '/zakaria-portfolio/' : '/',
})
