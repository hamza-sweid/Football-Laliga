<template>
  <div class="button-container">
    <button type="button" class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.button-container .btn {
  background-color: #0c1b23;
  color: #92daec;
  border: 2px solid #92daec;
  width: 33%;
  padding: 7px;
  transition: 0.3s ease-in-out;
}
@media (max-width: 576px) {
  .button-container .btn {
    width: 47%;
  }
}
.button-container .btn:hover {
  background-color: #92daec;
  color: #0c1b23;
}
</style>
