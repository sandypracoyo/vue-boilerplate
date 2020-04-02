import axios from "axios";

const state = {
  token: ""
};

const mutations = {
  setToken(state, data) {
    state.token = data;
  }
};

const getters = {
  authHeader: state => `Bearer ${state.token}`
};

const actions = {
  async fetchToken({ commit, getters }) {
    try {
      const result = await axios.get("http://localhost:3000/token");

      commit("setToken", result.data.data);

      console.log(getters.authHeader);
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
