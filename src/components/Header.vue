<template>
  <div :class="navBarClass">
    <router-link to="/">{{ $t('shared.home') }}</router-link>
    <router-link to="/profile">{{ $t('shared.profile') }}</router-link>
    <router-link to="/signup">{{ $t('shared.signup') }} </router-link>
    <router-link
      @click="logoutUser"
      to="/login"
      :style="[user.loggedIn ? { background: '#ff6060' } : '']"
      >{{
        user.loggedIn ? $t('navBar.signout') : $t('shared.signin')
      }}</router-link
    >
    <Languages />
    <div class="icon" @click="barClick">
      <i class="fa fa-bars fa-2x"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Languages from './Languages.vue';
export default {
  name: 'Header',
  components: {
    Languages,
  },
  data() {
    return {
      navBarClass: 'topnav',
    };
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      if (this.user.loggedIn) {
        this.logout();
      }
    },
    barClick() {
      this.navBarClass =
        this.navBarClass === 'topnav' ? 'topnav responsive' : 'topnav';
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  background-color: #616161;
}
.topnav {
  background-color: #303030;
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
.icon {
  display: none;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav .icon {
    float: right;
    display: block;
    color: white;
    margin: 8px 10px 0 0;
  }
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
