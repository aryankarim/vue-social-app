<template>
  <div>
    <h2>
      Today's Feed
      <i class="fa fa-refresh" style="color:#3677b3" @click="refreshPosts"></i>
    </h2>
  </div>
  <div class="card" :key="post.id" v-for="post in posts">
    {{ post.text }}
    <small class="date">Posted on: 12/12/2021</small>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostList',
  computed: mapGetters(['posts']),
  methods: {
    ...mapActions(['fetchPosts']),
    refreshPosts() {
      this.fetchPosts();
    },
  },
};
</script>

<style scoped></style>
