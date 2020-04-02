import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue")
    },
    {
      path: "/posts",
      name: "Posts",
      component: () => import("../views/Posts.vue"),
      meta: {
        requiredToken: true
      }
    },
    {
      path: "/posts/:id",
      name: "PostDetail",
      component: () => import("../views/PostDetail.vue"),
      meta: {
        requiredToken: true
      }
    },
    {
      path: "*",
      component: () => import("../views/NotFound.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiredToken)) {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (token) return next();
    else return next("/");
  }

  next();
});

export default router;
