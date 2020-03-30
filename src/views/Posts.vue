<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p v-if="isLoading">Loading...</p>
    <div v-else class="row">
      <post-card v-for="(post, index) in posts" :key="index" :post="post" @deletePost="deletePost" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PostCard from "../components/PostCard";

export default {
  name: "About",
  components: {
    PostCard
  },
  data: () => {
    return {
      title: "HTTP Client",
      isLoading: true,
      posts: []
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        this.posts = data;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id != id);
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>
