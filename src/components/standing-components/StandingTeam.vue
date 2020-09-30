<template>
  <div class="row standing-team">
    <span
      class="col-2 text-center num-color"
      :class="isEven ? 'even' : 'odd'"
      >{{ data.squad_position }}</span
    ><span class="col-3 text-center" :class="isEven ? 'even' : 'odd'"
      ><img class="club-img d-none d-md-inline" :src="getImgUrl()" />{{
        data.squad_name
      }}</span
    ><span
      class="col-2 text-center num-color"
      :class="isEven ? 'even' : 'odd'"
      >{{ data.squad_points }}</span
    ><span
      class="col-2 text-center num-color"
      :class="isEven ? 'even' : 'odd'"
      >{{ data.squad_played }}</span
    ><span class="col-1 num-color" :class="isEven ? 'even' : 'odd'">{{
      data.squad_winned
    }}</span
    ><span class="col-1 num-color" :class="isEven ? 'even' : 'odd'">{{
      data.squad_tie
    }}</span
    ><span class="col-1 num-color" :class="isEven ? 'even' : 'odd'">{{
      data.squad_loosed
    }}</span>
  </div>
</template>

<script>
export default {
  name: "StandingTeam",
  props: ["data"],
  data() {
    return {
      isEven: this.data.squad_position % 2 == 0
    };
  },
  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/" + this.data.squad_name + ".png");
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .standing-team {
    font-size: 0.8em;
  }
}
.row span {
  height: 60px;
  line-height: 60px;
  letter-spacing: 1px;
}

.even {
  background-color: #25282a;
}

.odd {
  background-color: #254150;
}

.standing-team > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.club-img {
  width: 14%;
}
</style>
