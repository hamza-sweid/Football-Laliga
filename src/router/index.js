import Vue from "vue";
import VueRouter from "vue-router";
import LaligaHome from "@/views/LaligaHome.vue";
import Standing from "@/views/Standing.vue";
import LatestNews from "@/views/LatestNews.vue";
import LeaderBoard from "@/views/LeaderBoard.vue";
import LatestVideos from "@/views/LatestVideos.vue";
import NProgress from "nprogress";
import NotFound from "@/views/NotFound.vue";
import NetworkIssue from "@/views/NetworkIssue.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: LaligaHome
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
  //go to the top when click on any 'router-link'
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
