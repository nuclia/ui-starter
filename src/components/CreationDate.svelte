<script lang="ts">
  export let date = '';
  let displayDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

<div>
  <small>Created on {displayDate}</small>
</div>
