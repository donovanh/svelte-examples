<script>
  import itemStore from "../../state/items.store.js";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { cubicOut } from "svelte/easing";

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

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
  }

  .item {
    align-items: center;
    background: #eee;
    display: flex;
    height: 120px;
    justify-content: center;
    list-style: none;
    margin: 1rem;
    width: 120px;
  }
</style>

<svelte:head>
  <title>Example 9</title>
</svelte:head>

<input type="text" bind:value placeholder="New item" />
<button on:click={addItem}>Add Item</button>

<hr />

<ul class="container">
  {#each $itemStore as item (item)}
    <div animate:flip={{ duration: 500, easing: cubicOut }}>
      <li
        transition:scale
        class="item"
        on:click={() => {
          itemStore.removeItem(item);
        }}>
        {item}
      </li>
    </div>
  {/each}
</ul>
