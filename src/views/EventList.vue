<template>
  <div>
    <h1 class="mt-3 px-2 hover">Serie A Standing</h1>
    <div class="mx-sm-0  standing"></div>
    <div class="row ">
      <span class="col-2 even">POSITON</span><span class="col-3 even">TEAM</span
      ><span class="col-1 even">PTS</span><span class="col-1 even">PLD</span
      ><span class="col-1 even">W</span><span class="col-1 even">D</span
      ><span class="col-1 even">L</span><span class="col-1 even">GF</span
      ><span class="col-1 even">GA</span>
    </div>
    <EventListTeams
      v-for="data in event.datas"
      :key="data.squad_name"
      :data="data"
    />
  </div>
</template>

<script>
import EventListTeams from "@/components/EventListTeams.vue";
import { mapState } from "vuex";
import store from "@/store/index";

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
    EventListTeams
  },
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
    ...mapState(["event", "user"])
  }
};
</script>

<style scoope>
h1 {
  background-color: #92daec;
  line-height: 40px;
  padding: 10px 0;
}
.row span {
  height: 55px;
  line-height: 50px;
  font-weight: 400;
  font-size: 0.85em;
  letter-spacing: 2px;
}
.even {
  background-color: #25282a;
  color: white;
}

.odd {
  background-color: #254150;
  color: white;
}
</style>
