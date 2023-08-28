<script lang="ts">
  import {
    getResultUniqueKey,
    hasMore,
    InfiniteScroll,
    loadFonts,
    loadMore,
    loadSvgSprite,
    NucliaSearchBar,
    pendingResults,
    resultList,
    ResultRow,
    searchShow,
    showResults,
    Viewer,
  } from '@nuclia/ui';
  import {onMount} from 'svelte';
  import globalCss from '../../../libs/nuclia/libs/search-widget/src/common/_global.scss?inline';
  import {ResourceProperties} from '@nuclia/core';
  import Breadcrumbs from './Breadcrumbs.svelte';

  let searchBar: NucliaSearchBar;
  let knowledgeBoxId = '7ab55646-1e08-42eb-b4c5-6142fe78f84c';

  let svgSprite: string;

  onMount(() => {
    searchShow.set([ResourceProperties.BASIC, ResourceProperties.VALUES, ResourceProperties.ORIGIN, ResourceProperties.EXTRA])
    if (pendingResults.getValue() || resultList.getValue().length > 0) {
      showResults.set(true);
    }
    loadFonts();
    loadSvgSprite().subscribe((sprite) => (svgSprite = sprite));
  });

  const onLoadMore = () => loadMore.set();

</script>

<header>
  <div class="main-description">
    <h2>Customized results</h2>
    <p>We have indexed Nuclia’s documentation support pages.
      <br>You can ask questions like
      "<strong class="example-query" on:click={() => searchBar.search('What can I do with Nuclia?')}>What can I do with Nuclia?</strong>"
      or "<strong class="example-query" on:click={() => searchBar.search('How does Nuclia deal with privacy?')}>How does Nuclia deal with privacy?</strong>"</p>
    <p>Below is the default Nuclia <code>SearchBar</code>. The search results are mostly built using Nuclia’s UI components, customized with a breadcrumb.</p>
  </div>
  <NucliaSearchBar
      bind:this={searchBar}
      knowledgebox={knowledgeBoxId}
      lang="en"
      placeholder="Ask your question here"
      features="suggestions,permalink" />
</header>

<svelte:element this="style">{@html globalCss}</svelte:element>

<div class="nuclia-widget sw-video-results">
  <div class="results-container">
    <div class="results">
      <div class="search-results">
        {#each $resultList as result, i (getResultUniqueKey(result))}
          <div class="result-and-breadcrumb">
            <Breadcrumbs breadcrumbs={result.extra.metadata.breadcrumbs}></Breadcrumbs>
            <ResultRow {result} />
          </div>
        {/each}
        {#if $hasMore}
          <InfiniteScroll
              hasMore={$hasMore}
              on:loadMore={onLoadMore} />
        {/if}
      </div>
    </div>
  </div>

  <Viewer />

  <div
      id="nuclia-glyphs-sprite"
      hidden>
    {@html svgSprite}
  </div>
</div>

<style lang="scss">
  @import "../common";
  @import "libs/nuclia/libs/search-widget/src/widgets/search-widget/SearchResults";

  .result-and-breadcrumb {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>