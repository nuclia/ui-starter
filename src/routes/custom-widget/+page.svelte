<script lang="ts">
  import CustomSearchBar from '../../widgets/my-widget/SearchBar.svelte';
  import CustomSearchResults from '../../widgets/my-widget/SearchResults.svelte';
</script>

<h1>Custom widget in dev mode</h1>
<CustomSearchBar
  knowledgebox="0a461f58-6ee4-4845-8942-1404c0e6f108"
  zone="europe-1"
  features="permalink"
  placeholder="Enter your question or search terms"
/>
<CustomSearchResults />
