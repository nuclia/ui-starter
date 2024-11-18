import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@nuclia/ui',
        replacement: path.resolve(__dirname, './libs/nuclia/libs/search-widget/src/index.js'),
      },
      {
        find: '@nuclia/core',
        replacement: path.resolve(__dirname, './libs/nuclia/libs/sdk-core/src/index.ts'),
      },
    ],
  },
  build: {
    outDir: `dist/my-widget`,
    lib: {
      entry: `src/widgets/my-widget/lib.ts`,
      name: 'NucliaWidgetLibrary',
      fileName: 'widget',
    },
  },
  plugins: [
    svelte({
      include: ['src/components/*.svelte', 'libs/nuclia/libs/search-widget/src/**/*.svelte'],
      exclude: ['src/widgets/my-widget/*.svelte'],
      preprocess: sveltePreprocess(),
      compilerOptions: {
        css: true,
      },
    }),
    svelte({
      include: [`src/widgets/my-widget/*.svelte`],
      preprocess: sveltePreprocess(),
      compilerOptions: {
        css: true,
        customElement: true,
      },
    }),
  ],
});
