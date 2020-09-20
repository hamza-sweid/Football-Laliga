<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: data.squad_name } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow"
        >@{{ data.squad_name }} on {{ data.squad_name }}</span
      >
      <h4 class="title">{{ data.squad_name | dateFilter }}</h4>
      <base-icon>{{ data.squad_name }} attending</base-icon>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: ["data"]
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
