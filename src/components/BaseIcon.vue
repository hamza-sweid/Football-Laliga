<template>
  <div class="icon-user">
    <i class="fa fa-users fa-lg"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseIcon"
};
</script>

<style lang="scss" scoped>
.icon-user {
  display: inline;
}
</style>
