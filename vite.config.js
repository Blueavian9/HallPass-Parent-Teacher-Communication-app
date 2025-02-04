import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Change this if deploying to Github pages
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Ensures Vite doesn't switch to another port
    open: true, // Automatically opens the browser when the server starts
  },
  envPrefix: "VITE_", // Ensures Vite recognizes env variables with "VITE_" prefix
});
