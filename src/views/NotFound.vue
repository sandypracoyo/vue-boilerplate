<template>
  <div class="container">
    <img src="../assets/logo.png" :alt="alt" />
    <h1 class="text-danger">{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data: () => {
    return {
      title: "404: Oops page not found",
      alt: "This is vue logo"
    };
  }
};
</script>
