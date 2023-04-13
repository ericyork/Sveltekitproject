<script>
  export let data;
  const {catpics} = data;
</script>

<!-- <article>
  {#each catpics as { caption }}
  <figure>
    <img src="https://cataas.com/cat/says/{caption}" alt="">
  </figure>
  {/each}
</article> -->


<style>
  article {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
  }
</style>