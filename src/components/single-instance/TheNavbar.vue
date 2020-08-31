<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/home/logo.jpg" class="logo" alt="logo" />
        </router-link>
        <h6>INNOCENT</h6>
      </div>
      <button class="btn my-btn d-block d-lg-none">
        Donate Now
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon1"></span>
        <span class="toggler-icon2"></span>
        <span class="toggler-icon3"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="index.html" target="_blank">Home</a> -->
            <router-link class="nav-link" to="/" tag="a">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="speakers.html" target="_blank"
              >Speakers</a
            > -->
            <router-link class="nav-link" to="/Speakers" tag="a">
              Speakers
            </router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="events.html" target="_blank">Events</a> -->
            <router-link class="nav-link" to="/Events" tag="a">
              Events
            </router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Blog</a> -->
            <router-link class="nav-link" to="/Blog" tag="a">Blog</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="contact-us.html" target="_blank"
              >Contact</a
            > -->
            <router-link class="nav-link" to="/Contact-Us" tag="a"
              >Contact</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
              <span class="dropdown-sign">+</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <!-- <a class="dropdown-item" href="blog-post.html" target="_blank"
                >Blog Post</a
              > -->
              <router-link class="nav-link" to="/Blog-post" tag="a"
                >Blog Post</router-link
              >
              <!-- <a class="dropdown-item" href="event-details.html" target="_blank"
                >Event Details</a
              > -->
              <router-link class="nav-link" to="/Event-Details" tag="a"
                >Event Details</router-link
              >
            </div>
          </li>
        </ul>
        <button class="btn my-btn d-none d-lg-block" target="_blank">
          Donate Now
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.3);
  padding: 0 50px;
}

.navbar .logo img {
  width: 100px;
  height: 50px;
}

.navbar .logo h6 {
  color: #000;
  font-weight: bolder;
  padding: 0 10px;
}

.navbar .navbar-nav {
  margin: 0 auto;
}

.navbar .navbar-nav .router-link-exact-active {
  color: #ee1f33;
}

.navbar .navbar-nav li {
  padding: 0 10px;
}

.navbar .navbar-nav li *:hover {
  color: #ee1f33;
  background-color: #fff;
}

.navbar .navbar-nav .plus {
  font-size: 15px;
}

.navbar .navbar-nav .minus {
  font-size: 18px;
  display: none;
}

.navbar .dropdown-menu {
  border: none;
  top: 55px;
  font-size: 15px;
}

.navbar .dropdown-menu a {
  font-size: 14px;
  font-weight: bold;
  padding: 4px 24px;
}

.navbar .dropdown-item:active {
  background-color: #fff;
}

.navbar-toggler {
  display: flex;
  flex-direction: column;
}

.navbar .toggler-icon1,
.navbar .toggler-icon2,
.navbar .toggler-icon3 {
  width: 35px;
  height: 3px;
  background-color: #ee1f33;
  margin: 3px 0;
  transition: 0.4s;
}

.navbar .change .toggler-icon1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-40deg) translate(-6px, 6px);
}

.navbar .change .toggler-icon2 {
  opacity: 0;
}

.navbar .change .toggler-icon3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(40deg) translate(-6px, -6px);
}

@media (max-width: 991px) {
  .navbar .navbar-collapse {
    width: 100%;
    z-index: 5;
    top: 77px;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    position: absolute;
  }

  .navbar .navbar-nav .plus {
    font-size: 20px;
  }

  .navbar .collapse {
    padding-top: 8px;
  }
}

@media (max-width: 768px) {
  .navbar .navbar-collapse {
    top: 66px;
  }

  .navbar .navbar-nav .plus {
    font-size: 18px;
  }
}
</style>
