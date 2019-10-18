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
  removeItem: i =>
    store.update(items => {
      items.splice(i, 1);
      return items;
    })
};

export default customStore;
