<template>
  <nav class="navbar sticky-top  navbar-expand-lg navbar-dark">
    <base-button
      class="d-block d-lg-none auto-click"
      data-toggle="modal"
      data-target="#exampleModa3"
      data-whatever="@mdo"
      >Login<i class="fa fa-user ml-2 no-hover"></i
    ></base-button>
    <router-link to="/" class="navbar-brand text-white mr-3 border-0"
      >Football Blog</router-link
    >
    <button
      id="navbar-toggle"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/news" class="nav-link text-white"
            >Latest News</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/standing" class="nav-link text-white"
            >Standing</router-link
          >
        </li>
        <li class="d-none d-lg-flex">
          <router-link class="logo border-0" to="/">
            <img
              class="logo-img"
              src="@/assets/images/laliga/LaLiga.svg"
              alt=""
            />
            <p class="text-white mt-2">LaLiga</p></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/videos" class="nav-link text-white"
            >Latest Videos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/leaderboard" class="nav-link text-white"
            >Leaderboard</router-link
          >
        </li>
      </ul>
    </div>
    <base-button
      class="d-none d-lg-block"
      data-toggle="modal"
      data-target="#exampleModa3"
      data-whatever="@mdo"
      >Login<i class="fa fa-user ml-2 no-hover"></i
    ></base-button>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    setTimeout(() => {
      document.querySelector(".auto-click").click();
    }, 10000);
  }
};
</script>

<style scoped>
.navbar-toggler {
  border-color: #7ebece;
  outline: none;
}
@media (max-width: 992px) {
  .navbar-nav {
    background-color: #25282a;
  }
  .navbar-nav .nav-item {
    text-align: center;
  }
}
.navbar {
  background-color: #25282a;
  height: 55px;
}
.navbar-collapse {
  margin-top: 7px;
}
.navbar-nav {
  margin: auto;
}
.nav-item {
  margin: 0 40px;
}
.nav-link {
  padding: 0 1em;
  line-height: 49px;
}
.nav-link:hover {
  background-color: #7ebece;
}
@media (max-width: 1150px) {
  .nav-item {
    margin: 0 28px;
    font-size: 13px;
  }
}
.logo {
  display: flex;
  line-height: 35px;
  align-items: center;
}
.logo .logo-img {
  background-color: transparent;
  width: 50px;
  height: 50px;
}
</style>
