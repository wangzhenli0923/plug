import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ 正确插件名和语法

export default defineConfig({
  base: '/',  // ✅ 确保资源从根目录加载
  plugins: [react()],
  build: {
    outDir: 'dist',  // ✅ 明确输出目录
    assetsDir: 'assets'  // ✅ 资源子目录
  }
});