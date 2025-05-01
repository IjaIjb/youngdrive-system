// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.svg'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    base: '/',  // Adjust this if using a subpath in production
  },
};
