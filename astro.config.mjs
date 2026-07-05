import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  // Portal pages are server-rendered per-request by default (dynamic, per-tenant).
  // Marketing pages opt into static prerendering individually via `export const prerender = true`.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    tailwind(),
  ],
});
