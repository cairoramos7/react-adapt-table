import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/lib/']
    }),
  ],
  build: {
    lib: {
      // Caminho para o ponto de entrada principal
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'ReactFlexiTable',
      // O nome do arquivo de saída sem extensão
      fileName: 'react-adapt-table',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Externalize as dependências que não devem ser empacotadas
      external: ['react', 'react-dom'],
      output: {
        // Proporciona variáveis globais para os módulos externos
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});