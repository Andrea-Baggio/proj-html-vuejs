<template>
  <div class="body">
    <HeaderPageVue />
    <MainPageVue />
    <FooterPageVue />
  </div>
</template>

<script>
import HeaderPageVue from './components/HeaderPage.vue';
import MainPageVue from './components/MainPage.vue';
import FooterPageVue from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPageVue,
    MainPageVue,
    FooterPageVue,
  },

  data() {
    return {

    };
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import "~bootstrap/scss/bootstrap";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body{
  font-family: 'Playfair Display', serif;
}

li {
  list-style: none;
}
</style>
