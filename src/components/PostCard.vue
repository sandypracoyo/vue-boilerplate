<template>
  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card">
      <div class="card-header">{{ post.title }}</div>
      <div class="card-body">
        <p class="card-text text-justify">{{ post.body }}</p>
        <div class="float-right">
          <router-link v-show="!isDetail" :to="`posts/${post.id}`" class="btn btn-info">See more</router-link>
          <button
            v-show="!isDetail"
            class="btn btn-primary mx-2"
            @click.prevent="detailPost(post.id)"
          >Detail</button>
          <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostCard",
  props: ["post", "isDetail"],
  methods: {
    deletePost(id) {
      this.$emit("deletePost", id);
    },
    detailPost(id) {
      this.$emit("detailPost", id);
    }
  }
};
</script>