<script lang="ts">
  import { NucliaGlobalSearch } from '@nuclia/ui';

  let searchBar: NucliaGlobalSearch;
  let knowledgeBoxId = '0e8d7a91-4fb1-4fec-b7a9-e6cfed451aa1';
</script>

<header>
  <div class="main-description">
    <h2>Global search widget</h2>
    <p>Click on search button to start searching</p>
    <button data-nuclia="global-search-button">Open search</button>
  </div>
  <NucliaGlobalSearch
      bind:this={searchBar}
      knowledgebox={knowledgeBoxId}
      lang="en"
      placeholder="Ask your question here"
      features="suggestions,answers,hideSources,hideThumbnails" />
</header>


<style lang="scss">
  @import "common";
</style>