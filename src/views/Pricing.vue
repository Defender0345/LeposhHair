<template>
  <div class="services">
    <div class="devider"></div>
    <!-- Specials banner -->
    <div class="heading red">
      <h2>RETIREE DISCOUNT ON WEDNESDAYS!</h2>
    </div>
    <span>Please note: Prices may vary</span>
    <div>
      <PricingCard />
    </div>
  </div>
</template>

<script>
import PricingCard from '@/components/PricingCard';

export default {
  name: 'Pricing',

  components: {
    PricingCard,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .devider {
    height: 100px;
    width: 100vw;
    color: white;
  }

  span {
    width: 100%;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }

  // Specials banner
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
}
</style>
