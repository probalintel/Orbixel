import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'orbixel' with your GitHub repository name
  base: '/orbixel/', 
  build: {
    outDir: 'dist', // This ensures the output goes to the 'dist' folder
  }
})
