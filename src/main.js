import { createApp } from "vue";
import App from "./App.vue";
import VBaobab from "./components/index";

const app = createApp(App);

app.use(VBaobab);

console.log('app', app)
app.mount("#app");
