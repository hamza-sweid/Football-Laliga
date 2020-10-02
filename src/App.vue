<template>
  <div id="app">
    <pre-loader v-if="event.preLoader"></pre-loader>
    <div v-else>
      <clubs-header class="clubs-header" />
      <the-nav-bar />
      <login-user></login-user>
      <notification-container class="noti" />
      <router-view
        :key="$route.fullPath"
      /><!-- Tell the router to reload component when the full URL changes, including the query parameters -->
      <img class="mt-4" src="@/assets/images/laliga/above-footer.svg" alt="" />
      <BrandList />
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import PreLoader from "@/components/PreLoader.vue";
import ClubsHeader from "@/components/header/ClubsHeader.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import LoginUser from "@/components/LoginUser.vue";
import notificationContainer from "@/components/notificationContainer.vue";
import TheFooter from "@/components/TheFooter.vue";
import BrandList from "@/components/BrandList.vue";

export default {
  name: "App",
  components: {
    PreLoader,
    ClubsHeader,
    TheNavBar,
    notificationContainer,
    LoginUser,
    TheFooter,
    BrandList
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
