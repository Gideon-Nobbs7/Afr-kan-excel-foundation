import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 5176,
    strictPort: true,
    allowedHosts: [".ngrok-free.app", ".ngrok-free.dev"]
  }
})