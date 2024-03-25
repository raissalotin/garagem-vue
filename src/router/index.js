import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import EditoraView from "../views/EditoraView.vue";
import CategoriaView from "../views/CategoriaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessorioView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
  ],
});

export default router;
