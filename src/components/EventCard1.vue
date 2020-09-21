<template>
  <!-- <router-link class="event-link"> -->
  <div>
    <span class="col-2 odd">01</span
    ><span class="col-3 odd"><img src="Barcelona.png" />BARCELONA</span
    ><span class="col-1 odd">58</span><span class="col-1 odd">27</span
    ><span class="col-1 odd">18</span><span class="col-1 odd">4</span
    ><span class="col-1 odd">5</span><span class="col-1 odd">63</span
    ><span class="col-1 odd">31</span>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: "x",
  props: ["data"]
};
</script>

<style scoped>
.standing {
  margin-bottom: 70px;
}

.Border {
  border-bottom: 8px solid #92daec;
}

.row span {
  height: 55px;
  line-height: 50px;
  font-weight: 400;
  font-size: 0.85em;
  letter-spacing: 2px;
}

.even {
  background-color: #25282a;
  color: white;
}

.odd {
  background-color: #254150;
  color: white;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
