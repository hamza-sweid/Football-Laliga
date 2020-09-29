<template>
  <div class="breadcrumb">
    <p class="font-weight-bold mb-4">
      <router-link class="home-link" to="/">Home</router-link> >
      {{ this.$route.name }}
    </p>
    <h2 class="font-weight-bold text-uppercase">{{ this.$route.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb"
};
</script>

<style scoped>
.breadcrumb {
  display: block;
  background-color: #d5d7d7;
  margin: 0;
  padding: 45px;
}
.home-link {
  color: #7ebece;
  transition: 0.3s ease-in-out;
}
.home-link:hover {
  color: #4ba7be;
}
</style>
