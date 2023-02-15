import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
