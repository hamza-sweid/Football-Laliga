import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
// import Speakers from "@/views/Speakers.vue";
// import Events from "@/views/Events.vue";
// import ContactUs from "@/views/ContactUs.vue";
// import BlogPost from "@/views/BlogPost.vue";
// import EventDetails from "@/views/EventDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },

  {
    path: "/Speakers",
    name: "Speakers",
    component: () =>
      import(/* webpackChunkName: "Speakers" */ "../views/Speakers.vue")
  },
  {
    path: "/Events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "Events" */ "../views/Events.vue")
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/Contact-Us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "../views/ContactUs.vue")
  },
  {
    path: "/Blog-post",
    name: "BlogPost",
    component: () =>
      import(/* webpackChunkName: "BlogPost" */ "../views/BlogPost.vue")
  },
  {
    path: "/Event-details",
    name: "EventDetails",
    component: () =>
      import(/* webpackChunkName: "EventDetails" */ "../views/EventDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
