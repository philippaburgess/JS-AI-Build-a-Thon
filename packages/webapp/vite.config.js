import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Use current directory as root
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // This avoids the broken absolute/relative path error
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
});
