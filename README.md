# Nuclia UI starter

Start building your own Svelte application using Nuclia’s search capabilities and UI tools.

## Installation

First you need to either download and uncompress the zip file directly from the repository or clone it by doing:

```bash
git clone https://github.com/nuclia/ui-starter.git
```

Then, install dependencies:

```bash
cd ui-starter
npm install
npm run missdev
```

You may have noticed the last step `npm run missdev` which might be unusual to you. [mrs-developer](https://github.com/collective/mrs-developer) is a NodeJS utility providing the command `missdev`
which makes it easy to work with external source code locally, as it allows to replace any given dependency with a checkout from its Git repository.

We're using `missdev` to load and have access to Nuclia’s frontend dependencies:

- **@nuclia/core**: SDK allowing to integrate Nuclia services in your frontend application
- **@nuclia/ui**: Svelte components and web components allowing to use Nuclia’s search capabilities
- **@nuclia/prediction**: library used by Nuclia’s `SearchBar` widget

The starter is a [SvelteKit](https://kit.svelte.dev/docs/introduction) application including:

- a simple layout allowing to navigate between the pages
- a page showing a simple example of Nuclia’s widgets integration
- a page showing an example of how Nuclia’s `NucliaSearchResults` widget works, loading API results without using the `NucliaSearchBar` widget.
- a page showing Nuclia‘s widgets dark mode
- a page showing how to customize Nuclia‘s widgets style
- a page showing how to easily add a breadcrumb above result rows

## Developing

Once you've cloned the project and installed dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The app is then available on http://localhost:5173/.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Compile your own Nuclia widget

Note: all theses steps are already implemented in this repository, but we detail them here so you can reproduce them in your own project.

- Create a new folder `src/widgets/my-widget` (`my-widget` is just how we named it in our example, you are free to choose any name)

- Copy all files from `libs/nuclia/libs/search-widget/src/widgets/search-widget/` to `src/widgets/my-widget`

- In the 2 Svelte files:

  - Fix the `globalCss` import:
    ```ts
    import globalCss from '../../../libs/nuclia/libs/search-widget/src/common/_global.scss?inline';
    ```
  - Replace all the other relative imports starting with `../..` with `@nuclia/ui`, like:

    ```ts
    import { loadFonts, loadSvgSprite, setCDN } from '../../core/utils';
    ```

    becomes

    ```ts
    import { loadFonts, loadSvgSprite, setCDN } from '@nuclia/ui';
    ```

    Be careful with default imports, like:

    ```ts
    import SearchInput from '../../components/search-input/SearchInput.svelte';
    ```

    will become

    ```ts
    import { SearchInput } from '@nuclia/ui';
    ```

  - In `SearchBar.svelte`, fix the `<style>` tag at the end:

    ```html
    <style
      lang="scss"
      src="../../../libs/nuclia/libs/search-widget/src/common/common-style.scss"
    ></style>
    ```

  - In `SearchResults.scss`, fix the import path similarly:

    ```scss
    @import '../../../libs/nuclia/libs/search-widget/src/common/common-style';
    ```

- Implement your components in `src/components/` and use them in your widget

- You can see the result in dev mode in your browser by running:

  ```bash
  npm run dev
  ```

  and go to http://localhost:5173/custom-widget to debug and tune your changes.

- When you are done, build the widget with:

  ```bash
  npx vite build -c=custom.vite.config.mjs
  ```

  This will create a `dist/my-widget` folder containing the compiled widget.

You can now use your widget in any web page as follow:

```html
<script src="./dist/my-widget/widget.umd.cjs"></script>
<nuclia-search-bar
  knowledgebox="YOUR-KB-ID"
  zone="YOUR-ZONE"
  features="answers,permalink"
  placeholder="Enter your question or search terms"
></nuclia-search-bar>
<nuclia-search-results> </nuclia-search-results>
```
