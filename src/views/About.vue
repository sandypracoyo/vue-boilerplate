<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <div class="mt-4">
      <button class="btn btn-primary mr-2" @click.prevent="changeTitle">Change title</button>
      <button class="btn btn-success" @click.prevent="saveOrRemoveToken">Token</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "About",
  data: () => {
    return {
      title: "Vue Life Cycle"
    };
  },
  computed: {
    ...mapState("token", ["token"]),
    ...mapGetters("token", ["authHeader"])
  },
  methods: {
    ...mapMutations("token", ["setToken"]),
    ...mapActions("token", ["fetchToken"]),
    showLog(cycle) {
      console.log(cycle);
    },
    changeTitle() {
      if (this.title == "Vue Life Cycle") {
        this.title = "Change Vue State";
      } else {
        this.title = "Vue Life Cycle";
      }
    },
    saveOrRemoveToken() {
      if (localStorage.getItem("token")) {
        localStorage.setItem("token", "");
      } else {
        const token = [];
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXZYabcedfghijklmnopqrstuvwxzy1234567890";

        for (let index = 0; index < 64; index++) {
          token.push(letters.charAt(Math.floor(Math.random() * letters.length)));
        }

        localStorage.setItem("token", token.join(""));

        console.log("Token", localStorage.getItem("token"));
      }
    }
  },
  async mounted() {
    this.showLog("mounted");
    await this.fetchToken();
    console.log(this.authHeader);
  }
};
</script>
