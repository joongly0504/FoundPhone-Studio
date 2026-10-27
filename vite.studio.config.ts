import { localIconPlugin } from "./scripts/local-icon-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * The authoring UI is intentionally built separately from the player.  This
 * keeps the Studio tools out of a published phone experience while still
 * making a static, locally previewable creator build available.
 */
export default defineConfig(({ command }) => ({
  base: "./",
  plugins: [localIconPlugin(command), react()],
  build: {
    outDir: "dist-studio",
    rollupOptions: {
      input: "studio.html",
    },
  },
}));
