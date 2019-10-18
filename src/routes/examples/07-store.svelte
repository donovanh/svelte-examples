<script>
  import itemStore from "../../state/items.store.js";

  let value;

  function addItem() {
    itemStore.addItem(value);
  }
</script>

<style>
  input {
    font-size: 24px;
    border: 2px solid purple;
    margin: 1rem 0;
  }

  button {
    font-size: 24px;
    border: 2px solid purple;
  }
</style>

<input type="text" bind:value placeholder="New item" />
<button on:click={addItem}>Add Item</button>

<hr />

<ul>
  {#each $itemStore as item (item)}
    <li>{item}</li>
  {/each}
</ul>
