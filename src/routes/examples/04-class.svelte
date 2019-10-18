<script>
  let isValid = false;

  let value;

  $: isValid = value;
</script>

<style>
  input {
    font-size: 24px;
    border: 2px solid green;
    margin: 1rem 0;
  }

  .invalid {
    border-color: red;
  }

  /* Note: this is not used - neat */
  .unusedClass {
    display: flex;
  }
</style>

<svelte:head>
  <title>Example 4</title>
</svelte:head>

<input class:invalid={!isValid} bind:value />
