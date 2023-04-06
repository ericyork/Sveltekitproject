/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://cataas.com/cat/says/${params.id}`);
    const item = await res.json();
   
    return { item };
  }