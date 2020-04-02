import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import token from "./modules/token";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   token: ""
  // },
  // getters: {
  //   authHeader: state => `Bearer ${state.token}`
  // },
  // mutations: {
  //   setToken(state, data) {
  //     state.token = data;
  //   }
  // },
  // actions: {
  //   async fetchToken({ commit, getters }) {
  //     try {
  //       const result = await axios.get("http://localhost:3000/token");

  //       commit("setToken", result.data.data);

  //       console.log(getters.authHeader);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // },
  modules: {
    token
  }
});
