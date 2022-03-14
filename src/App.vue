<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import '@/assets/_shared.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  background: white;
  color: #333;
  line-height: 1.6;

  ul {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  // Fonts
  h1,
  h2 {
    font-size: 300;
    line-height: 1.2;
  }

  h3 {
    line-height: 2em;
  }

  h4 {
    font-size: 2em !important;
  }

  p {
    margin: 10px 0;
  }

  /* Button */
  .btn {
    cursor: pointer;
    display: inline-block;
    padding: 10px 30px;
    color: white;
    background: $primary;
    border: none;
    border-radius: 5px;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn-primary,
  .bg-primary {
    background: $primary;
    color: white;
  }
  .btn-secondary,
  .bg-secondary {
    background: $secondary;
    color: white;
  }
  .btn-dark,
  .bg-dark {
    background: $accent;
    color: white;
  }
  .btn-light,
  .bg-light {
    background: white;
    color: $accent;
  }

  .btn-outline {
    background: transparent;
    border: 1px solid white;
  }
}
</style>
