<template>
  <footer class="footer bg-dark">
    <div class="social">
      <a
        href="https://www.facebook.com/Le-Posh-Hair-Design-179219152818855"
        target="_blank"
        rel="”noopener”"
        aria-label="Link to facebook page"
        ><i class="fab fa-facebook fa-2x"></i
      ></a>
      <a
        href="https://www.instagram.com/hairleposh/"
        target="_blank"
        rel="”noopener”"
        aria-label="link to instagram page"
        ><i class="fab fa-instagram fa-2x"></i
      ></a>
    </div>
    <p>Copyright &copy; 2021 - Le Posh Hair Design</p>
    <a href="www.drnsoftware.com" class="drn-logo">
      <img :src="dnrlogo" alt="DNR Software Logo" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      dnrlogo: require('@/assets/Images/DRN-logo-white.png'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 1em;

  a {
    color: #fff;

    &:hover {
      color: $primary;
    }
  }

  .social > * {
    margin: 1em;
    padding: 30px;
  }

  .drn-logo {
    cursor: pointer;
    position: absolute;
    right: 3%;

    img {
      max-height: 70px;
      max-width: 100px;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .drn-logo {
      position: unset;
    }
  }
}
</style>
