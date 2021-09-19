<template>
  <div class="dropdown">
    <div class="dropbtn">{{ $t('languages.languages') }}</div>
    <div class="dropdown-content">
      <div @click="changeLanguage('en')">{{ $t('languages.english') }}</div>
      <div @click="changeLanguage('kr')">{{ $t('languages.kurdish') }}</div>
      <div @click="changeLanguage('ar')">{{ $t('languages.arabic') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style scoped>
.dropbtn {
  background-color: #3677b3;
  color: white;
  padding: 15px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content div {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content div:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3b5ab1;
}
</style>
