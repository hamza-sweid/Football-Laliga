<template>
  <div>
    <h3>
      <b><slot></slot></b>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  padding: 10px 30px;
  margin: 30px 0;
}
b {
  padding-bottom: 10px;
  border-bottom: 1px solid #fe2834;
}
</style>
