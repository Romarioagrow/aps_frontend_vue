<template>
  <v-app-bar
      color="primary"
      prominent
      flat
      app
      :image="require('../assets/grid_0ddd (6).png')"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-btn :rounded="0" height="100%" color="aliceblue" @click="goToView('/')" style="font-family: 'Discopia Regular'; font-size: 25px; margin-right: 12%;" >
      APOSFERA SPACETRIPS
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn :rounded="0" height="100%" @click="goToView('/news')" style="font-family: 'Osiris'">
      News
    </v-btn>
    <v-btn :rounded="0" height="100%" @click="goToView('/market')" style="font-family: 'Osiris'">
      Market
    </v-btn>
    <v-btn :rounded="0" height="100%" @click="goToView('/gallery')" style="font-family: 'Osiris'">
      Gallery
    </v-btn>
    <v-btn v-if="true" height="100%" :rounded="0" @click="goToView('/account')" style="font-family: 'Osiris'">
      UserAccount
    </v-btn>
    <v-btn v-if="true" height="100%" :rounded="0" @click="goToView('/login')" style="font-family: 'Osiris'">
      Login
    </v-btn>
    <v-btn :rounded="0" height="100%" color="secondary" @click="goToView('/start')" style="font-family: 'Osiris'" >
      START NOW
    </v-btn>

  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      bottom
      temporary
  >
    <v-list
        :items="items"
    ></v-list>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";
import {mapGetters} from "vuex";
export default {
  name: "NavDrawer",

  computed: {
    ...mapGetters({
      username: 'getCurrentUser',
      show_account_button: 'getUserAuth'
    })
  },

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Boris',
        value: 'Vedernikov',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  methods: {
    goToView(view_url) {
      router.push(view_url)
    }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
</style>
