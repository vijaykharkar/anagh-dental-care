import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Serves src/assets/logo.jpeg at /logo.jpeg in dev AND emits it to dist/ in build
function faviconPlugin() {
  const logoPath = resolve(process.cwd(), 'src/assets/logo.jpeg')

  return {
    name: 'vite-plugin-favicon',

    // Dev server middleware: intercept GET /logo.jpeg
    configureServer(server) {
      server.middlewares.use('/logo.jpeg', (_req, res) => {
        res.setHeader('Content-Type', 'image/jpeg')
        res.setHeader('Cache-Control', 'public, max-age=31536000')
        res.end(readFileSync(logoPath))
      })
    },

    // Production build: emit logo.jpeg into dist root
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'logo.jpeg',
        source: readFileSync(logoPath),
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), faviconPlugin()],
})
