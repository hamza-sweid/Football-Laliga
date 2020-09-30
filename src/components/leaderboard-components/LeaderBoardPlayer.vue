<template>
  <div>
    <li class="row leaderboard-player">
      <span class="col-2 num-color" :class="isEven ? 'even' : 'odd'">{{
        scorer.player_position
      }}</span>
      <span class="col-3" :class="isEven ? 'even' : 'odd'">{{
        scorer.player_name
      }}</span>
      <span class="col-3" :class="isEven ? 'even' : 'odd'">
        <img
          class="team-img d-none d-md-inline"
          :class="isEven ? 'even' : 'odd'"
          :src="getImgUrl()"
          alt=""
        />
        {{ scorer.player_squad }}
      </span>
      <span class="col-1 num-color" :class="isEven ? 'even' : 'odd'">{{
        scorer.player_goals
      }}</span>
      <span class="col-1 num-color" :class="isEven ? 'even' : 'odd'">
        {{ scorer.player_penalties }}</span
      >
      <span class="col-2" :class="isEven ? 'even' : 'odd'">{{
        scorer.player_role | cutName
      }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "LeaderBoardPlayer",

  props: ["scorer"],

  data() {
    return {
      isEven: this.scorer.player_position % 2 == 0
      // isLeader: this.scorer.player_position == 1
    };
  },

  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/" +
        this.scorer.player_squad +
        ".png");
    }
  },
  filters: {
    cutName(role) {
      return role.slice(0, 3);
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .leaderboard-player {
    font-size: 0.8em;
  }
}
.leaderboard-player span {
  height: 60px;
  line-height: 60px;
}
.team-img {
  width: 15%;
}

.even {
  background-color: #25282a;
}

.odd {
  background-color: #254150;
}
</style>
