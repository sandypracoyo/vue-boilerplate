<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button class="btn btn-success" @click.prevent="changeTitle">Change title</button>
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
