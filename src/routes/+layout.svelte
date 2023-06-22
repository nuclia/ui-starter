<script>
  import {page} from '$app/stores';
</script>

<nav class:dark={$page.url.pathname === '/dark-theme'}>
  <a href="/" class:active={$page.url.pathname === '/'}>Main widgets</a>
  <a href="/api-results" class:active={$page.url.pathname === '/api-results'}>Search API results</a>
  <a href="/dark-theme" class:active={$page.url.pathname === '/dark-theme'}>Dark theme</a>
</nav>

<main>
  <slot></slot>
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
      background: var(--dark-background-lighter);

      a {
        background: var(--dark-background-lighter);
        color: var(--dark-background-color-lighter);

        &.active {
          background: var(--dark-background);
          color: var(--dark-background-color);
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

  :global(.dark) {
    background: var(--dark-background);
    color: #f7f7f8;
  }

  :global(body) {
    margin: 0;
    transition: color 0.16s ease-in-out, background 0.16s ease-in-out;

    --dark-background: #1f2023;
    --dark-background-color: #f7f7f8;
    --dark-background-lighter: #26282e;
    --dark-background-color-lighter: #eeebff;
    --dark-background-modal: #303136;
  }
</style>