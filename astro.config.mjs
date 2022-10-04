import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import * as dotenv from "dotenv";

dotenv.config()

console.log("hi")

console.log(process.env.STORYBLOK_TOKEN)

// https://astro.build/config
export default defineConfig({

  output: "static",

  integrations: [
    vue(),
    tailwind({
      config: {
        // applyBaseStyles: false,
      },
    }),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      }
    }),
  ]
});