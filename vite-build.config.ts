import { defineConfig } from 'vite';
import * as path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const widgetFolder = process.argv[5] || 'search-widget';
const fileName = process.argv[6] || 'nuclia-widget';


export default defineConfig({
  resolve: {
    alias: [
      { find: '@nuclia/core', replacement: path.resolve(__dirname, 'libs/nuclia/libs/sdk-core/src/index.ts') },
      { find: '@nuclia/prediction', replacement: path.resolve(__dirname, 'libs/nuclia/libs/prediction/src/index.ts') },
    ],
  },
  build: {
    outDir: `dist/libs/${widgetFolder}`,
    lib: {
      entry: `libs/nuclia/libs/search-widget/src/widgets/${widgetFolder}/lib.ts`,
      name: 'NucliaWidgetLibrary',
      fileName,
    },
  },
  plugins: [
    svelte({
      include: ['libs/nuclia/libs/search-widget/src/**/*.svelte'],
      exclude: ['libs/nuclia/libs/search-widget/src/widgets/**/*.svelte'],
      preprocess: sveltePreprocess(),
      compilerOptions: {
        css: true,
      },
    }),
    svelte({
      include: [`libs/nuclia/libs/search-widget/src/widgets/${widgetFolder}/*.svelte`],
      preprocess: sveltePreprocess(),
      compilerOptions: {
        css: true,
        customElement: true,
      },
    }),
  ],
});
