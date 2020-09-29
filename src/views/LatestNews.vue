<template>
  <div>
    <bread-crumb></bread-crumb>
    <div class="news">
      <div class="row p-2">
        <latest-news-item
          v-for="item in event.news"
          :key="item.id"
          :item="item"
        ></latest-news-item>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";

import BreadCrumb from "@/components/BreadCrumb.vue";
import LatestNewsItem from "@/components/LatestNewsItem.vue";

function getPageEvents(routeTo, next) {
  store
    .dispatch("event/getNews")

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
    LatestNewsItem,
    BreadCrumb
  },
  computed: {
    ...mapState(["event"])
  },
  beforeRouteEnter(routeTo, from, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  }
};
</script>

<style scoped>
.news {
  margin-bottom: 50px;
}
.news h2 {
  margin-bottom: 20px;
}
</style>
