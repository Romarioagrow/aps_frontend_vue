<template>
  <v-container>
    <h1>{{username}}</h1>
    <v-row>
      <v-col>
        <v-btn :rounded="0" @click="logout()">
          Logout
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "UserCabinet",

  methods: {
    logout () {
      fetch("http://localhost:8000/api/logout", {
        credentials: "include",
      })
          .then(this.isResponseOk)
          .then((data) => {
            console.log(data);
            this.$store.dispatch('logout')
            this.getCSRF();
          })
          .catch((err) => {
            console.log(err);
          });
    },

    getCSRF () {
      fetch("http://localhost:8000/api/csrf/", {
        credentials: "include",
      })
          .then((res) => {
            let csrfToken = res.headers.get("X-CSRFToken");
            this.$store.dispatch('setCSRF', csrfToken)
            console.log(csrfToken);
          })
          .catch((err) => {
            console.log(err);
          });
    },

    logout_request() {
      this.axios.get('http://127.0.0.1:8000/users/logout').then(() => {
        this.$store.dispatch('logout')
        this.$session.destroy()
      })
    }
  },

  computed: {
    ...mapGetters({
      username: 'getCurrentUser'
    })
  }
}
</script>

<style scoped>

</style>
