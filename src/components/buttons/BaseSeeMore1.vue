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
  border: 1px solid #45474d;
  color: #45474d;
  width: 33%;
  padding: 7px;
  transition: 0.3s ease-in-out;
}
@media(max-width: 576px){
  .button-container .btn{
    width: 47%;
  }
}
.button-container .btn:hover {
  background-color: #45474d;
  color: #fff;
}
</style>
