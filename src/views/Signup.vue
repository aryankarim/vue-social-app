<template>
  <div>
    <h1>{{ $t('shared.signup') }}</h1>
    <form @submit.prevent="signup">
      <div>
        <label for="username">{{ $t('shared.username') }}</label>
        <input
          type="text"
          name="username"
          v-model="username"
          placeholder="username"
          autocomplete
        />
      </div>
      <div>
        <label for="email">{{ $t('shared.email') }}</label>
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="email"
          autocomplete
        />
      </div>
      <div>
        <label for="password">{{ $t('shared.password') }}</label>
        <input
          name="password"
          v-model="password"
          placeholder="password"
          type="password"
          autocomplete
        />
      </div>
      <h3>{{ feedback }}</h3>

      <hr />
      <input type="submit" :value="$t('shared.signup')" />
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
      feedback: '',
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
      this.register(userData).then((data) => {
        this.feedback = data;
      });

      this.username = '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
form {
  margin: 0 15%;
}
input[type='text'],
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
