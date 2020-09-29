import Vue from "vue";
import VueRouter from "vue-router";
import Standing from "@/views/Standing.vue";
import LatestNews from "@/views/LatestNews.vue";
import EventShow from "@/views/EventShow.vue";
import EventCreate from "@/views/EventCreate.vue";
import LeaderBoard from "@/views/LeaderBoard.vue";
import LatestVideos from "@/views/LatestVideos.vue";
import NProgress from "nprogress";
import store from "@/store/index";
import NotFound from "@/views/NotFound.vue";
import NetworkIssue from "@/views/NetworkIssue.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "event-list",
    component: NotFound,
    props: true // sent 'params' in as 'props'
  },
  {
    path: "/standing",
    name: "standing",
    component: Standing
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: LeaderBoard,
    props: true // sent 'params' in as 'props'
  },
  {
    path: "/videos",
    name: "videos",
    component: LatestVideos
  },
  {
    path: "/news",
    name: "news",
    component: LatestNews
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
