<template>
  <div class="brand-list">
    <p class="text-center">Official partners</p>
    <div class="brands">
      <div class="brand-item">
        <img src="@/assets/images/laliga/nike.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/adidas.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/lg.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/puma.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/live-score.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/ea-sport.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/rexona.png" alt="" />
      </div>
      <div class="brand-item">
        <img src="@/assets/images/laliga/budweiser.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "red"
    };
  }
};
</script>

<style scoped>
.brand-list {
  background-color: #d5d7d7;
  padding: 20px 100px;
}
.brands {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.brand-item {
  padding: 40px;
}
.brands img {
  width: 120px;
  opacity: 0.7;
  transition: 0.1s ease-in-out;
}
.brands img:hover {
  opacity: 0.9;
}
@media (max-width: 992px) {
  .brand-item {
    padding: 20px;
  }
}
@media (max-width: 576px) {
  .brands img {
    width: 70px;
  }
}
</style>
