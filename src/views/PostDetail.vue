<template>
  <div class="container">
    <p v-if="isLoading">Loading...</p>
    <post-card v-else :post="post" :isDetail="true" />
  </div>
</template>
<script>
import axios from "axios";
import PostCard from "../components/PostCard";

export default {
  name: "PostDetail",
  components: {
    PostCard
  },
  data: () => {
    return {
      post: undefined,
      isLoading: true
    };
  },
  methods: {
    async fetchPost(id) {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        this.post = data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPost(this.$route.params.id);
  }
};
</script>
