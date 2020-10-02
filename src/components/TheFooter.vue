<template>
  <div class="footer row">
    <div class="col-md-6 text-center cv my-5">
      <p>
        <span id="typed-strings">Would you like to get my CV in PDF?</span
        ><span class="blinking"></span>
      </p>
      <base-login-button
        ><a href="Hamza's Resume.pdf" target="_blank"
          >Download my CV</a
        ></base-login-button
      >
    </div>
    <div class="col-md-6 text-center social-media my-5 pt-3">
      <a
        href="mailto:hamza.sweid963@gmail.com"
        class="icon icon-sm icon-white icon-hover mx-2"
        ><i class="fa fa-envelope-o fa-lg"></i
      ></a>
      <a
        href="https://api.whatsapp.com/send?phone=963962674393"
        class="icon icon-sm icon-white icon-hover mx-2"
        target="_blank"
        ><i class="fa fa-whatsapp fa-lg"></i
      ></a>
      <a
        href="https://www.linkedin.com/in/hamza-sweid-345746184/"
        target="_blank"
        class="icon icon-sm icon-white icon-hover mx-2"
        ><i class="fa fa-linkedin fa-lg"></i
      ></a>
      <p class="text-muted mt-3 mb-0">
        © 2020
        <a class="my-website" href="https://hamza--sweid.000webhostapp.com/"
          >Hamza Sweid</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 100%;
  background-color: #181818;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
}
.my-website {
  color: #486777;
}
.my-website:hover {
  color: #7ebece;
}
</style>
