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
      background: var(--hover-background-color);

      a {
        background: var(--hover-background-color);
        color: var(--hover-link-color);

        &.active {
          background: var(--main-background-color);
          color: var(--main-text-color);
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
    background: var(--main-background-color);
    color: var(--main-text-color);
  }

  :global(body) {
    margin: 0;
    transition: color 0.16s ease-in-out, background 0.16s ease-in-out;

    --main-background-color: #1f2023;     // hsl(225,6,13)
    --hover-background-color: #2b2d30;    // hsl(216,5,18)
    --modal-background-color: #303136;    // hsl(230,6,20)
    --dropdown-background-color: #26282B; // hsl(216,6,16)
    --selected-text-color: #000;
    --selected-background-color: #fff;

    --main-text-color: #f7f7f8;
    --main-border-color: var(--color-neutral-light);
    --hover-link-color: #eeebff;
  }
</style>