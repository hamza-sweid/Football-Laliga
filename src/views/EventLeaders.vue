<template>
  <div>
    <nav class="navbar navbar-expand-lg px-3 mx-3 leaderboard">
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
          <li class="nav-item active">
            Scorers
          </li>
        </ul>
      </div>
    </nav>

    <div class="mx-3 px-3 leaders">
      <div class="my-4 col-lg-12">
        <div class="card-title m-0">
          <img
            src="../assets/images/laliga/messi.jpeg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="row ">
          <span class="col-1 even">Position</span
          ><span class="col-3 even">Name</span
          ><span class="col-3 even">Team</span
          ><span class="col-1 even">Goals</span
          ><span class="col-2 even">Penalties</span
          ><span class="col-2 even">Role</span>
        </div>
        <ul class="list-group list-group-flush">
          <Event-leaders-players
            v-for="scorer in event.scorers"
            :key="scorer.player_name"
            :scorer="scorer"
          />
        </ul>
        <!-- <img
        class="under-item"
        src="under-item.png"
        style="width: 100%; height: 25px"
      /> -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
import EventLeadersPlayers from "@/components/EventLeadersPlayers.vue";

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
    EventLeadersPlayers
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
.navbar {
  display: flex;
  justify-content: center;
}
.leaderboard {
  background-color: #92daec;
  padding: 20px 0;
}
.nav-item {
  flex: 1 1 0%;
  text-align: center;
  padding: 10px 35px;
  background-color: #000000;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
}
.leaders {
  background-color: #254150;
  border: 50px solid #10202a;
  letter-spacing: 1px;
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

.card-title {
  height: 400px;
  background-color: #10202a;
  position: relative;
  color: white;
  padding: 10px;
  display: flex;
}

.card-title img {
  height: 300px;
  width: 300px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  display: flex;
  margin: auto;
  border: 7px solid #fff;
}

.list-group li {
  height: 50px;
}

.ul li:nth-of-type(1) span:nth-of-type(2) {
  font-size: 1.5em;
}
</style>
