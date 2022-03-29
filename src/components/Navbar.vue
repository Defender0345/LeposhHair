<template>
  <div>
    <div class="navbar top" id="navbar">
      <div class="logo">
        <span class="text-primary"><i class="fas fa-cut"></i>Le Posh</span>
        Hair Design
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" aria-label="Takes you to top of page">Home</a>
          </li>
          <li>
            <a href="/pricing" aria-label="Takes you to the Pricing page"
              >Pricing</a
            >
          </li>
          <li>
            <a href="/#about-us" aria-label="Takes you to about section"
              >About</a
            >
          </li>
          <li>
            <a href="/#contact-us" aria-label="Takes you to contact section"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $accent;
  color: white;
  opacity: 0.8;
  width: 100vw;
  max-width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  padding: 0 30px;
  transition: 0.5s;
  z-index: 999;

  .logo {
    font-size: 2em;
    font-weight: 400;

    .text-primary {
      color: $primary;
    }
  }

  nav {
    ul {
      display: flex;
    }
  }

  a {
    color: white;
    padding: 10px 20px;
    margin: 0 5px;

    &:hover {
      border-bottom: $primary 2px solid;
    }
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding-bottom: 10px;
    height: 100px;

    .logo {
      font-size: 1.5em;
    }

    a {
      padding: 10px 10px;
    }
  }
}
</style>
