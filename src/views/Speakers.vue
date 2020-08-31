<template>
  <div>
    <!-- ==== landing section start==== -->
    <!-- <section class="landing">
      <div class="overlay"></div>
      <div class="landing-content">
        <h1>
          OUR SPEAKERS
        </h1>
        <p>Home - <span>Our Speakers</span></p>
      </div>
    </section> -->
    <!-- ==== landing section end==== -->

    <!-- ==== intro section start==== -->
    <section class="intro">
      <div class="container">
        <h3 class="mb-3">INSPIRATION FOR YOUR MIND</h3>
        <p>
          The biggest event of the year for creatives from all across the
          country. Be there as the design community comes together for
          provocative speakers, nightly networking receptions, live competitions
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptatum corporis et, inventore culpa cumque natus nam vero quo hic,
          facilis ea id reprehenderit animi corrupti, cupiditate saepe quaerat
          error.
        </p>
      </div>
    </section>
    <!-- ==== intro section end==== -->

    <!-- ==== speakers section start==== -->
    <section class="speakers">
      <div class="container">
        <div class="filter-btn">
          <p class="current" data-filter="*">ALL</p>
          <p data-filter=".education">EDUCATION</p>
          <p data-filter=".motivation">MOTIVATION</p>
          <p data-filter=".development">DEVELOPMENT</p>
        </div>
        <div class="spk-gallery">
          <div class="row mt-3">
            <div class="col-sm-6 motivation">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Mark Walker</h5>
                  <small class="card-text">Motivational Speaker-UK</small>
                </div>
              </div>
            </div>
            <div class="col-sm-6 development">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers2.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Joe Smith</h5>
                  <small class="card-text">Development Speaker</small>
                </div>
              </div>
            </div>
            <div class="col-sm-6 education">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers3.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">James Dott</h5>
                  <small class="card-text">Education Speaker</small>
                </div>
              </div>
            </div>
            <div class="col-sm-6 motivation">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Allan Smith</h5>
                  <small class="card-text">Motivational Speaker-UK</small>
                </div>
              </div>
            </div>
            <div class="col-sm-6 development">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers2.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Allan Smith</h5>
                  <small class="card-text">Development Speaker-UK</small>
                </div>
              </div>
            </div>
            <div class="col-sm-6 motivation">
              <div class="card">
                <div class="card-img">
                  <div class="overlay"></div>
                  <a
                    href="https://www.youtube.com/watch?v=1OOBni_GpZc"
                    data-lity
                    class="play-btn"
                  >
                    <i class="fa fa-play fa-lg"></i>
                  </a>
                  <img
                    src="@/assets/images/home/speakers4.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Allan Smith</h5>
                  <small class="card-text">Motivational Speaker-UK</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#"><button class="btn my-btn">VEW MORE VIDEOS</button></a>
      </div>
    </section>
    <!-- ==== speakers section end==== -->
  </div>
</template>

<script>
export default {
  name: "Speakers"
};
</script>

<style scooped>
/*
-----------------------------------------
landing section start
-----------------------------------------
*/
/* .landing {
  background: url(../assets/images/speakers/landing1.jpg) no-repeat;
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
  background-color: rgba(0, 0, 0, 0.65);
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
} */
/*
-----------------------------------------
landing section end
-----------------------------------------
*/

/*
-----------------------------------------
intro section start
-----------------------------------------
*/
.intro {
  padding: 50px;
  text-align: center;
}

.intro p {
  letter-spacing: 1px;
  font-weight: 400;
}
/*
-----------------------------------------
intro section end
-----------------------------------------
*/

/*
-----------------------------------------
speakers section start
-----------------------------------------
*/
.speakers {
  margin: 20px auto;
  text-align: center;
}

.speakers .filter-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.speakers .filter-btn p {
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;
}

.speakers .filter-btn p:hover {
  color: #ee1f33;
}

.speakers .filter-btn .current {
  font-weight: 500;
  color: #ee1f33;
  border-bottom: 1px solid #ee1f33;
}

.speakers .spk-gallery .card {
  width: 90%;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
}

.speakers .spk-gallery .card .card-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.speakers .spk-gallery .card .card-img .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
}

.speakers .spk-gallery .card .card-img .play-btn {
  position: absolute;
  font-size: 15px;
}

.speakers .spk-gallery .card:hover .overlay {
  display: block;
}

.speakers .spk-gallery .card .card-img .play-btn:before {
  content: "";
  position: absolute;
  border: 1px dotted #fff;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 40px;
  top: -13px;
  left: -13px;
}

.speakers .spk-gallery .card .card-img .play-btn i {
  background-color: #ee1f33;
  padding: 20px;
  color: #fff;
  border-radius: 50%;
}

.speakers .spk-gallery .card .card-img .play-btn:hover {
  font-size: 22px;
}

.speakers .spk-gallery .card .card-img .play-btn:hover:before {
  display: none;
}

.speakers .spk-gallery .card-body {
  display: flex;
  justify-content: space-around;
}

.speakers .spk-gallery .card-body .card-title {
  font-weight: bold;
}

.speakers .spk-gallery .card-body .card-text {
  color: #ee1f33;
  line-height: 25px;
}

@media (max-width: 768px) {
  .speakers .spk-gallery .card .card-img .play-btn {
    font-size: 12px;
  }

  .speakers .spk-gallery .card .card-img .play-btn:before {
    border-radius: 50%;
    padding: 28px;
    top: -8px;
    left: -8px;
  }

  .speakers .spk-gallery .card .card-img .play-btn i {
    background-color: #ee1f33;
    padding: 15px;
    color: #fff;
    border-radius: 50%;
  }
}

@media (max-width: 576px) {
  .speakers .filter-btn p {
    margin: 8px;
  }
  .speakers .spk-gallery .card .card-img .play-btn {
    font-size: 18px;
  }

  .speakers .spk-gallery .card .card-img .play-btn:before {
    padding: 35px;
    top: -13px;
    left: -13px;
  }
}
/*
-----------------------------------------
speakers section end
-----------------------------------------
*/
</style>
