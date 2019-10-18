<script>
  import Hello from "../../components/Hello.svelte";

  const things = ["world", "lamp", "neighbour", "magazine"];
</script>

<style>
  h2 {
    color: red;
  }
</style>

<svelte:head>
  <title>Hello {`{name}`}</title>
</svelte:head>

<h2>Things:</h2>

<ul>
  {#each things as thing}
    <li>{thing}</li>
  {/each}
</ul>
