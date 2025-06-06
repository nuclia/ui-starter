<script lang="ts">
  interface Props {
    date?: string;
  }

  let { date = '' }: Props = $props();
  let displayDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

<div>
  <small>Created on {displayDate}</small>
</div>
