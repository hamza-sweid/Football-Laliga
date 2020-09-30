<template>
  <div>
    <latest-news-item></latest-news-item>
    <standing></standing>
    <latest-videos></latest-videos>
    <leader-board></leader-board>
  </div>
</template>

<script>
import latestNewsItem from "@/components/LatestNewsItem";
import Standing from "@/views/Standing";
import LatestVideos from "@/views/LatestVideos";
import LeaderBoard from "@/views/LeaderBoard";

export default {
  components: {
    latestNewsItem,
    Standing,
    LatestVideos,
    LeaderBoard
  }
};
</script>

<style lang="scss" scoped></style>
