<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    ...mapActions(['verifyLogin']),
  },
  created() {
    this.verifyLogin().then((logged) => {
      if (logged) {
        this.$router.push('/');
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343435;
}
</style>
