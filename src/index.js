import App from "./App.svelte";
import styles from "./styles.css"

const app = new App({
  target: document.body,
  props: {
    name: "Svelte",
  },
});

export default app;