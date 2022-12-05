<template>
  <header>
    <div class="background">
      <div class="container">
        <div class="logo">
          <img
            src="@/img/dark-logo.png"
            alt="dark-logo"
          >
        </div>

        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>

        <ul>
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
  // display: flex;
}

.logo {
  height: 20px;
  img {
    height: 100%;
  }
}

li {
  list-style: none;
}
</style>
