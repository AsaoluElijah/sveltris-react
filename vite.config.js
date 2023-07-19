import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltrisVitePlugins } from "sveltris";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ...sveltrisVitePlugins(),
    svelte({ compilerOptions: { hydratable: true } }),
  ],
});
