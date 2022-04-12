<template>
  <section>
    <div class="heading">
      <h2>Meet Juliet! Our Beautician</h2>
      <p>
        Specializing in: Manicure &amp; Pedicures, Gel Nails, Massages, Waxing,
        Facials(Kalahari), Individual Lash Extensions
      </p>
      <p>With 9 years experience you are in professional hands.</p>
    </div>
    <div class="pictures">
      <div v-for="img in imgs" :key="img">
        <img :src="img" alt="Juliet's previous works" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Juliet',

  data() {
    return {
      imgs: [
        require('@/assets/Images/juliet/pic0.webp'),
        require('@/assets/Images/juliet/pic1.webp'),
        require('@/assets/Images/juliet/pic2.webp'),
        require('@/assets/Images/juliet/pic3.webp'),
        require('@/assets/Images/juliet/pic4.webp'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

section {
  padding: 1.5em;
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
      text-align: center;
      font-family: 'Open Sans', sans-serif;
    }

    p {
      text-align: center;
      font-family: 'Open Sans', sans-serif;
    }
  }
  .pictures {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    gap: 10px;
    img {
      width: 100%;
      height: 300px;

      &:hover {
        box-shadow: 5px 5px 5px $primary;
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 768px) {
  .pictures {
    img {
      flex-direction: column;
    }
  }
}

@media (max-width: 1024px) {
  .pictures {
    img {
      flex-wrap: wrap;
    }
  }
}
</style>
