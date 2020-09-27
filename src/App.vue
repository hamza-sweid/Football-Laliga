<template>
  <div id="app">
    <clubs-header class="clubs-header" />
    <nav-bar />
    <!-- <nav-bar1 /> -->
    <notification-container class="noti" />
    <router-view
      :key="$route.fullPath"
    /><!-- Tell the router to reload component when the full URL changes, including the query parameters -->
    <Footer />
  </div>
</template>

<script>
import ClubsHeader from "@/components/header/ClubsHeader.vue";
import NavBar from "@/components/navbar/NavBar.vue";
// import NavBar1 from "@/components/NavBar1.vue";
import notificationContainer from "@/components/notificationContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    ClubsHeader,
    NavBar,
    // NavBar1,
    notificationContainer,
    Footer
  }
};
</script>

<style>
@media (max-width: 900px) {
  .clubs-header {
    display: none !important;
  }
}
</style>
