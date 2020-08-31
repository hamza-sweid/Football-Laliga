<template>
  <div>
    <!-- ==== post Section Start==== -->
    <section class="post">
      <div class="post-img">
        <div class="post-nav">
          <a href="#"><i class="fa fa-angle-left fa-lg"></i></a>
          <a href="blog.html"><i class="fa fa-align-justify fa-lg"></i></a>
          <a href="#"><i class="fa fa-angle-right fa-lg"></i></a>
        </div>
      </div>
      <div class="container">
        <div class="post-header">
          <span class="date text-muted">21 July 2016</span>
          <h2 class="post-title my-4">Road to success</h2>
          <ul class="post-meta text-muted">
            <li>
              <i class="li-usb1"></i><a href="#">Sport</a>,
              <a href="#">Motivation</a>
            </li>
            <span class="mx-4 font-weight-bold">*</span>
            <li><i class="li-feedback"></i>5 Comments</li>
          </ul>
        </div>
        <hr />
        <div class="lead">
          <p>
            Integer commodo nisi nec hendrerit volutpat. Ut semper lacus felis,
            vitae malesuada orci dapibus at. Etiam bibendum sed quam vitae
            scelerisque. Mauris aliquet vulputate lorem ultrices porttitor.
            Vivamus lobortis nisl felis, laoreet tincidunt lectus bibendum id.
          </p>
          <p>
            Etiam et lobortis turpis, blandit vestibulum nisl. Sed vel enim sit
            amet lectus mollis feugiat eget et augue. Nunc eu felis dignissim,
            malesuada mi at, tempor ex. Quisque quis elit non sem vehicula
            dictum at sed turpis. In dignissim sodales leo nec pharetra. Fusce a
            lectus quis lorem condimentum consectetur ac at turpis. Nunc
            pulvinar non nisl tempor blandit.
          </p>
        </div>
        <blockquote class="blockquote">
          <span>It was the best coach I’ve ever had!</span>
          <footer class="mt-3">
            <img src="@/assets/images/blog-post/avatar1.jpg" alt="" />
            <span class="name"
              >Mark Johnson<span class="text-muted">, Google</span></span
            >
          </footer>
        </blockquote>
        <p>
          Cras non placerat mi. Sed condimentum tristique gravida. In egestas
          malesuada tempus. In quis orci eros. Sed risus ligula, scelerisque nec
          lacinia eu, rutrum a est. Cras sodales libero libero, sagittis tempor
          augue sollicitudin ut. In tortor nibh, aliquet sed rutrum sit amet,
          scelerisque sit amet odio. Nulla facilisi. Ut hendrerit justo eu
          eleifend volutpat.
        </p>
        <p class="mb-5">
          Proin eu faucibus ante. Nunc euismod purus vel neque porta egestas.
          Nunc pellentesque enim felis, at egestas libero semper quis. Nullam
          non tristique metus. Cras ipsum justo, dignissim eu euismod id,
          fermentum eu lectus. Praesent malesuada dolor eu magna posuere, non
          pharetra est semper. Curabitur interdum lacinia justo ac posuere.
          Phasellus auctor tempus est, a tempor odio dictum id. Nulla at
          ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur pulvinar tristique justo, sit amet rutrum lectus
          posuere et. Donec quis facilisis dolor, et molestie elit.
        </p>
        <hr />
      </div>
    </section>
    <!-- ==== post Section end==== -->

    <!-- ==== comments Section Start==== -->
    <section class="comments">
      <div class="container">
        <h4 class="text-center">Comments</h4>
        <div class="comment-content">
          <img src="@/assets/images/blog-post/avatar1.jpg" alt="" />
          <div class="content">
            <div class="details">
              <p class="text-muted">
                <span class="person">Joe Smith</span> on
                <span class="date">September 20</span>
                <a href="#" class="add-reply">Reply</a>
              </p>
              <p>
                Morbi ut faucibus nulla, at fringilla est. Morbi lacinia
                sagittis purus.
              </p>
            </div>
          </div>
        </div>
        <div class="comment-reply">
          <img src="@/assets/images/blog-post/avatar2.jpg" alt="" />
          <div class="content">
            <div class="details">
              <p class="text-muted">
                <span class="person">Joe Smith</span> on
                <span class="date">September 20</span>
              </p>
              <p>
                Morbi ut faucibus nulla, at fringilla est. Morbi lacinia
                sagittis purus, nec dapibus felis tempus in. Quisque eget
                elementum sem, cursus tristique orci. Donec velit nisi, auctor
                ac pharetra in, maximus eu justo.
              </p>
            </div>
          </div>
        </div>
        <div class="comment-content">
          <img src="@/assets/images/blog-post/avatar1.jpg" alt="" />
          <div class="content">
            <div class="details">
              <p class="text-muted">
                <span class="person">Joe Smith</span> on
                <span class="date">September 20</span>
                <a href="#" class="add-reply">Reply</a>
              </p>
              <p>
                Morbi ut faucibus nulla, at fringilla est. Morbi lacinia
                sagittis purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==== comments Section end==== -->

    <!-- ==== add-comment Section Start==== -->
    <section class="add-comment">
      <div class="container">
        <h4 class="mb-5">Write a Comment</h4>
        <form action="" class="validate-form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="E-mail"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-control"
              id="exampleInputComment1"
              placeholder="Comment"
              rows="5"
              required
            ></textarea>
          </div>
          <a href="#"
            ><button type="submit" class="btn w-50 my-btn">
              Send a Comment
            </button></a
          >
        </form>
      </div>
    </section>
    <!-- ==== add-comment Section end==== -->
  </div>
