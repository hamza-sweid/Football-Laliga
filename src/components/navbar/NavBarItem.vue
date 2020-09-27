<template>
  <div class="nav-item">
    <li>
      <router-link to="/" class="nav-link text-white">
        <slot></slot>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
* {
  color: #fff;
}
.nav-item {
  margin: 0 33px;
  line-height: 30px;
}
.nav-link:hover {
  background-color: #7ebece;
}
@media (max-width: 1050px) {
  .nav-item {
    margin: 0 25px;
  }
}
</style>
