import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio-terminal/' : '/', // Замените на название вашего GitHub репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})