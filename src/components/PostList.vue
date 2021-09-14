<template>
  <div><h2>Today's Feed</h2></div>
  <div class="row">
    <div class="column">
      <div class="card" :key="post.id" v-for="post in posts">
        {{ post.text }}
        <small class="date">Posted on: 12/12/2021</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PostList',
  computed: mapGetters(['posts']),
};
</script>

<style></style>
