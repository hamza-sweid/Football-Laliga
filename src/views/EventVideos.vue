<template>
  <div>
    <h2 class="text-center my-4">
      <b class="border-bottom border-danger p-1">LATEST VIDEOS</b>
    </h2>
    <div class="row p-2 m-0 videos"></div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
// import EventLeadersPlayers from "@/components/EventLeadersPlayers.vue";

function getPageEvents(routeTo, next) {
  store
    .dispatch("event/getVideos")

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
  components: {
    // EventLeadersPlayers
  },

  beforeRouteEnter(routeTo, from, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    ...mapState(["event"])
  }
};
</script>

<style scoped>
p {
  font-size: 0.8em;
}
</style>
