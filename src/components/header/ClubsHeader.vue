<template>
  <div class="navbar-clubs">
    <span>Web Clubs<i class="fa fa-external-link text-muted mx-2"></i></span>
    <div class="web-clubs">
      <ClubsHeaderItem
        v-for="team in event.datas"
        :key="team.squad_name"
        :team="team"
        class="clubs"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import ClubsHeaderItem from "@/components/header/ClubsHeaderItem";
import { mapState } from "vuex";

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
  components: { ClubsHeaderItem },
  data() {
    return {};
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
.navbar-clubs {
  display: flex;
}
.web-clubs {
  display: flex;
}
.navbar-clubs span {
  margin: 14px 3px 7px;
  font-size: 13px;
}
</style>
