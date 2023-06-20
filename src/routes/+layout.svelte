<script>
  import {page} from '$app/stores';
</script>

<nav>
  <a href="/" class:active={$page.url.pathname === '/'}>Main widgets</a>
  <a href="/api-results" class:active={$page.url.pathname === '/api-results'}>Search API results</a>
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
      background: #eeebff;
      color: #2600ff;
      transition: color 0.16s ease-in-out, background 0.16s ease-in-out;
      padding: 1rem;
      text-decoration: none;

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
</style>