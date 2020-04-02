<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState("token", ["token"]),
    ...mapGetters("token", ["authHeader"])
  },
  methods: {
    ...mapMutations("token", ["setToken"]),
    ...mapActions("token", ["fetchToken"])
  },
  mounted() {
    console.log(this.authHeader);
  }
};
</script>
