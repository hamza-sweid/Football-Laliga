import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "@/views/EventList.vue";
import EventShow from "@/views/EventShow.vue";
import EventCreate from "@/views/EventCreate.vue";
import EventLeaders from "@/views/EventLeaders.vue";
import EventVideos from "@/views/EventVideos.vue";
import NProgress from "nprogress";
import store from "@/store/index";
import NotFound from "@/views/NotFound.vue";
import NetworkIssue from "@/views/NetworkIssue.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true // sent 'params' in as 'props'
  },
  {
    path: "/event/leaders",
    name: "event-leaders",
    component: EventLeaders,
    props: true // sent 'params' in as 'props'
  },
  {
    path: "/event/videos",
    name: "event-videos",
    component: EventVideos,
    props: true // sent 'params' in as 'props'
  },

  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    beforeEnter: (to, from, next) => {
      //this runs after the global 'beforeEach' below
      store
        .dispatch("event/fetchEvent", to.params.id)
        .then((event) => {
          //recieve event from action
          to.params.event = event; // sent it as props
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "event" } });
          } else {
            next({ name: "network-issue" });
          }
        }); //this param when entering any 'not exist event'
    }
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true
  },
  {
    path: "*", //catch-call route, when it doesn't match any of the routes above
    redirect: { name: "404", params: { resource: "page" } } //this param when entering any 'not exist route'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
