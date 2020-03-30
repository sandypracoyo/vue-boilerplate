<template>
  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card">
      <div class="card-header">{{ post.title }}</div>
      <div class="card-body">
        <p class="card-text text-justify">{{ post.body }}</p>
        <button class="btn btn-danger float-right my-2" @click.prevent="deletePost(post.id)">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostCard",
  props: ["post"],
  methods: {
    deletePost(id) {
      this.$emit("deletePost", id);
    }
  }
};
</script>