<template>
  <main>
    <div class="container2 mx-auto">
      <div class="box d-flex">
        <div class="box1 w-50">
          VIDEO
          <!-- TODO:video youtube -->
        </div>
        <div class="box2 w-50">
          hello
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.background {
  max-width: 1500px;
}

.container2 {
  max-width: 1000px;
}

.box1,
.box2 {
  border: 2px solid blue;
}
</style>
