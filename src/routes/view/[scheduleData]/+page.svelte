<script>
  import lz from "lz-string";

  export let data;
  
  let schedule = JSON.parse(lz.decompressFromEncodedURIComponent(data.scheduleData));
</script>

<p>Here's your data!</p>

{#each schedule as shift}
  <p>{shift.name}</p>
{/each}
