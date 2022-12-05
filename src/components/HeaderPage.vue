<template>
  <header>
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
          <div class="box">
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
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  font-size: .8em;
}

.super-background {
  background-image: url('@/img/background-pattern-wavify.png');
  background-color: rgb(247, 247, 253);
}

.background {
  max-width: 1500px;
  margin: auto;
  background-image: url('@/img/home-movation-shape-face.png');
  background-size: 30%;
  background-position: bottom -25px right 180px;;
  background-repeat: no-repeat;
  z-index: 9;
}

.container {
  max-width: 900px;
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
  li {
  font-size: 1.2em;
  }
}

.box {
  display: flex;
}

.box1 {
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
