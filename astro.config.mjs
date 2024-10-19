import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import simpleStackQuery from "simple-stack-query";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), sitemap(), mdx(), simpleStackQuery(), react()],

    output: "server",
    adapter: cloudflare(),
});
