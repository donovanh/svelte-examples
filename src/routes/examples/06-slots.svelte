<script>
  import Hello from "../../components/Hello.svelte";
  import Slot from "../../components/Slot.svelte";
</script>

<style>
  /* Notice how this doesn't apply to child elements */
  h2 {
    color: red;
  }
</style>

<svelte:head>
  <title>Example 6</title>
</svelte:head>

<Slot>
  <p slot="slot1">
    <Hello name="Slot 1" />
  </p>
  <p slot="slot2">
    <Hello name="Slot 2" />
  </p>
  <p>Generic content</p>
</Slot>
