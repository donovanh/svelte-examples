<script context="module">
  // This is only run once every time component mounted
  // "preload" is a special function that blocks rendering
  // on server side to allow data fetching
  export function preload(page) {
    // Using async / await here and running fetch
    // will let fetched data render serverside
    console.log("Preloading", { page });
    return { message: "This page was preloaded!" };
  }
</script>

<script>
  export let message;
</script>

<svelte:head>
  <title>Example 8</title>
</svelte:head>

<!-- View source to see this has server rendered -->

<h2>{message}</h2>
