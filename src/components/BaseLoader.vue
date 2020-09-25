<template>
  <div>
    <p class="loading spinner-border" v-if="event.isLoading"></p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BaseLoader",
  data() {
    return {};
  },
  computed: {
    ...mapState(["event"])
  }
};
</script>

<style scoped>
.loading {
  display: flex;
  margin: 200px auto;
  width: 3em;
  height: 3em;
  color: #92daec;
}
</style>
