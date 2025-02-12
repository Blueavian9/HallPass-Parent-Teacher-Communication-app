import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/HallPass-Parent-Teacher-Communication-App/", // Change this to "/HallPass-Parent-Teacher-Communication-App/" if deploying to a subdirectory
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true, // Ensure React Router works correctly
    strictPort: true,
    open: true, // Automatically open the browser on start
  },
  envPrefix: "VITE_", // Recognizes environment variables with the "VITE_" prefix
});