</template>

<script>
export default {
  name: "BlogPost"
};
</script>

<style scooped>
/*
-----------------------------------------
post section start
-----------------------------------------
*/
.post {
  margin: 0;
}

.post .post-img {
  background: url(../assets/images/blog-post/blog-post.jpg) no-repeat;
  background-size: cover;
  min-height: 400px;
  position: relative;
}

.post .post-img .post-nav {
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  align-items: center;
  background-color: #555;
  border-radius: 2rem;
  box-shadow: 0 0 4px #555;
}

.post .post-img .fixed {
  position: fixed;
}

.post .post-img .post-nav i {
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.9;
  padding: 8px 15px;
  transition: 0.3s;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.post .post-img .post-nav i:hover {
  color: #fff;
}

.post .post-header {
  text-align: center;
  margin: 50px auto;
}

.post .post-header .post-meta {
  display: flex;
  justify-content: center;
}

.post .lead {
  margin: 50px auto;
}

.post .lead p:first-child {
  font-size: 19px;
  letter-spacing: 1px;
  margin-bottom: 35px;
}

.post .blockquote {
  background-color: #f7f7f7;
  padding: 40px;
  margin-bottom: 40px;
}

.post .blockquote span:first-child {
  font-size: 20px;
}

.post .blockquote img {
  width: 50px;
  border-radius: 50%;
}

.post .blockquote span:nth-child(2) {
  font-size: 15px;
}
@media (max-width: 768px) {
  .post .post-img {
    min-height: 300px;
  }
}
/*
-----------------------------------------
post section end
-----------------------------------------
*/

/*
-----------------------------------------
comments section start
-----------------------------------------
*/
.comments {
  margin: 40px auto;
  max-width: 800px;
}

.comments img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.comments p {
  margin: 5px;
  padding-left: 15px;
}

.comments .comment-content {
  display: flex;
  margin: 40px 0;
}

.comments .comment-content .add-reply {
  color: #ee1f33;
}

.comments .comment-reply {
  padding: 20px 80px;
  display: flex;
  background-color: #f8f8f8;
}

@media (max-width: 576px) {
  .comments .comment-reply {
    padding: 10px 30px;
  }
}
/*
-----------------------------------------
comments section end
-----------------------------------------
*/

/*
-----------------------------------------
add-comment section start
-----------------------------------------
*/
.add-comment {
  margin: 70px auto;
  text-align: center;
}

.add-comment .validate-form .form-control {
  padding: 25px;
  margin: 25px 0;
  border: 1px solid #d8e4ee;
}

.add-comment .validate-form .btn {
  font-size: 16px;
  padding: 20px;
}
/*
-----------------------------------------
add-comment section end
-----------------------------------------
*/
</style>
