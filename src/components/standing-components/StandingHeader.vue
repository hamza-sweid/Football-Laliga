<template>
  <div class="row standing-header">
    <span class="col-2 text-center">Position</span
    ><span class="col-3 text-center">Team</span
    ><span class="col-2 text-center">PTS</span
    ><span class="col-2 text-center">PLD</span><span class="col-1 ">W</span
    ><span class="col-1 ">D</span><span class="col-1 ">L</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.standing-header {
  background-color: #10202a;
  color: #fff;
}
.row span {
  height: 55px;
  line-height: 50px;
  font-weight: 400;
  font-size: 0.9em;
  letter-spacing: 2px;
}
.even {
  background-color: #25282a;
  color: white;
}
</style>
