<template>
  <div class=" col-sm-6 col-md-6 col-lg-4 pb-5">
    <base-loader v-if="event.isLoading"></base-loader>
    <div v-else>
      <p
        class="card-header text-white text-center"
        :style="{ backgroundColor: itemHeader[pickColor] }"
      >
        <b>LaLiga Santander</b>
      </p>
      <iframe
        :src="getEmbedUrl()"
        frameborder="0"
        style="width:100%;height:450px;position:relative"
      ></iframe>
      <img
        class="under-item"
        src="../assets/images/laliga/under-video-item.png"
        style="width: 100%; height: 35px"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LatestVideosItem",
  props: ["video"],
  data() {
    return {
      itemHeader: ["#FE2834", "#a23052", "#153680", "#022f3e"]
    };
  },
  methods: {
    getImgUrl() {
      return this.video.thumbnail;
    },
    getEmbedUrl() {
      return this.video.embed.slice(137, 181);
    }
  },
  computed: {
    pickColor() {
      return Math.floor(Math.random() * this.itemHeader.length);
    },
    ...mapState(["event"])
  }
};
</script>

<style scoped>
p {
  font-size: 0.8em;
}
#item-v {
  -webkit-transition: 0.6s ease-in-out;
  -moz-transition: 0.6s ease-in-out;
  -ms-transition: 0.6s ease-in-out;
  -o-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  padding: 0 15px;
  color: white;
  font-weight: 450;
}

#item-v:hover {
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
  transform: translateY(-10px);
}

.card-header {
  padding: 0.6em;
  line-height: 1.5em;
}

#item-v .card-body {
  height: 100px;
  color: white;
  background-color: #000;
  font-size: 18px;
}

#item-v img {
  height: 300px;
}

#item-v a:hover {
  text-decoration: none;
}

#item-v .btn {
  background-color: white;
  position: absolute;
  z-index: 0;
  top: calc(18%);
  left: calc(42%);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  cursor: pointer;
}

#item-v .btn:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -ms-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

#item-v .btn:hover .fa-play:before {
  color: blue;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

#item-v .btn i {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  line-height: 50px;
}

.card-footer {
  background-color: #000;
}

i:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -ms-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
._scorebatEmbeddedPlayerW_ {
  height: 450px;
}
.VideoPlayerBlNP:hover:after {
  opacity: 0;
}
</style>
