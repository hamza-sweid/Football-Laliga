<template>
  <div>
    <div id="item-v" class=" col-sm-6 col-md-6 col-lg-4">
      <a href="https://youtu.be/hs_Vyg60xdo" data-lity>
        <p id="title1" class="card-title text-white text-center">
          <b>LaLiga Santander</b>
        </p>
        <img
          src="../assets/images/laliga/video1.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="btn">
          <!-- <button class="btn-play"></button> -->
          <i class="fa fa-play text-dark"></i>
        </div>
        <div class="card-body">
          <p class=" text-muted ">THU 05.03.2020</p>
          <p class="border-0">
            Kroos lit the path and Vinicius did the rest in ElClasico.
          </p>
        </div>
        <div class="card-footer border-0">
          <a href="#"
            ><i class="fa fa-share-alt-square text-white fa-2x"></i
          ></a>
        </div>
        <img
          class="under-item"
          src="../assets/images/laliga/under-item.png"
          style="width: 100%; height: 25px; background-color: white"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventVideosItem"
};
</script>

<style scoped>
#item-v {
  -webkit-transition: 0.6s ease-in-out;
  -moz-transition: 0.6s ease-in-out;
  -ms-transition: 0.6s ease-in-out;
  -o-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  padding: 0;
}

#item-v:hover {
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
  transform: translateY(-10px);
}

#item-v .card-body {
  height: 140px;
  color: white;
}

#item-v img {
  height: 200px;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  -ms-border-radius: 0px;
  -o-border-radius: 0px;
  border-radius: 0px;
}

#item-v a:hover {
  text-decoration: none;
}

#item-v .btn {
  background-color: white;
  position: absolute;
  z-index: 0;
  top: calc(18%);
  left: calc(42%);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  cursor: pointer;
}

#item-v .btn:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -ms-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

#item-v .btn:hover .fa-play:before {
  color: blue;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

#item-v .btn i {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  line-height: 50px;
}

#item-v {
  background-color: #0b1216;
  color: white;
  font-weight: 450;
}

i:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -ms-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
</style>
