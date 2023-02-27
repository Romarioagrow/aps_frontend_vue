

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
  components: {NavDrawer},

  data() {
    return {
      state: {
        csrf: "",
        username: "",
        password: "",
        error: "",
        isAuthenticated: false,
      }
    }
  },

  created() {
    this.getSession()
  },
  methods: {
    getCSRF () {
      fetch("http://localhost:8000/api/csrf/", {
        credentials: "include",
      })
          .then((res) => {
            let csrfToken = res.headers.get("X-CSRFToken")
            this.$store.dispatch('setCSRF', csrfToken)
            console.log(csrfToken)
          })
          .catch((err) => {
            console.log(err)
          });
    },

    getSession () {
      fetch("http://localhost:8000/api/session/", {
        credentials: "include",
      })
          .then((res) => res.json())
          .then((data) => {
            if (data.isAuthenticated) {
              this.$store.dispatch('setAuth', true)

            } else {
              this.$store.dispatch('logout')
              this.getCSRF()
            }
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }
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