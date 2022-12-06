<template>
  <header>
    <!-- PRIMA PARTE -->
    <div class="super-background">
      <div class="background">
        <div class="container">
          <div class="menu">
            <div class="logo">
              <a href="#">
                <img
                  src="@/img/dark-logo.png"
                  alt="dark-logo"
                ></a>
            </div>

            <ul class="drop-down">
              <li
                v-for="element in arrMenu"
                :key="element.id"
              >
                {{ element.item }}
              </li>
            </ul>

            <ul class="socials">
              <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
              <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
              <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
              <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
            </ul>
          </div>
          <div class="box d-flex">
            <div class="box1">
              <div>I'M WINGMAN</div>
              <h1>Peace On Earth A Wonderful Wish <br> But No Way</h1>
              <div class="sub-title">
                Success isn't overnight. It's when every day you get a little <br>
                better then the day before. It all adds up.
              </div>
              <button>
                Get Started For Free <span class="arrow">&#10141;</span>
              </button>
            </div>
            <div class="box2" />
          </div>
        </div>
      </div>
    </div>

    <!-- SECONDA PARTE -->
    <div class="container2">
      <ul class="ul-flex d-flex justify-content-between">
        <img
          src="@/img/background-pattern-grid-line-06-2.0.png"
          alt=""
        >
        <li
          v-for="element in arrResults"
          :key="element.id"
          class="statistics"
        >
          <div class="no-flex fw-bolder">
            <div class="number pe-5">
              {{ element.number }}
            </div>
            <div class="tiny pe-5">
              {{ element.description }}
            </div>
          </div>

          <img
            src="@/img/background-pattern-grid-line-06-2.0.png"
            alt=""
          >
        </li>
      </ul>

      <div class="box d-flex">
        <div class="box3">
          <div class="fw-bolder">
            ABOUT ME
          </div>
          <h1>How to Be an Alpha <br> Male: The 15 Habits of <br> True Alphas</h1>
        </div>
        <div class="box4">
          <div class="alpha pb-3">
            Want to learn how to be <span class="color">an alpha man</span>?
            How to be more masculine? How to be the man you've always wanted to be?
          </div>
          <div class="goal">
            Your goal is to show the consistency of business, core values, and customer care.
            Punctuality, responsibility, individuality, accuracy, enthusiasm - you have to
            clearly explain how these qualities are applicable to your work.
            And the important thing is you do love what you do.
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      // PRIMA PARTE
      arrMenu: [{
        item: 'Home',
      },
      {
        item: 'Pages',
      },
      {
        item: 'Courses',
      },
      {
        item: 'Features',
      },
      {
        item: 'Blog',
      },
      {
        item: 'Shop',
      },
      ],
      // SECONDA PARTE
      arrResults: [{
        number: '1.926',
        description: 'FINISHED SESSIONS',
      },
      {
        number: '100%',
        description: 'SATISFACTION RATE',
      },
      {
        number: '3092+',
        description: 'ENROLLED LEARNERS',
      },
      {
        number: '200',
        description: 'ONLINE INSTUCTORS',
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
// PRIMA PARTE
.super-background {
  background-image: url('@/img/background-pattern-wavify.png');
  background-color: rgb(247, 247, 253);
}

.background {
  max-width: 1500px;
  margin: auto;
  background-image: url('@/img/home-movation-shape-face.png');
  background-size: 30%;
  background-position: bottom -35px right 195px;;
  background-repeat: no-repeat;
  z-index: 9;
}

.container {
  max-width: 1000px;
  margin: auto;
}

.menu {
  display: flex;
  padding: 1rem 0;
}

.logo {
  height: 19px;
  flex-basis: 10%;
  img {
    height: 100%;
  }
}

li {
  list-style: none;
  align-self: flex-end;
}

.drop-down {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-basis: 80%;
  padding: 0 5.5rem;
  color: rgb(112, 108, 141);
}

.socials {
  display: flex;
  justify-content: end;
  flex-basis: 10%;
  gap: 1rem;
  color: rgb(51, 51, 51);
}

.box1,
.box3,
.box4 {
  width: 50%;
  padding: 4rem 0;
}

h1 {
  line-height: 1.5em;
}

.sub-title {
  color: rgb(119, 113, 108);
  font-size: .9em;
  line-height: 1.9em;
  margin: 1.2rem 0;
}

button {
  padding: .5rem 2.3rem;
  background-color: rgb(32, 173, 150);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: .2rem;
}

button:hover {
  background-color: rgb(63, 58, 100);
}

.arrow {
  padding-left: .4rem;
}

.box2 {
  width: 50%;
  background-image: url(@/img/home-movation-hero-image.png);
  background-size: 78%;
  background-repeat: no-repeat;
  background-position: bottom;
}

// SECONDA PARTE
.container2 {
  max-width: 1000px;
  margin: auto;
  padding: 3.3rem 0;
}

.ul-flex {
  margin: 0 -1.5rem;
  margin-right: 2.7rem;
}

.statistics {
  display: flex;
}

.number {
  font-size: 1.5em;
  color: rgb(29, 158, 138);
}

.tiny {
  font-size: .7em;
  color: black;
}

.box4 {
  padding-top: 6rem;
  width: 50%;
}

.alpha {
  line-height: 1.7em;
  font-weight: 600;
  .color {
    color: rgb(29, 158, 138);
  }
}

.goal {
  color: rgb(119, 113, 108);
  font-size: .9em;
}
</style>
