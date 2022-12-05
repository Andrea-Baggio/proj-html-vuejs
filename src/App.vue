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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
