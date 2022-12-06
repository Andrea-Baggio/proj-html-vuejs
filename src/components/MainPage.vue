<template>
  <main>
    <div class="container2 mx-auto">
      <div class="box d-flex">
        <div class="box1">
          VIDEO
          <!-- TODO:video youtube -->
          <!-- quando fai questa parte ricorda che puoi aggiustare le box con i padding -->
        </div>
        <div class="box2">
          <div class="py-5">
            "Every morning you have two <br> choices: continue to sleep with <br>
            your dreams, or wake up and <br> chase them."
          </div>
          <div class="founders-block row d-flex flex-column gy-2">
            <div>
              <img
                src="@/img/home-movation-shape-01.png"
                alt=""
              >
            </div>
            <div class="kaixa fw-bolder">
              Kaixa Stark
            </div>

            <div class="name">
              WINGMAN
            </div>
          </div>
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

.box1 {
  width: 65%;
}

.box2 {
  width: 35%;
  font-size: 1.1em;
}

// .founders-block {
//   display: flex;
//   flex-direction: column;
// }

.kaixa {
  color: rgb(66, 60, 101);
}

.name {
  font-size: .6em;
}
</style>
