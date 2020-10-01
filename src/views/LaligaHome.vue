<template>
  <div>
    <!-- news -->
    <base-text-header>Latest Laliga News</base-text-header>
    <div class="row p-2">
      <latest-news-item
        v-for="item in pickTopNews"
        :key="item.id"
        :item="item"
      ></latest-news-item>
    </div>
    <router-link to="/news">
      <base-see-more1>See More News</base-see-more1>
    </router-link>

    <!-- standing -->
    <base-text-header>Laliga Standing</base-text-header>
    <standing-header></standing-header>
    <standing-team
      v-for="data in pickTopStanding"
      :key="data.squad_name"
      :data="data"
    ></standing-team>
    <router-link to="/standing">
      <base-see-more2>See Complete Standing</base-see-more2>
    </router-link>

    <!-- videos -->
    <base-text-header>Latest Laliga Videos</base-text-header>
    <div class="row p-3 m-0">
      <latest-videos-item
        v-for="video in pickTopVideos"
        :key="video.title"
        :video="video"
      ></latest-videos-item>
    </div>
    <router-link to="/videos">
      <base-see-more1>See More Videos</base-see-more1>
    </router-link>

    <!-- leaderboard -->
    <base-text-header>Laliga Leaderboard</base-text-header>
    <div class="px-1 px-md-3 leaders">
      <div class="my-4">
        <leader-board-header></leader-board-header>
        <leader-board-player
          v-for="scorer in pockTopLeader"
          :key="scorer.player_name"
          :scorer="scorer"
        ></leader-board-player>
      </div>
    </div>
    <router-link to="/leaderboard">
      <base-see-more2>All Laliga In Goals</base-see-more2>
    </router-link>
  </div>
</template>

<script>
import store from "@/store/index";

import BaseTextHeader from "@/components/BaseTextHeader.vue";
import BaseSeeMore1 from "@/components/buttons/BaseSeeMore1.vue";
import BaseSeeMore2 from "@/components/buttons/BaseSeeMore2.vue";
import LatestNewsItem from "@/components/LatestNewsItem.vue";
import StandingHeader from "@/components/standing-components/StandingHeader.vue";
import StandingTeam from "@/components/standing-components/StandingTeam.vue";
import LatestVideosItem from "@/components/LatestVideosItem.vue";
import LeaderBoardHeader from "@/components/leaderboard-components/LeaderBoardHeader.vue";
import LeaderBoardPlayer from "@/components/leaderboard-components/LeaderBoardPlayer.vue";

import { mapState } from "vuex";

function getPageEvents(routeTo, next) {
  store.dispatch("event/getNews");
  store.dispatch("event/getStanding");
  store.dispatch("event/getVideos");
  store
    .dispatch("event/getScorers")
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
  name: "LaligaHome",

  components: {
    BaseTextHeader,
    BaseSeeMore1,
    BaseSeeMore2,
    LatestNewsItem,
    StandingHeader,
    StandingTeam,
    LatestVideosItem,
    LeaderBoardHeader,
    LeaderBoardPlayer
  },

  beforeRouteEnter(routeTo, from, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },

  computed: {
    ...mapState(["event"]),
    pickTopNews() {
      return this.event.news.slice(0, 3);
    },
    pickTopStanding() {
      return this.event.standing.slice(0, 5);
    },
    pickTopVideos() {
      return this.event.videos.slice(0, 3);
    },
    pockTopLeader() {
      return this.event.scorers.slice(0, 5);
    }
  }
};
</script>

<style scoped>
.leaders {
  background-color: #254150;
  border: 50px solid #10202a;
  letter-spacing: 1px;
}
@media (max-width: 768px) {
  .leaders {
    border: 10px solid #10202a;
  }
}
</style>
