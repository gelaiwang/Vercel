import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Vercel/',  // <-- 替换为你的仓库名
  plugins: [react()],
})