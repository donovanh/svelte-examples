<script>
  import Hello from "../../components/Hello.svelte";

  let input;

  let radioInput;

  $: console.log({ radioInput });

  let checkInput = [];

  $: console.log({ checkInput });

  let selectInput;

  $: console.log({ selectInput });

  let textAreaInput = {};

  let size;

  function checkSize() {
    size = textAreaInput.clientHeight;
  }
</script>

<style>
  input {
    font-size: 24px;
    border: 2px solid purple;
    margin: 1rem 0;
  }
</style>

<svelte:head>
  <title>Hello {`{name}`}</title>
</svelte:head>

<input bind:value={input} />

<Hello name={input} />

<h2>Ooh radios</h2>

<input type="radio" bind:group={radioInput} value="1" />
<input type="radio" bind:group={radioInput} value="2" />
<input type="radio" bind:group={radioInput} value="3" />

<p>
  <code>{JSON.stringify(radioInput) || ''}</code>
</p>

<h2>Check it</h2>

<input type="checkbox" bind:group={checkInput} value="1" />
<input type="checkbox" bind:group={checkInput} value="2" />
<input type="checkbox" bind:group={checkInput} value="3" />

<p>
  <code>{JSON.stringify(checkInput) || ''}</code>
</p>

<h2>Select</h2>

<select bind:value={selectInput}>
  <option>Rice</option>
  <option>Beans</option>
  <option>Cheese</option>
  <option>Guac (extra)</option>
</select>

<p>
  <code>{JSON.stringify(selectInput) || ''}</code>
</p>

<h2>Custom binding</h2>

<textarea bind:this={textAreaInput} on:blur={checkSize}>Input test</textarea>

<p>
  <code>{size || 'blur to see size'}</code>
</p>
