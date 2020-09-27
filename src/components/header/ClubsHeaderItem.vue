<template>
  <div>
    <a :href="getUrl()" target="_blank"
      ><img :src="getImgUrl()" alt="" class="club"
    /></a>
  </div>
</template>

<script>
export default {
  name: "ClubsHeaderItem",

  props: ["team"],

  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/" + this.team.squad_name + ".png");
    },
    getUrl() {
      return `https://www.${this.team.squad_name}.com`.replace(" ", "");
    }
  }
};
</script>

<style scoped>
a:hover .club {
  box-shadow: 0px 3px 0px 0px #7ebece;
  transition: 0.2s ease-in-out;
  filter: brightness(110%);
}
.club {
  /* width: 25px;
  height: 25px; */
  width: 55%;
  height: 45%;
  margin: 10px 15px;
}
@media (max-width: 1220px) {
  .club {
    margin: 10px 10px;
  }
}
</style>
