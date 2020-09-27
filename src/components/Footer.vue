<template>
  <div class="footer row">
    <div class="col-md-6 text-center cv my-5">
      <p>
        <span id="typed-strings">Would you like to get my CV in PDF?</span
        ><span class="blinking"></span>
      </p>
      <base-button
        ><a href="Hamza's Resume.pdf" target="_blank"
          >Download my CV</a
        ></base-button
      >
    </div>
    <div class="col-md-6 text-center social-media my-5 p-4">
      <a
        href="<?php echo $setting['facebook']; ?>"
        target="_blank"
        class="icon icon-sm icon-white icon-hover mx-2"
        ><i class="fa fa-facebook fa-lg"></i
      ></a>
      <a
        href="<?php echo $setting['twitter']; ?>"
        target="_blank"
        class="icon icon-sm icon-white icon-hover mx-2"
        ><i class="fa fa-whatsapp fa-lg"></i
      ></a>
      <a
        href="<?php echo $setting['google']; ?>"
        target="_blank"
        class="icon icon-sm icon-white icon-hover mx-2"
        ><i class="fa fa-linkedin fa-lg"></i
      ></a>
      <p class="text-muted mt-3 mb-0">
        © 2020 Hamza Sweid Inc. All rights reserved.
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
  margin-top: 50px;
  padding: 30px 0;
  font-weight: bold;
  font-size: 1em;
}
</style>
