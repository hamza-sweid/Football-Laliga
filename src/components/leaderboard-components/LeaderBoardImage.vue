<template>
  <div class="card-title m-0">
    <img :src="getImgUrl()" class="card-img-top" alt="leader-player" />
  </div>
</template>

<script>
export default {
  name: "LeaderBoardImage",
  props: ["img"],
  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/" + this.img + ".jpg");
    }
  }
};
</script>

<style scoped>
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
  border-radius: 50%;
  margin: auto;
  border: 7px solid #fff;
}
</style>
