<template>
  <v-app-bar
      color="primary"
      prominent
      flat
      app
      :image="require('../assets/grid_0ddd (6).png')"
  >
    <v-btn :rounded="0" height="100%" color="aliceblue" @click="goToView('/')" style="font-family: 'Discopia Regular'; font-size: 25px; margin-right: 12%;" >
      APOSFERA SPACETRIPS
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn :rounded="0" height="100%" @click="goToView('/news')" style="font-family: 'Osiris'">
      News
    </v-btn>
    <v-btn :rounded="0" height="100%" :disabled="true" @click="goToView('/market')" style="font-family: 'Osiris'">
      Market
    </v-btn>
    <v-btn :rounded="0" height="100%" @click="goToView('/gallery')" style="font-family: 'Osiris'">
      Gallery
    </v-btn>
<!--    <v-btn v-if="show_account_button" height="100%" :rounded="0" @click="goToView('/account')" style="font-family: 'Osiris'">
      UserAccount
    </v-btn>
    <v-btn v-if="!show_account_button" height="100%" :rounded="0" @click="goToView('/login')" style="font-family: 'Osiris'">
      Login
    </v-btn>-->
    <v-btn :rounded="0" height="100%" color="secondary" @click="goToView('/start')" style="font-family: 'Osiris'" >
      START NOW
    </v-btn>
  </v-app-bar>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goToView(view_url) {
      router.push(view_url)
    }
  },
}
</script>

<style scoped>
</style>
