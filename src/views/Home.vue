<template>
  <div>
    <!-- Hero Section -->
    <div class="hero" :style="cssProps">
      <div class="content">
        <h1>
          <span class="text-primary"><i class="fas fa-cut"></i>Le Posh</span>
          Hair Design
        </h1>
        <p>Contact us now to make an appointment</p>
        <a
          href="#contact-us"
          class="btn"
          aria-label="Takes you to contact section"
          ><i class="fas fa-chevron-right"></i>Contact Us</a
        >
      </div>
    </div>
    <!-- Specials banner -->
    <div class="heading red">
      <h2>RETIREE DISCOUNT ON WEDNESDAYS!</h2>
    </div>

    <!-- Services Section -->
    <section class="services">
      <div class="flex-items">
        <div>
          <i class="fas fa-cut main-icons"></i>
          <div>
            <h3>HAIR DESIGN</h3>
            <p>
              Cutting, colouring, Brazilian, Botox, Perms, Highlights, ombrė &
              balayage.
            </p>
          </div>
        </div>
        <div>
          <i class="fas fa-hot-tub main-icons"></i>
          <div>
            <h3>BEAUTICIAN</h3>
            <p>Qualified beautician for all your relaxing needs!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Working Hours Section -->
    <section class="hours">
      <div class="heading">
        <h2>WHEN ARE WE OPEN?</h2>
      </div>
      <div class="bg-primary">
        <TimeCard />
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about-us" class="about-us">
      <div class="column">
        <div class="text">
          <h2>About Us</h2>
          <p>
            LePosh Hair Design loves providing all kinds of modern and
            innovative services in haircare and personal grooming. We love to
            offer a friendly yet proffesional enviroment where everyone feels at
            home. We strive to give every customer a personal experience which
            reflects their own personality!
          </p>
        </div>
        <carousel @next="next" @prev="prev" class="carousel">
          <carousel-slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
            class="carousel-slide"
          >
            <img :src="slide" alt="Images of Previous Hair done" />
          </carousel-slide>
        </carousel>
      </div>
    </section>

    <!-- Products Section -->
    <Products />

    <!-- Teams -->
    <!-- <Team /> -->

    <!-- Contact Us Section -->
    <ContactUs id="contact-us" />
  </div>
</template>

<script>
import TimeCard from '@/components/TimeCard.vue';
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';
import Products from '@/components/Products.vue';
// import Team from '@/components/Team.vue';
import ContactUs from '@/components/ContactUs.vue';

export default {
  name: 'Home',
  components: {
    TimeCard,
    Carousel,
    CarouselSlide,
    Products,
    // Team,
    ContactUs,
  },

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Images/showcase.webp')})`,
      },
      // Carousel Start
      slides: [
        require('@/assets/Images/cases/cases1.webp'),
        require('@/assets/Images/cases/cases2.webp'),
        require('@/assets/Images/cases/cases3.webp'),
        require('@/assets/Images/cases/cases4.webp'),
        require('@/assets/Images/cases/cases5.webp'),
        require('@/assets/Images/cases/cases6.webp'),
        require('@/assets/Images/cases/cases7.webp'),
        require('@/assets/Images/cases/cases8.webp'),
        require('@/assets/Images/cases/cases9.webp'),
        require('@/assets/Images/cases/cases10.webp'),
        require('@/assets/Images/cases/cases11.webp'),
        require('@/assets/Images/cases/cases12.webp'),
        require('@/assets/Images/cases/cases13.webp'),
        require('@/assets/Images/cases/cases14.webp'),
      ],
      visibleSlide: 0,
      direction: 'left',
      // Carousel End
    };
  },

  computed: {
    slidesLength() {
      return this.slides.length;
    },
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLength - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = 'left';
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = 'right';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

// Hero Section
.hero {
  height: 100vh;
  position: relative;
  color: white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 20px;

    h1 {
      font-size: 55px;

      .text-primary {
        color: #ba281e;
      }
    }

    p {
      font-size: 20px;
      max-width: 600px;
      margin: 20px 0 30px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  * {
    z-index: 10;
  }
}

@media (max-width: 768px) {
  .hero {
    background: no-repeat center center/cover;
  }
}

// Services Section
.services {
  background: white;
  color: black;

  .flex-items {
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: 100%;
    padding: 2em;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .main-icons {
        background-color: white;
        color: black;
        font-size: 50px;
      }
    }
  }
}

@media (max-width: 768px) {
  .services {
    .flex-items {
      flex-direction: column;

      div {
        padding: 10px;
      }
    }
  }
}

.red {
  background: $primary !important;
}
.heading {
  text-align: center;
  align-items: center;
  background: $accent;
  color: white;
  padding: 2em;

  h2 {
    letter-spacing: 1px;
  }
}

// About Us section
.about-us {
  .column {
    display: flex;
    height: 400px;
    flex-grow: 1;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: right;
      width: 50%;
      text-align: right;
      padding: 2em;
      background-color: $accent;
      color: white;

      h2 {
        font-size: 2em;
        font-weight: bold;
        margin-top: 2em;
        margin-bottom: 2em;
      }

      p {
        line-height: 2em;
        letter-spacing: 1.5px;
        margin: 0;
      }
    }

    .carousel {
      .carousel-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about-us {
    .column {
      flex-direction: column;
      height: 100vh;
      .text {
        width: 100%;
        height: 100%;
        text-align: center;
        justify-content: center;
        padding: 0.5em;
        h2 {
          font-size: 2em;
          font-weight: bold;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
        p {
          line-height: 2em;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .about-us {
    .column {
      .text {
        h2 {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
