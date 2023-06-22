<script lang="ts">
  import {
    activatePermalinks,
    initNuclia,
    initViewer,
    NucliaSearchResults,
    resetNuclia,
    searchQuery,
    searchResults,
    searchState,
    setLang,
    unsubscribeAllEffects,
  } from '@nuclia/ui';
  import { ResourceProperties, Search } from '@nuclia/core';
  import { onDestroy, onMount } from 'svelte';

  const query = 'How the market will look like in 2023?';

  onMount(() => {
    // Setup Nuclia to use your KB and zone
    const nuclia = initNuclia({
      backend: 'https://nuclia.cloud/api',
      zone: 'europe-1',
      knowledgeBox: '16375869-1037-460d-8648-b3ee9c9206c0',
    }, 'PUBLISHED', {
      highlight: true,
      features: {
        permalink: true,
      },
    });

    // Initialize the different effects we need to set up the features we need
    initViewer();
    activatePermalinks();

    // Set lang so translations works
    setLang(window.navigator.language.split('-')[0] || 'en');

    // Find results for the query
    // Features option defines the type of search we want to run, here we want fuzzy search and semantic results.
    // See https://docs.stashify.cloud/docs/query/#features for details.
    const features = [Search.Features.PARAGRAPH, Search.Features.VECTOR];
    // In search options, we need to define which properties of the resources are returned.
    // NucliaSearchResults requires the following to display the results properly:
    const options = {show: [ResourceProperties.BASIC, ResourceProperties.VALUES, ResourceProperties.ORIGIN]};
    nuclia.knowledgeBox.find(query, features, options).subscribe(results => {
      if (results.type === 'findResults') {
        // Update the store with the results:
        // the query is required otherwise NucliaSearchResults doesn't display any results
        searchQuery.set(query);
        searchResults.set({results: results as Search.FindResults, append: false});
      }
    });
  });

  onDestroy(() => {
    // Reset Nuclia and the state to start from scratch when navigating between pages
    resetNuclia();
    searchState.reset();
    unsubscribeAllEffects();
  });
</script>

<header>
  <div class="main-description">
    <h2>Search API results</h2>
    <p>
      On this example, we load some search results directly from the API (ie. without using Nuclia
      <code>SearchBar</code> widget).
      <br>Then we display them in <code>NucliaSearchResults</code> widget.
    </p>
    <p><strong>{query}</strong></p>

  </div>

</header>

<NucliaSearchResults/>


<style lang="scss">
  @import "../common";
</style>