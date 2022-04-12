<template>
  <div class="cards">
    <div class="card">
      <span class="header">Kids / Students</span>
      <div class="container">
        <div class="services">
          <p>Baby / Toddler</p>
          <p>Girls Primary School Cut</p>
          <p>Cut & Blow-dry</p>
          <p>Girls Highschool Cut</p>
          <p>Cut & Blow-dry</p>
          <p>Boys Primary Cut</p>
          <p>Boys High School / Students</p>
        </div>
        <div class="prices">
          <p>R100</p>
          <p>R130</p>
          <p>R210</p>
          <p>R160</p>
          <p>R240</p>
          <p>R110</p>
          <p>R120</p>
        </div>
      </div>
    </div>

    <div class="card">
      <span class="header">Gents</span>
      <div class="container">
        <div class="services">
          <p>Gents Cut</p>
          <p>Shave</p>
        </div>
        <div class="prices">
          <p>R135</p>
          <p>R110</p>
        </div>
      </div>
    </div>

    <div class="card">
      <span class="header">Ladies</span>
      <div class="container">
        <div class="services">
          <p>Cut Only</p>
          <p>Cut / BW: Short</p>
          <p>Cut / BW: Medium</p>
          <p>Cut / BW: Long</p>
          <p>BW: Short</p>
          <p>BW: Medium</p>
          <p>BW: Long</p>
          <p>Straightener with blow wave</p>
          <p>Straightener only</p>
        </div>
        <div class="prices">
          <p>R240</p>
          <p>R290</p>
          <p>R310</p>
          <p>R340</p>
          <p>R170</p>
          <p>R180</p>
          <p>R190</p>
          <p>R70</p>
          <p>R90</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Foils</span>
      <div class="container">
        <div class="services">
          <p>10 x Foils: Short</p>
          <p>10 x Foils: Medium</p>
          <p>10 x Foils: Long</p>
          <p>Per Foil: Short</p>
          <p>Per Foil: Medium</p>
          <p>Per Foil: Long</p>
          <p>Full Head Foils: Short</p>
          <p>Full Head Foils: Medium</p>
          <p>Full Head Foils: Long</p>
          <p>Full Head Foils: Extra Length</p>
          <p>Half Head Foils: Short</p>
          <p>Half Head Foils: Medium</p>
          <p>Half Head Foils: Long</p>
          <p>Half Head Foils: Extra Length</p>
        </div>
        <div class="prices">
          <p>R305</p>
          <p>R345</p>
          <p>R405</p>
          <p>R55</p>
          <p>R60</p>
          <p>R65</p>
          <p>R590</p>
          <p>R670</p>
          <p>R810</p>
          <p>R810+</p>
          <p>R560</p>
          <p>R620</p>
          <p>R710</p>
          <p>R710+</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Tints</span>
      <div class="container">
        <div class="services">
          <p>Roots</p>
          <p>Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Length</p>
          <p>Shades</p>
          <p>Colour Correction</p>
          <p>T-Hairline Tint</p>
        </div>
        <div class="prices">
          <p>R440</p>
          <p>R440</p>
          <p>R520</p>
          <p>R720</p>
          <p>R750+</p>
          <p>R250</p>
          <p>R1350+</p>
          <p>R220</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Brazilian</span>
      <div class="container">
        <div class="services">
          <p>Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Length</p>
          <p>Upstyle</p>
        </div>
        <div class="prices">
          <p>R610</p>
          <p>R710</p>
          <p>R810</p>
          <p>R900+</p>
          <p>R390</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Unda Soft Perms</span>
      <div class="container">
        <div class="services">
          <p>Half Head</p>
          <p>Full Head Short</p>
          <p>Full Head Long</p>
        </div>
        <div class="prices">
          <p>R445</p>
          <p>R545</p>
          <p>R725+</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Botox</span>
      <div class="container">
        <div class="services">
          <p>Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Long</p>
        </div>
        <div class="prices">
          <p>R360</p>
          <p>R460</p>
          <p>R560</p>
          <p>R660</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Set / Curlers</span>
      <div class="container">
        <div class="services">
          <p>Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Length</p>
        </div>
        <div class="prices">
          <p>R170</p>
          <p>R180</p>
          <p>R190</p>
          <p>R200</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Extras</span>
      <div class="container">
        <div class="services">
          <p>Treatment Cat</p>
          <p>Intense Treatment</p>
          <p>Sealer</p>
          <p>Silver Shampoo</p>
        </div>
        <div class="prices">
          <p>R160</p>
          <p>R160</p>
          <p>R70</p>
          <p>R30</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    display: flex;
    flex-direction: column;
    width: 375px;
    margin: 1em;
    background: linear-gradient(to right, rgb(105, 105, 105), $primary);
    border-radius: 1em;
    box-shadow: 5px 10px #888888;
    color: white;

    .header {
      text-align: center;
      font-weight: bold;
      font-size: 1.7em;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .services {
        font-size: 1em;

        .bold {
          font-weight: bold;
        }
      }

      .prices {
        font-size: 1em;
      }
    }
  }
}
</style>
