<script>
  import Hello from "../../components/Hello.svelte";
</script>

<style>
  /* Notice how this doesn't apply to child elements */
  h2 {
    color: red;
  }
</style>

<svelte:head>
  <title>Hello {`{name}`}</title>
</svelte:head>

<h2>I've got to say...</h2>

<Hello />

<Hello name="NearForm!" />
