<template>
  <div class="topnav">
    <router-link @click="logoutUser" to="/login">{{
      user.loggedIn ? 'Logout' : 'Login'
    }}</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Header',
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      if (this.user.loggedIn) {
        this.logout();
      }
    },
  },
};
</script>

<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
