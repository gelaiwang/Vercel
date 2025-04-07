import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'   // ✅ 关键！让所有资源路径使用相对路径，兼容 Vercel
})