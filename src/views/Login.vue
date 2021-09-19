<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>{{ $t('shared.signin') }}</h1>
      <label>{{ $t('shared.email') }}</label>
      <input
        required
        v-model="email"
        type="email"
        placeholder="Email"
        autocomplete
      />
      <label>{{ $t('shared.password') }}</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
        autocomplete
      />
      <h3>{{ feedback }}</h3>
      <hr />
      <input type="submit" :value="$t('shared.signin')" />
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
      feedback: '',
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    login() {
      this.loginUser({
        email: this.email,
        password: this.password,
      }).then((data) => {
        this.feedback = data;
      });
    },
  },
};
</script>

<style scoped>
form {
  margin: 0 15%;
}
input[type='password'],
input[type='email'] {
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
