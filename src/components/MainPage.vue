<template>
  <main>
    <div class="container2 mx-auto">
      <!-- PRIMA PARTE -->
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
      <!-- SECONDA PARTE -->
      <ul class="py-5">
        <li
          v-for="element in arrPackages"
          :key="element.id"
        >
          {{ element.price }}
          <img
            src="element.img"
            alt=""
            class="picture"
          >
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      arrPackages: [{
        img: '@/img/motivation-course-06-480x298.jpg',
        price: '$30.00',
        summa: 'How to be Successful: Create A Growth Mindset For Success',
        nLessons: '3 Lessons',
        nStudents: '50 Students',
      },
      {
        price: '$30.00',
        summa: 'How to Build Confidence in Your Abilities',
        nLessons: '1 Lesson',
        nStudents: '50 Students',
      },
      {
        price: '$20.00',
        summa: 'Productivity Machine - Focus in a Distracted World',
        nLessons: '5 Lessons',
        nStudents: '50 Students',
      },
      {
        price: '$20.00',
        summa: 'Effective Time Management Mastery - Complete Guide',
        nLessons: '18 Lessons',
        nStudents: '50 Students',
      },
      {
        price: '$25.99',
        summa: 'Body Language Secrets for Entrepreneurs',
        nLessons: '19 Lessons',
        nStudents: '50 Students',
      },
      {
        price: '$19.99',
        summa: 'Management Skills: The Science of Leadership',
        nLessons: '17 Lessons',
        nStudents: '50 Students',
      }],
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

.kaixa {
  color: rgb(66, 60, 101);
}

.name {
  font-size: .6em;
}

// SECONDA PARTE

ul {
  border: 2px solid red;
}

.picture {
  height: 100px;
  width: 100px;
}

</style>
