<template>
  <Header />
  {{ user }}
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['verifyLogin']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
