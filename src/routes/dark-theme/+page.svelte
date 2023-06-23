<script lang="ts">
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';


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

<header>
  <div class="main-description">
    <h2>Dark theme</h2>
    <p>Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets themed to work on a dark mode page.</p>
    <p>You can ask questions like "Will France be in recession in 2023?" or "Gold price evolution in 2023"</p>
  </div>
  <NucliaSearchBar
      knowledgebox={knowledgeBoxId}
      lang="en"
      placeholder="Ask your question here"
      features="suggestions,permalink,answers,filter" />
</header>

<NucliaSearchResults />


<style lang="scss">
  @import "../common";

  :global(body.dark) {
    --custom-text-color: var(--main-text-color);
    --custom-border-color: #fff;
    --custom-selected-text-color: var(--selected-text-color);
    --custom-selected-background-color: var(--selected-background-color);
    --custom-hover-background-color: var(--hover-background-color);
    --custom-modal-background-color: var(--modal-background-color);
    --custom-container-background-color: var(--main-background-color);
    --custom-dropdown-background-color: var(--dropdown-background-color);
    --custom-thumbnail-background-color: var(--hover-background-color);
  }
</style>