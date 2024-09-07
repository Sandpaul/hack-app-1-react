import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})

// // vite.config.js
// export default {
//   build: {
//     outDir: 'build', // Changes output folder from 'dist' to 'build'
//   },
// };