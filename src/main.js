import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./App.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "name",
    path: "/",
    component: App
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");