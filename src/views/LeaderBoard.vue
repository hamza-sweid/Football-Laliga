<template>
  <div>
    <bread-crumb></bread-crumb>
    <!-- <nav class="navbar navbar-expand-lg px-3 leaderboard">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <leader-board-buttons></leader-board-buttons>
        </ul>
      </div>
    </nav> -->

    <div class="px-1 px-md-3 leaders">
      <div class="my-4">
        <leader-board-image></leader-board-image>
        <leader-board-header></leader-board-header>

        <ul class="list-group list-group-flush">
          <leader-board-player
            v-for="scorer in event.scorers"
            :key="scorer.player_name"
            :scorer="scorer"
          ></leader-board-player>
        </ul>
        <BaseLoader />
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";

import BreadCrumb from "@/components/BreadCrumb.vue";
import LeaderBoardImage from "@/components/leaderboard-components/LeaderBoardImage.vue";
import LeaderBoardHeader from "@/components/leaderboard-components/LeaderBoardHeader.vue";
import LeaderBoardPlayer from "@/components/leaderboard-components/LeaderBoardPlayer.vue";
// import LeaderBoardButtons from "@/components/LeaderBoardButtons.vue";

function getPageEvents(routeTo, next) {
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
  components: {
    BreadCrumb,
    LeaderBoardImage,
    LeaderBoardHeader,
    LeaderBoardPlayer
    // LeaderBoardButtons
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
/* .navbar {
  display: flex;
  justify-content: center;
} */
/* .leaderboard {
  background-color: #92daec;
  padding: 20px 0;
} */

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
.row span {
  height: 55px;
  line-height: 50px;
  font-weight: 400;
  font-size: 0.85em;
  letter-spacing: 2px;
}
.col-lg-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.list-group li {
  height: 50px;
}
</style>
