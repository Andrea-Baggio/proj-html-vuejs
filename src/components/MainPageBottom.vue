<template>
  <div>
    <div class="container2">
      <ul class="sponsors-container d-flex justify-content-between">
        <li
          v-for="element in arrSponsors"
          :key="element.id"
        >
          <img
            :src="element.img"
            alt=""
          >
        </li>
      </ul>
    </div>
    <div class="larger-container">
      <div class="box d-flex">
        <div class="background">
          <div class="box1">
            scrivi...
          </div>
        </div>
        <div class="box2" />
      </div>
    </div>
    <div class="container3">
      <div>BLOG UPDATED</div>
      <h1 class="pb-5">
        Interesting <span class="color">articles updated</span> daily
      </h1>
      <ul class="articles-container d-flex justify-content-between">
        <li
          v-for="element in arrArticles"
          :key="element.id"
        >
          <div class="image-container">
            <img
              :src="element.img"
              alt=""
            >
          </div>
          <div class="date">
            <font-awesome-icon icon="fa-regular fa-calendar" />
            {{ element.date }}
          </div>
          <h5 class="title">
            {{ element.title }}
          </h5>
          <div class="description">
            {{ element.description }}
          </div>
        </li>
      </ul>
      <div class="all color fw-bold">
        VIEW ALL POSTS
      </div>
    </div>
  </div>
</template>

<script>
// PRIMO ARRAY
import imgSp1 from '@/img/client-logo-05-primary.png';
import imgSp2 from '@/img/client-logo-06-primary.png';
import imgSp3 from '@/img/client-logo-07-primary.png';
import imgSp4 from '@/img/client-logo-04-primary.png';
import imgSp5 from '@/img/client-logo-03-primary.png';
import imgSp6 from '@/img/client-logo-02-primary.png';

//  SECONDO ARRAY
import img1 from '@/img/motivation-blog-04-480x325.jpg';
import img2 from '@/img/motivation-blog-03-480x325.jpg';
import img3 from '@/img/motivation-blog-02-480x325.jpg';
import img4 from '@/img/motivation-blog-01-480x325.jpg';

export default {
  name: 'MainPageBottomVue',
  data() {
    return {
      arrSponsors: [{
        img: imgSp1,
      },
      {
        img: imgSp2,
      },
      {
        img: imgSp3,
      },
      {
        img: imgSp4,
      },
      {
        img: imgSp5,
      },
      {
        img: imgSp6,
      }],

      arrArticles: [{
        img: img1,
        date: ' May 13, 2020',
        title: 'How to Stay True to Your Personal Brand',
        description: 'When it comes to your business or career, you want …',
      },
      {
        img: img2,
        date: ' May 13, 2020',
        title: '5 Vital Lessons in 5 Years of Freelancing',
        description: 'Being self-employed and working from home, it’s easy to get …',
      },
      {
        img: img3,
        date: ' May 13, 2020',
        title: '11 Super Useful Tips for Small-Business Owners',
        description: 'Being a small-business owner poses a ton of challenges. We …',
      },
      {
        img: img4,
        date: ' May 13, 2020',
        title: 'How to Give Yourself Grace to Start Again',
        description: 'Forgive yourself for bad habits you may have started or …',
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
.date {
  color: rgb(119, 113, 108);
  font-size: .8em;
  font-family: 'Roboto', sans-serif;
}

.color {
  color: rgb(29, 158, 138);
}

.container2,
.container3 {
  max-width: 1000px;
  margin: auto;
}

.larger-container {
  max-width: 1500px;
  margin: auto;
}

.sponsors-container {
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6.5rem;
  margin-left: -2rem;
}

.background {
  background-color: rgb(243, 243, 250);
}

.box {
  height: 465px;
}

.box > * {
  width: 50%;
}

.box1 {
  background-image: url('@/img/background-pattern-wavify.png');
  height: 100%;
}

.box2 {
  background-image: url('@/img/home-movation-testimonial-image.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}

.container3 {
  margin-top: 9rem;
}

.articles-container {
  margin-left: -2rem;
  li {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  li:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.1);
  }
}

.image-container {
  height: 150px;
  img {
    height: 100%;
  }
}

.description {
  font-size: .9em;
  color: rgb(119, 113, 108);
}

.description,
.title {
  width: 220px;
}

.title:hover {
  cursor: pointer;
  color: rgb(29, 158, 138);
}

.all {
  border-bottom: 2px solid rgb(29, 158, 138);
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 135px;
}

.all:hover {
  cursor: pointer;
  color: rgb(38, 31, 45);
  border-bottom: 2px solid rgb(38, 31, 45);
}

</style>
