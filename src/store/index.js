import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user.js"; // This pulls in all the consts in user.js
import * as event from "@/store/modules/event.js"; // This pulls in all the consts in user.js
import * as notification from "@/store/modules/notification.js"; // This pulls in all the consts in user.js

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user, //include this module
    event, //include this module
    notification //include this module
  },
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  }
});
