import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-terminal/', // Замените на название вашего GitHub репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})