import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png'],
  plugins: [
    react(),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
  build: {
    outDir: "build",
  },
})
