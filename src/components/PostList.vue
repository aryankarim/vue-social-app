<template>
  <div>
    <h2>
      {{ $t('home.todayPosts') }}
      <i class="fa fa-refresh" style="color:#3677b3" @click="refreshPosts"></i>
    </h2>
  </div>
  <div class="card" :key="post.id" v-for="post in posts">
    <PostItem :post="post" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostItem from './PostItem.vue';
export default {
  name: 'PostList',
  components: {
    PostItem,
  },
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
