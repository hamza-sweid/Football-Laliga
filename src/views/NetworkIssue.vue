<template>
  <div>
    <h1>Uh-Oh!</h1>
    <h3>
      It seems like you are experience some network issues, please try again
    </h3>
    <router-link class="nav-item" :to="{ name: 'event-list' }"
      ><i class="fa fa-angle-double-left"></i> Back to home page</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-item {
  border-bottom: solid 2px #39b982;
  margin: 0;
}
</style>
