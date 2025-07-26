import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "ReactSmartCaptcha",
            fileName: (format) => `react-smart-captcha.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "motion", "sonner"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    motion: "motion",
                    sonner: "sonner"
                }
            }
        }
    }
});
