// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static landing page, no server. Tailwind CSS 4 via its Vite plugin.
export default defineConfig({
  site: 'https://dobry.online',
  vite: {
    plugins: [tailwindcss()],
  },
});
