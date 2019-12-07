import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

///---------- Style----------->
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/css/style.css";
import "bootstrap";

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
