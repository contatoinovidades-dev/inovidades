import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@layouts": path.resolve("./src/layouts"),
      },
    },
  },
});
