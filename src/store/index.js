import Vue from "vue";
import Vuex from "vuex";

import * as event from "@/store/modules/event.js"; // This pulls in all the consts in user.js
import * as notification from "@/store/modules/notification.js"; // This pulls in all the consts in user.js

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event, //include this module
    notification //include this module
  }
});
