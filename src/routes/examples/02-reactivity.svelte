<script>
  import Hello from "../../components/Hello.svelte";

  const things = ["world", "lamp", "neighbour", "magazine"];

  let thing = things[0];
  let index = 0;

  setInterval(() => {
    thing = things[index];
    if (index < things.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }, 1000);

  let nonReactivetThing = thing;

  $: reactiveThing = thing;
</script>

<style>
  h2 {
    color: red;
  }
</style>

<svelte:head>
  <title>Hello {`{name}`}</title>
</svelte:head>

<h2>Reactive variable:</h2>

<Hello name={thing} />

<h2>Assigned variable:</h2>

<Hello name={nonReactivetThing} />

<h2>Reactive $: variable:</h2>

<Hello name={reactiveThing} />
