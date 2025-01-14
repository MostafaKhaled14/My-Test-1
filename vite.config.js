import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/My-Test-1/", // المسار الأساسي للمشروع
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // يضمن أن Vite يعمل مع الملفات المطلوبة
      },
    },
  },
});
