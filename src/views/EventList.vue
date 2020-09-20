<template>
  <div>
    <h1>Serie A Standing</h1>
    <event-card
      v-for="data in event.datas"
      :key="data.squad_name"
      :data="data"
    />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import store from "@/store/index";
// import NProgress from "nprogress";
// import axios from "axios";

function getPageEvents(routeTo, next) {
  store
    .dispatch("event/getData")

    .then(() => {
      next(); // continue on to create and render our component
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        next({ name: "404", params: { resource: "event" } });
      } else {
        next({ name: "network-issue" });
      }
    }); //this param when entering any 'not exist event'
}

export default {
  props: {
    // league: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, from, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    ...mapState(["event", "user"])
  }
};
</script>
