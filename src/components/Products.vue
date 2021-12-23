<template>
  <section class="products">
    <h2>QUALITY PRODUCTS</h2>
    <p>
      Leposh Hair Design only uses the best quality products to reflect your
      individuality and personal taste.
    </p>
    <div class="prod-imgs">
      <div v-for="product in products" :key="product">
        <img :src="product" alt="different top quality products we use" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',

  data() {
    return {
      products: [
        require('@/assets/Images/brands/behair.webp'),
        require('@/assets/Images/brands/Loreal.webp'),
        require('@/assets/Images/brands/redken.webp'),
        require('@/assets/Images/brands/schwarzkop.webp'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.products {
  text-align: center;
  margin: 1em 0;

  h2 {
    font-size: 3em;
    font-weight: bold;
  }

  p {
    letter-spacing: 1.2px;
  }

  .prod-imgs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    img {
      width: 300px;
      height: 250px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 768px) {
  .products {
    .prod-imgs {
      flex-direction: column;
    }
  }
}

@media (max-width: 1024px) {
  .products {
    .prod-imgs {
      flex-wrap: wrap;
    }
  }
}
</style>
