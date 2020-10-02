<template>
  <div class="item col-sm-6 col-md-6 col-lg-4 my-4 px-4">
    <p
      class="card-header text-white text-center"
      :style="{ backgroundColor: itemHeader[pickColor] }"
    >
      <b>LaLiga Santander</b>
    </p>
    <div class="news-img-container">
      <img class="news-img" :src="getImgUrl()" alt="" />
    </div>
    <div class="card-body">
      <p class=" text-muted bg-white">{{ item.date }}</p>
      <h5 class="Card title my-3">
        {{ item.heade }}
      </h5>
      <p>
        {{ item.desc }}
      </p>
    </div>
    <div class="card-footer bg-white border-0">
      <a href="#"><i class="fa fa-share-alt-square text-info fa-2x"></i></a>
    </div>
    <img
      class="under-item"
      src="../assets/images/laliga/under-item.png"
      style="width: 100%"
    />
  </div>
</template>

<script>
export default {
  name: "LatesNewsItem",
  props: ["item"],
  data() {
    return {
      itemHeader: ["#FE2834", "#a23052", "#153680", "#022f3e"]
    };
  },
  methods: {
    getImgUrl() {
      return require("@/assets/images/laliga/news/" + this.item.img);
    }
  },
  computed: {
    pickColor() {
      return Math.floor(Math.random() * this.itemHeader.length);
    }
  }
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
.news-img-container {
  overflow: hidden;
}
.news-img {
  transition: 0.3s ease-in-out;
}
.item:hover .news-img {
  opacity: 0.8;
  transform: scale(1.12);
}
.under-item {
  visibility: hidden;
}
.card-header {
  padding: 0.6em;
  line-height: 1.5em;
}
img {
  width: 100%;
}
p {
  font-size: 0.8em;
}
.item:hover .under-item {
  visibility: visible;
}
i:hover {
  transform: scale(1.2);
  transition: 0.3s ease-in-out;
}
</style>
