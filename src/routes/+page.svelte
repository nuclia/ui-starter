<script lang="ts">
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';

  let searchBar: NucliaSearchBar;
  let knowledgeBoxId = '16375869-1037-460d-8648-b3ee9c9206c0';
</script>

<header>
  <div class="main-description">
    <h2>Main widgets</h2>
    <p>We have indexed the market outlook reports from the biggest financial institutions world-wide.
      <br>You can ask questions like
      "<strong class="example-query" on:click={() => searchBar.search('Will France be in recession in 2023?')}>Will France be in recession in 2023?</strong>"
      or "<strong class="example-query" on:click={() => searchBar.search('Gold price evolution in 2023')}>Gold price evolution in 2023</strong>"</p>
    <p>Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets</p>
  </div>
  <NucliaSearchBar
      bind:this={searchBar}
      knowledgebox={knowledgeBoxId}
      lang="en"
      placeholder="Ask your question here"
      features="suggestions,permalink,answers,relations,filter" />
</header>

<NucliaSearchResults />


<style lang="scss">
  @import "common";
</style>