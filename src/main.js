import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
// import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
// import "@/assets/css/main.css";
import "nprogress/nprogress.css";
import Vuelidate from "vuelidate";
import dateFilter from "./filters/dateFilter";
import "./assets/css/api-main.css";

import upperFirst from "lodash/upperFirst"; //install lodash
import camelCase from "lodash/camelCase"; //install lodash

Vue.use(Vuelidate);

Vue.filter("dateFilter", dateFilter);

//Make Global Components
const requireComponent = require.context(
  "./components", //which directory
  false,
  /Base[A-Z]\w+\.(vue|js)$/ //files that start & end with
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName); //array contains globally files

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1")) //convert files name to Pascal-case
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
