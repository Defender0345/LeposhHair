<template>
  <section>
    <div class="contactUs">
      <div class="form">
        <Form />
      </div>
      <div class="contact-info">
        <p><i class="fas fa-phone-square-alt"></i>021 853 2978</p>
        <p><i class="fas fa-envelope"></i>hairleposh@gmail.com</p>
        <p><i class="fab fa-instagram"></i>@hairleposh</p>
        <p><i class="fab fa-facebook"></i>Le Posh Hair Design</p>
      </div>
    </div>
    <div class="address">
      <h3>FIND US HERE</h3>
      <a
        href="https://www.google.com/maps/place/Le+Posh+Hair+Design/@-34.1225866,18.8376974,18z/data=!4m5!3m4!1s0x1dcdcae67c5bc86d:0xf7a3a0f0a87625b1!8m2!3d-34.122127!4d18.8367682"
        aria-label="Link to google maps"
        target="_blank"
        rel="”noopener”"
      >
        <p>
          Shop 17 South Side Centre C/O Gordons Bay Dr and, George St,
          Helderberg Rural, 7140
        </p>
      </a>
    </div>
  </section>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'ContactUs',

  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.contactUs {
  background-color: $primary;
  display: flex;
  height: 300px;

  .form {
    width: 50%;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    justify-content: center;
    color: white;

    p {
      font-size: 1.2em;

      i {
        padding: 0.5em;
        font-size: 1.2em;
      }
    }
  }
}

.address {
  text-align: center;
}

@media (max-width: 768px) {
  .contactUs {
    flex-direction: column;
    height: 100%;

    .form {
      width: 100%;
    }

    .contact-info {
      width: 100%;
      height: 50%;
    }
  }
}
</style>
