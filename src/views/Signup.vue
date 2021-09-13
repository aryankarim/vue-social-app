<template>
  <div id="app">
    <form @submit.prevent="signup">
      <div>
        <label for="username">username</label>
        <input
          name="username"
          v-model="username"
          placeholder="username"
          autocomplete
        />
      </div>
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email" autocomplete />
      </div>
      <div>
        <label for="password">password</label>
        <input
          name="password"
          v-model="password"
          placeholder="password"
          type="password"
          autocomplete
        />
      </div>

      <input type="submit" value="register" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['register']),
    async signup() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.register(userData);
      this.username = '';
      this.email = '';
      this.password = '';
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
