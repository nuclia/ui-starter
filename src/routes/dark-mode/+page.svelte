<script lang="ts">
  import { browser } from '$app/environment';
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';
  import { onDestroy, onMount } from 'svelte';

  let searchBar: NucliaSearchBar | undefined = $state();
  let knowledgeBoxId = '16375869-1037-460d-8648-b3ee9c9206c0';

  onMount(() => {
    if (browser) {
      document.body.classList.add('dark');
    }
  });

  onDestroy(() => {
    if (browser) {
      document.body.classList.remove('dark');
    }
  });
</script>

<header class="page-header">
  <div class="main-description">
    <h2>Dark mode</h2>
    <p>
      Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets using
      dark mode option.
    </p>
    <p>
      You can ask questions like "<strong
        class="example-query"
        onclick={() => searchBar?.search('Will France be in recession in 2023?')}
        >Will France be in recession in 2023?</strong
      >" or "<strong
        class="example-query"
        onclick={() => searchBar?.search('Gold price evolution in 2023')}
        >Gold price evolution in 2023</strong
      >"
    </p>
  </div>
  <NucliaSearchBar
    bind:this={searchBar}
    knowledgebox={knowledgeBoxId}
    lang="en"
    placeholder="Ask your question here"
    features="suggestions,permalink,answers,filter"
    mode="dark"
  />
</header>

<NucliaSearchResults mode="dark" />

<style>
  @import '../common.css';
</style>
