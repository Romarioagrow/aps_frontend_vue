

<template>
  <v-app style="background-color: white">
    <NavDrawer></NavDrawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import NavDrawer from "@/components/NavBar";

export default {
  components: {NavDrawer}
}
</script>

<style>
@font-face {
  font-family: "Discopia Regular";
  src: local("Discopia Regular"),
  url(./fonts/Discopia Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Osiris";
  src: local("Osiris"),
  url(./fonts/Osiris.otf) format("truetype");
}
</style>