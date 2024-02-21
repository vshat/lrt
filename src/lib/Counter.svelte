<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={() => (count += 2)}>
  count is {count}
</button>
