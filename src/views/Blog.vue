<template>
  <div>
    <!-- ==== posts section start==== -->
    <div class="posts">
      <div class="container">
        <div class="row mt-3">
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post1.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post2.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post3.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post4.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post5.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <div class="card-img">
                <div class="overlay"></div>
                <img
                  src="@/assets/images/blog/post6.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">EVENT PLANNING</h6>
                <p class="card-date">15 MAY</p>
              </div>
              <p>Some quick example text to build on the card title . . .</p>
              <!-- <a href="blog-post.html" target="_blank"
                ><button class="btn my-btn2">Read More</button></a
              > -->
              <router-link to="blog-post" class="btn my-btn2"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <button class="btn my-btn mt-3">LOAD MORE POSTS</button>
      </div>
    </div>
    <!-- ==== posts section end==== -->
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style scooped>
/*
-----------------------------------------
posts section end
-----------------------------------------
*/
.posts {
  margin: 0 auto;
  text-align: center;
  background-color: #f6f5f3;
  padding: 50px 0;
  color: #000;
}

.posts .card {
  width: 100%;
  margin-bottom: 30px;
  border: none;
  transition: 0.6s;
  box-shadow: 0px 0px 5px #ee1f33;
}

.posts .card .card-img {
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.posts .card .card-img .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: none;
}

.posts .card:hover .overlay {
  display: block;
}

.posts .card:hover {
  transform: translateY(7px);
}

.posts .card .card-body {
  display: flex;
  justify-content: space-around;
  padding: 5px 0 0 0;
  line-height: 1;
}

.posts .card .card-body .card-title {
  color: #ee1f33;
}

.posts .card .my-btn2 {
  width: 150px;
  margin: 7px auto;
  padding: 5px;
}

@media (max-width: 576px) {
  .posts .card {
    width: 90%;
  }
}
/*
-----------------------------------------
posts section end
-----------------------------------------
*/
</style>
