import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import StartPage from "@/pages/StartNowPage.vue";
import LoginPage from "@/pages/LoginPage";
import GalleryPage from "@/pages/GalleryPage";
import MarketPage from "@/pages/MarketPage";
import NewsPage from "@/pages/NewsPage";
import UserAccountPage from "@/pages/UserAccountPage";


const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/start',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
  {
    path: '/market',
    name: 'MarketPage',
    component: MarketPage
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/account',
    name: 'UserAccount',
    component: UserAccountPage,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
