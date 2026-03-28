// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rnp-black-knight-roofing.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  image: {
    domains: ["www.gstatic.com"],
  },
});
