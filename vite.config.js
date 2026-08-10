import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works at any GitHub Pages URL
// (user site at "/" or project site at "/<repo>/") without reconfiguring.
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
});
