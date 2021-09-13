<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>Email</label>
      <input
        required
        v-model="email"
        type="text"
        placeholder="Email"
        autocomplete
      />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
        autocomplete
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['verifyLogin']),
    login() {
      this.verifyLogin({ email: this.email, password: this.password });
    },
  },
};
</script>

<style></style>
