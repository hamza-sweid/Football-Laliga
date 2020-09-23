<template>
  <div class="row event-card">
    <span class="col-2" :class="isEven ? 'even' : 'odd'">{{
      data.squad_position
    }}</span
    ><span class="col-3" :class="isEven ? 'even' : 'odd'"
      ><img :src="getImgUrl()" />{{ data.squad_name }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_points
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_played
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_winned
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_tie
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_loosed
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_position
    }}</span
    ><span class="col-1" :class="isEven ? 'even' : 'odd'">{{
      data.squad_position
    }}</span>
  </div>
</template>

<script>
export default {
  name: "EventListTeams",
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
.row span {
  height: 60px;
  line-height: 60px;
  font-weight: 400;
  font-size: 0.85em;
  letter-spacing: 2px;
}

.even {
  background-color: #25282a;
}

.odd {
  background-color: #254150;
}

.event-card {
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

img {
  width: 15%;
}

@media (max-width: 992px) {
  .row span {
    font-weight: 400;
    font-size: 0.7em;
  }
}
</style>
