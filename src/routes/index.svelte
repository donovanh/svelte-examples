<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Svelte/Sapper examples</title>
</svelte:head>

<h1>Svelte / Sapper Examples</h1>

<ul>
  <li>
    <a href="/examples/01-hello-world">1: Hello {`{name}`}</a>
  </li>
  <li>
    <a href="/examples/02-reactivity">2: Reactive variables</a>
  </li>
  <li>
    <a href="/examples/03-bind">3: Binding values</a>
  </li>
  <li>
    <a href="/examples/04-class">4: Class helper</a>
  </li>
  <li>
    <a href="/examples/05-each">5: Each loops</a>
  </li>
  <li>
    <a href="/examples/06-slots">6: Slots</a>
  </li>
  <li>
    <a href="/examples/07-store">7: Store</a>
  </li>
  <li>
    <a href="/examples/08-prefetch" rel="prefetch">8: Prefetch & SSR</a>
  </li>
  <li>
    <a href="/examples/09-transitions">9: Transitions</a>
  </li>
  <li>
    <a href="/examples/10-web-component">10: Web Component</a>
  </li>
</ul>

<h2>Other demos</h2>

<ul>
  <li>
    <a href="/demos/image-loading">Lazy image loading</a>
  </li>
</ul>
