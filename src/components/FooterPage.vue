<template>
  <footer>
    <div class="background">
      <div class="container2">
        <div class="container1 d-flex justify-content-evenly">
          <ul>
            <div class="text-white fw-bold">
              Address
            </div>
            <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
            <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
            <li>support@maxcoach.com</li>
          </ul>

          <div class="small-container d-flex">
            <ul>
              <div class="text-white fw-bold">
                Explore
              </div>
              <li>Start here</li>
              <li>Blog</li>
              <li>About us</li>
            </ul>
            <ul class="down">
              <li>Success story</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div>

          <ul>
            <div class="text-white fw-bold">
              Information
            </div>
            <li>Membership</li>
            <li>Purchase guide</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
          </ul>
        </div>
        <ul class="socials d-flex">
          <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
          <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
          <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
          <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
        </ul>
      </div>
      <button class="click">
        <a href="#top">
          <font-awesome-icon icon="fa-solid fa-arrow-up" />
          <span class="d-none">ciao</span>
        </a>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>

<style lang="scss" scoped>
.background {
  max-width: 1500px;
  margin: auto;
  background-color: rgb(23, 22, 33);
  color: rgb(171, 171, 171);
  font-family: 'Roboto', sans-serif;
  position: relative;
}

.container2 {
  border: 2px solid rgb(23, 22, 33);
  width: 1100px;
  margin: auto;
  line-height: 2em;
  padding-top: 2rem;
}

.socials {
  gap: 1.5rem;
  font-size: 1.5em;
  margin-left: 7rem;
  li:hover {
    cursor: pointer;
  color: white;
}
}

li {
  font-size: .8em;
}

li:hover {
  cursor: pointer;
  color: rgb(29, 158, 138);
}

.down {
  margin-top: 2rem;
}

.click {
  border-radius: 50%;
  padding: 0;
  position: absolute;
  bottom: 3rem;
  right: 2rem;
  a {
    text-decoration: none;
    color: white;
    background-color: rgb(32, 173, 150);
    padding: 1rem 1.3rem;
    border-radius: 50%;
  }
}

.click:hover {
  cursor: pointer;
  background-color: rgb(32, 173, 150);
}
</style>
