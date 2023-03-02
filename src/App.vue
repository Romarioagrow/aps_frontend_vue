<template>
  <v-app style="background-color: black">
    <NavBar></NavBar>
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
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar},
}
</script>

<style>
@font-face {
  font-family: "Discopia Regular";
  src: local("Discopia Regular"),
  url(./fonts/DiscopiaRegular.ttf) format("truetype");
}
@font-face {
  font-family: "Osiris";
  src: local("Osiris"),
  url(./fonts/Osiris.otf) format("truetype");
}
</style>