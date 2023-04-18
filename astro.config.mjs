import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from '@astrojs/vue';

export default defineConfig({
  site: "https://rad-starship-be0aaa.netlify.app",
  integrations: [
    tailwind(),
    vue({ appEntrypoint: '/src/pages/_app' }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
});
