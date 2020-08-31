<template>
  <div id="app">
    <the-header-info></the-header-info>
    <the-navbar></the-navbar>
    <the-landing></the-landing>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeaderInfo from "@/components/single-instance/TheHeaderInfo.vue";
import TheNavbar from "@/components/single-instance/TheNavbar.vue";
import TheFooter from "@/components/single-instance/TheFooter.vue";
import TheLanding from "@/components/single-instance/TheLanding.vue";

export default {
  components: {
    TheHeaderInfo,
    TheNavbar,
    TheFooter,
    TheLanding
  }
};
</script>
