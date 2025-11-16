import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  resolve: {
    alias: { "~": path.resolve(__dirname, "app") }
  },
});
