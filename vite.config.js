import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
    emptyOutDir: true, // Limpia el directorio de salida antes de construir
  },
  base: "./", // Asegura rutas relativas
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Usa esta línea si necesitas importar estilos o variables globales
        additionalData: `@use "sass:map";`
      }
    }
  },
});
