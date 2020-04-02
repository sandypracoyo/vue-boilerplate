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
export default {
  name: "About",
  data: () => {
    return {
      title: "Vue Life Cycle"
    };
  },
  methods: {
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
        const letters =
          "ABCDEFGHIJKLMNOPQRSTUVWXZYabcedfghijklmnopqrstuvwxzy1234567890";

        for (let index = 0; index < 16; index++) {
          token.push(
            letters.charAt(Math.floor(Math.random() * letters.length))
          );
        }

        localStorage.setItem("token", token.join(""));

        console.log(localStorage.getItem("token"));
      }
    }
  },
  beforeDestroy() {
    this.showLog("beforeDestroy");
  },
  destroyed() {
    this.showLog("destroyed");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    this.showLog("created");
  },
  beforeUpdate() {
    this.showLog("beforeUpdate");
  },
  updated() {
    this.showLog("updated");
  },
  beforeMount() {
    this.showLog("beforeMount");
  },
  mounted() {
    this.showLog("mounted");
  }
};
</script>
