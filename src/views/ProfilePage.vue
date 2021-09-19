<template>
  <h1>{{ $t('shared.profile') }}</h1>
  <div class="card">
    <h2>{{ $t('profile.personalInfo') }}</h2>
    <h3>{{ $t('shared.username') }}: {{ user.userInfo.username }}</h3>
    <h3>{{ $t('shared.email') }}: {{ user.userInfo.email }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfilePage',
  computed: mapGetters(['user']),
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  border-radius: 5%;
}
</style>
