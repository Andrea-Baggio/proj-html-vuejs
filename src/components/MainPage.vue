<template>
  <main>
    <div class="container2 mx-auto">
      <!-- PRIMA PARTE -->
      <div class="box d-flex">
        <div class="box1">
          VIDEO
          <!-- TODO:video youtube -->
          <!-- quando fai questa parte ricorda che puoi aggiustare le box con i padding -->

          <!-- <title id="video">
            <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameborder="0"
            >CIAO</iframe>
          </title> -->
        </div>
        <div class="box2">
          <div class="py-5">
            "Every morning you have two <br> choices: continue to sleep with <br>
            your dreams, or wake up and <br> chase them."
          </div>
          <div class="founders-block row d-flex flex-column gy-1 pb-5">
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
      <div class="begin text-center">
        BEGIN YOUR JOURNEY AT MAXCOACH
      </div>
      <h1 class="text-center">
        Latest <span class="color">Online Courses</span>
      </h1>
      <ul class="d-flex justify-content-around py-5">
        <li
          v-for="element in arrPackages"
          :key="element.id"
          class="packages"
        >
          <img
            :src="element.img"
            alt=""
            class="picture"
          >
          <div class="package-list">
            <div class="price color fw-bold">
              {{ element.price }}
            </div>
            <div class="summa fw-bold">
              {{ element.summa }}
            </div>
            <div class="info">
              <span>
                <font-awesome-icon
                  class="lessons"
                  icon="fa-regular fa-file-lines"
                />{{ element.nLessons }}
              </span>
              <span>
                <font-awesome-icon
                  class="students"
                  icon="fa-regular fa-user"
                />{{ element.nStudents }}
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="text-center">
        <button>
          View all courses <span class="arrow">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </span>
        </button>
      </div>

      <!-- TERZA PARTE -->
    </div>
  </main>
</template>

<script>
import img1 from '@/img/motivation-course-06-480x298.jpg';
import img2 from '@/img/motivation-course-05-480x298.jpg';
import img3 from '@/img/motivation-course-04-480x298.jpg';
import img4 from '@/img/motivation-course-03-480x298.jpg';
import img5 from '@/img/motivation-course-02-480x298.jpg';
import img6 from '@/img/motivation-course-01-480x298.jpg';

export default {
  name: 'MainPage',
  data() {
    return {
      arrPackages: [{
        img: img1,
        price: '$30.00',
        summa: 'How to be Successful: Create A Growth Mindset For Success',
        nLessons: '3 Lessons',
        nStudents: '50 Students',
      },
      {
        img: img2,
        price: '$30.00',
        summa: 'How to Build Confidence in Your Abilities',
        nLessons: '1 Lesson',
        nStudents: '50 Students',
      },
      {
        img: img3,
        price: '$20.00',
        summa: 'Productivity Machine - Focus in a Distracted World',
        nLessons: '5 Lessons',
        nStudents: '50 Students',
      },
      {
        img: img4,
        price: '$20.00',
        summa: 'Effective Time Management Mastery - Complete Guide',
        nLessons: '18 Lessons',
        nStudents: '50 Students',
      },
      {
        img: img5,
        price: '$25.99',
        summa: 'Body Language Secrets for Entrepreneurs',
        nLessons: '19 Lessons',
        nStudents: '50 Students',
      },
      {
        img: img6,
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

.color {
  color: rgb(29, 158, 138);
}

.background {
  max-width: 1500px;
}

.container2 {
  max-width: 1000px;
  margin: auto;
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

.video {
  height: 200px;
  width: 200px;
  border: 2px solid green;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
}

.begin {
  padding-top: 4.5rem;
  color: rgb(119, 113, 108);
}

.picture {
  height: 154px;
  width: 236px;
  z-index: -99;
}

.packages:hover {
  cursor: pointer;
  transition: 1.2s;
  transform: scale(1.1);
  box-shadow: 2px 2px 10px 5px #ececec;
}

.package-list {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.price,
.summa {
  padding: 0 1rem;
}

.summa {
  color: rgb(70, 66, 106);
  word-wrap: break-word;
  max-width: 236px;
}

.info {
  padding: 0 1rem;
  display: flex;
  gap: .9rem;
  font-family: 'Roboto', sans-serif;
  font-size: .8em;
  color: rgb(119, 113, 108);
}

.lessons,
.students {
  margin-right: .3em;
  font-size: .9em;
}

button {
  padding: .5rem 2.3rem;
  margin-top: .5rem;
  margin-bottom: 4.5rem;
  background-color: rgb(32, 173, 150);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: .2rem;
}

button:hover {
  background-color: rgb(63, 58, 100);
  transition: .6s;
}

.arrow {
  padding-left: .4rem;
}

// TERZA PARTE
</style>
