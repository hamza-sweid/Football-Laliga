<template>
  <header class="header-contact">
    <div class="container">
      <div class="charity-info">
        <div class="connect-info">
          <a href="mailto:hamza.sweid963@gmail.com">
            <i class="fa fa-envelope fa-lg main-clr"></i>
            admin@domail.com
          </a>
          <a href="tel:000123456789">
            <i class="fa fa-phone fa-lg main-clr"></i>
            000 1234 56789
          </a>
          <a href="#">
            <i class="fa fa-map-marker fa-lg main-clr"></i>
            Street 222, South Africa
          </a>
        </div>
        <div class="social-info">
          <a href="https://www.facebook.com" target="blank">
            <i class="fa fa-facebook fa-lg"></i>
          </a>
          <a href="https://www.google+.com" target="blank">
            <i class="fa fa-google-plus fa-lg"></i>
          </a>
          <a href="https://www.twitter.com">
            <i class="fa fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i class="fa fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeaderInfo"
};
</script>

<style scoped>
.header-contact {
  background-color: #000;
  padding: 13px 19px;
  font-size: 10px;
  color: white;
  letter-spacing: 1px;
}

.header-contact .charity-info {
  display: flex;
  justify-content: space-between;
}

.header-contact .charity-info .connect-info a {
  padding: 0px 15px;
  color: #dadada;
  border-right: 1px solid #eaeaea;
}

.header-contact .charity-info .social-info a {
  padding: 0 10px;
  color: #dadada;
  /* background-color: #151414; */
}

@media (max-width: 992px) {
  .header-contact .charity-info .connect-info a,
  .header-contact .charity-info .social-info a {
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  .header-contact .charity-info .connect-info a,
  .header-contact .charity-info .social-info a {
    padding: 10px 6px;
    border-right: none;
    font-size: 9px;
    letter-spacing: 0;
  }
}

@media (max-width: 600px) {
  .header-contact .container {
    padding: 0;
  }
  .header-contact .charity-info .connect-info a,
  .header-contact .charity-info .social-info a {
    padding: 0px;
  }
}

@media (max-width: 458px) {
  .header-contact {
    display: none;
  }
}
</style>
