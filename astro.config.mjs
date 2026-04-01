// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.blackknightroofing.com/",

  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  integrations: [icon()],

  image: {
    domains: ["www.gstatic.com"],
  },

  adapter: vercel({
    imageService: true,
  }),
});