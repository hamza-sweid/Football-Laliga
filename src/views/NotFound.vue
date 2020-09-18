<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you are looking for is not here.</h3>
    <router-link class="nav-item" :to="{ name: 'event-list' }"
      ><i class="fa fa-angle-double-left"></i> Back to home page</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      //one 'param' but two different 'value'
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.nav-item {
  border-bottom: solid 2px #39b982;
  margin: 0;
}
</style>
