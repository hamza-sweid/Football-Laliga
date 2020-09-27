<template>
  <div>
    <button class="login">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style scoped>
.login {
  padding: 8px 25px;
  background-color: transparent;
  border: 2px solid #7ebece;
  border-radius: 2em;
  color: white;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}
.login:hover {
  background-color: #7ebece;
  color: #fff;
}
.login:focus {
  outline: none;
}
@media (max-width: 576px) {
  .login {
    padding: 5px 15px;
  }
}
</style>
