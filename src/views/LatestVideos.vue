<template>
  <div class="latest-videos">
    <bread-crumb></bread-crumb>
    <div class="row px-3 py-5 m-0">
      <latest-videos-item
        v-for="video in event.videos"
        :key="video.title"
        :video="video"
      ></latest-videos-item>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
import LatestVideosItem from "@/components/LatestVideosItem.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";

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
    LatestVideosItem,
    BreadCrumb
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
.latest-videos {
  background-color: #10202a;
}
</style>
