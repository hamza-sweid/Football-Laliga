<template>
  <div id="app">
    <nav-bar />
    <notification-container class="noti" />
    <router-view
      :key="$route.fullPath"
    /><!-- Tell the router to reload component when the full URL changes, including the query parameters -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import notificationContainer from "@/components/notificationContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    notificationContainer
  }
};
</script>

<style></style>
