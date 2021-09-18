<template>
  <small class="username">{{ post.username }}</small>
  {{ post.text }}
  <small class="date">{{ post.time }}</small>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      text: String,
      time: String,
    },
  },
};
</script>

<style></style>
