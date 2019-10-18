import { writable } from "svelte/store";

const store = writable([
  "whiskeys",
  "kittehs",
  "packages",
  "chocolate",
  "justice",
  "wine"
]);

const customStore = {
  subscribe: store.subscribe,
  addItem: item => store.update(items => items.concat(item)),
  removeItem: item => store.update(items => items.filter(i => i !== item))
};

export default customStore;
