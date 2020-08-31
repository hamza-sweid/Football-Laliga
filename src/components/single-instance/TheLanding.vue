<template>
  <div>
    <!-- ==== landing section start==== -->
    <section class="landing">
      <div class="overlay"></div>
      <div class="landing-content">
        <h1>{{ $route.name }}</h1>
        <p>
          Home - <span>Our {{ $route.name }}</span>
        </p>
      </div>
    </section>
    <!-- ==== landing section end==== -->
  </div>
</template>

<script>
export default {
  name: "TheLanding"
};
</script>

<style scooped>
/*
-----------------------------------------
landing section start
-----------------------------------------
*/
.landing {
  background: url(../../assets/images/blog/landing.jpg) no-repeat;
  background-size: cover;
  height: 60%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  position: relative;
}

.landing .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.landing .landing-content {
  z-index: 2;
  color: #fff;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing .landing-content h1 {
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 20px 0;
  text-indent: 20px;
}

.landing .landing-content p {
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
}

.landing .landing-content p span {
  color: #ee1f33;
}

@media (max-width: 768px) {
  .landing .landing-content h1 {
    font-size: 5vw;
    margin: 28px 0;
  }

  .landing .landing-content p {
    font-size: 2.3vw;
    margin: 2px 0;
  }
}
/*
-----------------------------------------
landing section end
-----------------------------------------
*/
</style>
