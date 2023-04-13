<script>
  import { add_attribute } from 'svelte/internal';

  export let data;
  const {catResp} = data;
  console.log(catResp);
</script>

<article>
  <h2>Here you go!</h2>
  <a href="/catfacts">Refresh</a>
  <img src="https://cataas.com/{catResp.url}" alt="">
  <p>File type: {catResp.mimetype}</p>

</article>


<style>
  article {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 50%;
    height: auto;
  }
</style>