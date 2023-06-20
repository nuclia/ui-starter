<script lang="ts">
  import { NucliaSearchResults } from '@nuclia/ui';
</script>

<header>
  <div class="main-description">
    <h2>Search API results</h2>
    <p>
      On this example, we loaded some search results directly from the API (ie. without using Nuclia
      <code>SearchBar</code> widget).
      <br>Then we display them in <code>NucliaSearchResults</code> widget.
    </p>

  </div>

</header>

<NucliaSearchResults/>


<style lang="scss">
  @import "../common";
</style>