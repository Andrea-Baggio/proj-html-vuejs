<template>
  <header>
    <div class="background">
      <div class="container">
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
            :key="element"
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
.background {
  max-width: 1500px;
  margin: auto;
}

.container {
  max-width: 900px;
  margin: auto;
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
  padding: 0 5rem;
  color: rgb(112, 108, 141);
}

.socials {
  display: flex;
  justify-content: end;
  flex-basis: 10%;
  gap: 1rem;
  color: rgb(51, 51, 51);
}
</style>
