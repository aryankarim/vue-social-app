<template>
  <h1>Home Page</h1>
  <div class="container">
    <div class="innerContainer">
      <div>
        <h2>Add Post</h2>
        <form class="login" @submit.prevent="addPost">
          <label>Post content</label>
          <input
            required
            v-model="text"
            type="text"
            placeholder="Write whats on your mind..."
            autocomplete
          />
          <div>{{ feedback }}</div>
          <hr />
          <input type="submit" value="Publish Post" />
        </form>
      </div>
    </div>
    <div class="innerContainer">
      <PostList />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostList from '../components/PostList.vue';
export default {
  name: 'Home',
  components: {
    PostList,
  },
  data() {
    return {
      text: '',
      feedback: '',
    };
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['addNewPost', 'fetchPosts']),
    addPost() {
      this.addNewPost({
        text: this.text,
        userId: this.user.userInfo.id,
        username: this.user.userInfo.username,
      });
      this.text = '';
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
.innerContainer {
  float: left;
  width: 50%;
}
.container:after {
  content: '';
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  position: relative;
  margin: 15px 15px;
}

.card .date {
  position: absolute;
  bottom: 2px;
  right: 4px;
  color: #3677b3;
}
.card .username {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #3677b3;
}
@media screen and (max-width: 900px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 500px) {
  .innerContainer {
    width: 100%;
    display: block;
    float: none;
  }
}

input[type='text'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='submit'] {
  width: 100%;
  background-color: #3677b3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #3b5ab1;
}
</style>
