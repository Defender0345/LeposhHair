<template>
  <div class="cards">
    <div class="card">
      <span class="header">Kids / Students</span>
      <div class="container">
        <div class="services">
          <p>Baby / Todler</p>
          <p>Girls Primary School Cut</p>
          <p>Cut & Blowdry</p>
          <p>Girls Highschool Cut</p>
          <p>Cut & Blowdry</p>
          <p>Boys Primary Cut</p>
          <p>Boys High School / Students</p>
        </div>
        <div class="prices">
          <p>R90</p>
          <p>R120</p>
          <p>R200</p>
          <p>R150</p>
          <p>R230</p>
          <p>R100</p>
          <p>R110</p>
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
          <p>R130</p>
          <p>R100</p>
        </div>
      </div>
    </div>

    <div class="card">
      <span class="header">Ladies</span>
      <div class="container">
        <div class="services">
          <p>Cut Only</p>
          <p class="bold">Cut / BW: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p class="bold">BW: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Straightner</p>
        </div>
        <div class="prices">
          <p>R230</p>
          <p>R290</p>
          <p>R</p>
          <p>R300</p>
          <p>R160</p>
          <p>R170</p>
          <p>R180</p>
          <p>R60</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Mini Foils</span>
      <div class="container">
        <div class="services">
          <p class="bold">10 x Foils: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p class="bold">Per Foil: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p class="bold">Full Head Foils: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Length</p>
          <p class="bold">Half Head Foils: Short</p>
          <p>Medium</p>
          <p>Long</p>
          <p>Extra Length</p>
        </div>
        <div class="prices">
          <p>R295</p>
          <p>R335</p>
          <p>R395</p>
          <p>R45</p>
          <p>R50</p>
          <p>R55</p>
          <p>R580</p>
          <p>R660</p>
          <p>R800</p>
          <p>R800+</p>
          <p>R550</p>
          <p>R610</p>
          <p>R700</p>
          <p>R700+</p>
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
          <p>T Hairline Tint</p>
        </div>
        <div class="prices">
          <p>R395</p>
          <p>R405</p>
          <p>R505</p>
          <p>R705</p>
          <p>R705+</p>
          <p>R240</p>
          <p>R1300+</p>
          <p>R200</p>
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
          <p>R600</p>
          <p>R700</p>
          <p>R800</p>
          <p>R900+</p>
          <p>R390</p>
        </div>
      </div>
    </div>
    <div class="card">
      <span class="header">Dulcia Perms</span>
      <div class="container">
        <div class="services">
          <p>Half Head</p>
          <p>Full Head Short</p>
          <p>Full Head Long</p>
        </div>
        <div class="prices">
          <p>R435</p>
          <p>R535</p>
          <p>R725+</p>
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
          <p>R140</p>
          <p>R140</p>
          <p>R50</p>
          <p>R20</p>
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
