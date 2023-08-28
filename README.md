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
