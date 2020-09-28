<template>
  <div id="app">
    <div>
      <clubs-header class="clubs-header" />
      <nav-bar />
      <!-- <nav-bar1 /> -->
      <login-user></login-user>
      <notification-container class="noti" />
      <router-view
        :key="$route.fullPath"
      /><!-- Tell the router to reload component when the full URL changes, including the query parameters -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ClubsHeader from "@/components/header/ClubsHeader.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import LoginUser from "@/components/LoginUser.vue";
import notificationContainer from "@/components/notificationContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    ClubsHeader,
    NavBar,
    notificationContainer,
    LoginUser,
    Footer
  },
  computed: {
    ...mapState(["event"])
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
