<script>
  import { page } from '$app/stores';
</script>

<nav
  class:custom={$page.url.pathname === '/custom-theme'}
  class:dark={$page.url.pathname === '/dark-mode'}
>
  <a href="/" class:active={$page.url.pathname === '/'}>Main widgets</a>
  <a href="/api-results" class:active={$page.url.pathname === '/api-results'}>Search API results</a>
  <a href="/dark-mode" class:active={$page.url.pathname === '/dark-mode'}>Dark mode</a>
  <a href="/custom-theme" class:active={$page.url.pathname === '/custom-theme'}>Custom theme</a>
  <a href="/breadcrumbs" class:active={$page.url.pathname === '/breadcrumbs'}>Breadcrumbs</a>
  <a href="/custom-widget" class:active={$page.url.pathname === '/custom-widget'}>Custom widget</a>
</nav>

<main>
  <slot />
</main>

<style lang="scss">
  main,
  nav {
    font-family: sans-serif;
  }

  main {
    max-width: 100%;
    margin: 0 auto;
    padding: 1em;
  }

  nav {
    background: #eeebff;
    display: flex;
    transition: background 0.16s ease-in-out;

    a {
      transition: color 0.16s ease-in-out, background 0.16s ease-in-out;
      padding: 1rem;
      text-decoration: none;
    }

    &.dark {
      background: var(--local-dark-hover);

      a {
        background: var(--local-dark-hover);
        color: var(--local-dark-hover-link);

        &.active {
          background: var(--local-dark-main-background);
          color: var(--local-dark-main-text);
        }
      }
    }

    &:not(.dark) {
      a {
        background: #eeebff;
        color: #2600ff;

        &:hover {
          color: #1f00cc;
        }

        &:active {
          color: #12007a;
        }

        &.active {
          background: #fff;
          color: #000;
        }
      }
    }
  }

  :global(.custom) {
    color: var(--local-main-blue);
  }

  :global(.dark) {
    background: var(--local-dark-main-background);
    color: var(--local-dark-main-text);
  }

  :global(body) {
    margin: 0;
    transition: color 0.16s ease-in-out, background 0.16s ease-in-out;

    --local-main-blue: #1f00cc;

    --local-dark-main-text: #f7f7f8;
    --local-dark-main-background: #1f2023;
    --local-dark-hover-link: #eeebff;
    --local-dark-hover: #2b2d30;
  }
</style>
