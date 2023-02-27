import {createStore} from 'vuex'
import router from "@/router";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    csrf: "",
    username: "",
    password: "",
    error: "",
    isAuthenticated: false,
  },
  getters: {
    getCurrentUser: state => state.username,
    getUserAuth: state => state.username !== null,

    getCsrfToken: state => state.csrf
  },
  mutations: {
    loginUser(currentState, user) {
      currentState.username = user
      currentState.isAuthenticated = true
    },

    logoutUser(currentState) {
      currentState.username = null
      currentState.isAuthenticated = false
    },

    setIsAuthenticated(currentState, auth) {
      currentState.isAuthenticated = auth
    }
    ,
    setCsrf(currentState, csrf) {
      currentState.csrf = csrf
    },

    setAuthData(currentState, data) {
      currentState.isAuthenticated = data.auth
      currentState.username = data.username
    }

  },
  actions: {

    registration(context, user) {
      context.commit('loginUser', user)
      router.push('/account')
    },
    login(context, user) {
      context.commit('loginUser', user)
      router.push('/account')
    },
    logout(context) {
      context.commit('logoutUser')
      router.push('/')
    },

    setAuth(context, data) {
      context.commit("setIsAuthenticated", data)
    },

    setCSRF(context, data) {
      context.commit("setCsrf", data)
    },

    setUserAuthData(context, authData) {
      context.commit("setAuthData", authData)
      router.push('/account')
    }

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
