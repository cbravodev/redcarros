// import {defineConfig} from "vite";import {resolve} from "path";
// export default defineConfig({build:{rollupOptions:{input:{main:resolve("index.html"),admin:resolve("admin.html")}}}});






import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/App-cars/",
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        admin: resolve("admin.html"),
      },
    },
  },
});
