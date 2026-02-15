import react from "@vitejs/plugin-react";
import blogger from "blogger-plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    blogger({
      proxyBlog: "https://mdwnplus.blogspot.com",
    }),
  ],
});