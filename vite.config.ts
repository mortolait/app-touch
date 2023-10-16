import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Adicione esta configuração para copiar os arquivos estáticos para a pasta de build
    assetsDir: 'assets',
  }
})
