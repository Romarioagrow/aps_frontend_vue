<template>
  <v-container>
    <h1>Hello, User!</h1>
    <v-row v-if="login_error">
      <v-col>
        <v-alert type="error">{{ login_error }}</v-alert>
      </v-col>
    </v-row>
    <v-form
        ref="form"
        lazy-validation
        class="mt-5"
    >
      <v-row>
        <v-text-field
            v-model="login_username"
            :counter="10"
            label="Username"
            required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
            v-model="login_password"
            label="Password"
            required
            type="password"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-btn
            color="success"
            class="mr-4"
            @click="send_login_request()"
        >
          Login
        </v-btn>
        <v-btn
            class="mr-4"
            color="warning"
        >
          Reset Form
        </v-btn>
        <v-btn
            color="error"
        >
          Forget Password
        </v-btn>
      </v-row>
    </v-form>

    <v-row class="mt-15 mb-15">
      <v-divider></v-divider>
      <v-row>
        <h2 class="ma-5">Not Registered?</h2>
        <v-btn
            icon
            color="black"
            class="ma-5"
        >
          <v-icon>mdi-apple</v-icon>
        </v-btn>
        <v-btn
            icon
            color="blue"
            class="ma-5"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
            icon
            color="red"
            class="ma-5"
        >
          <v-icon>mdi-google</v-icon>
        </v-btn>
      </v-row>
    </v-row>

    <v-spacer></v-spacer>
    <v-row v-if="reg_error">
      <v-col>
        <v-alert type="error">{{ reg_error }}</v-alert>
      </v-col>
    </v-row>
    <v-form
        ref="form"
        lazy-validation
        class="mt-5"
    >
      <v-text-field
          v-model="reg_username"
          :counter="20"
          label="Username"
          required
      ></v-text-field>

      <v-row>
        <v-col>
          <v-text-field
              v-model="reg_password"
              label="Password"
              type="password"
              required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-model="reg_password_conf"
              label="Confirm"
              type="password"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
          v-model="reg_email"
          label="E-mail"
          required
      ></v-text-field>
      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
      ></v-checkbox>

      <v-row>
        <v-btn
            :disabled="!checkbox"
            color="success"
            class="mr-4"
            @click="send_registration_request()"
        >
          Registration
        </v-btn>
        <v-btn
            color="error"
            class="mr-4"
        >
          Reset Form
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      login_error: '',
      reg_error: '',

      login_username: '',
      login_password: '',

      reg_username: '',
      reg_password: '',
      reg_password_conf: '',
      reg_email: '',

      checkbox: false,
      email: '',
      username: '',
      password: '',
      date_joined: '',

      csrf: ''
    }
  },
  /* eslint-disable */
  methods: {

    send_login_request() {
      this.login_error = ''
      let token = this.$store.state.csrf
      fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": token,
        },
        credentials: "include",
        body: JSON.stringify({username: this.login_username, password: this.login_password}),
      })
          .then(this.isResponseOk)
          .then((data) => {
            this.$store.dispatch('setUserAuthData', {'username': this.login_username, 'auth': true})
          })
          .catch((err) => {
            this.login_error = 'Wrong username or password'
          });
    },

    isResponseOk(response) {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    },

    send_registration_request() {
      const user_data = {
        'username': this.reg_username,
        'password': this.reg_password,
        'email': this.reg_email,
      }

      let token = this.$store.state.csrf

      fetch("http://localhost:8000/api/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": token,
        },
        credentials: "include",
        body: JSON.stringify(user_data),
      })
          .then(this.isResponseOk)
          .then(response => {
            const user_data = response.username
            console.log(response)
            console.log(response.data)
            console.log(user_data)
            this.$store.dispatch('registration', user_data)
          })
          .catch((err) => {
            console.log(err)
            this.reg_error = 'Wrong username or password'
          });
    }
  }
}
</script>

<style scoped>

</style>
