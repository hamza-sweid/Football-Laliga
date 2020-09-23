<template>
  <div>
    <li class="even row" :class="{ leader: isLeader }">
      <span class="col-1 num-color">{{ scorer.player_position }}</span>
      <span class="col-3">{{ scorer.player_name }}</span>
      <span class="col-3">
        <img class="team" :src="getImgUrl()" alt="" />
        {{ scorer.player_squad }}
      </span>
      <span class="col-1 num-color">{{ scorer.player_goals }}</span>
      <span class="col-2 num-color"> {{ scorer.player_penalties }}</span>
      <span class="col-2">{{ scorer.player_role }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "EventLeadersPlayers",

  props: ["scorer"],

  data() {
    return {
      isEven: this.scorer.player_position % 2 == 0,
      isLeader: this.scorer.player_position == 1
    };
  },

  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/" +
        this.scorer.player_squad +
        ".png");
    }
  }
};
</script>

<style scoped>
.team {
  width: 15%;
}
.leader {
  font-size: 1em !important;
}
.leader span {
  font-size: 1em;
}
.even {
  background-color: #25282a;
}

.odd {
  background-color: #254150;
}
</style>
