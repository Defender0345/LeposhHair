<template>
   <section class="contactUs">
      <div class="google-map">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6605.893495918827!2d18.836796!3d-34.122113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7a3a0f0a87625b1!2sLe%20Posh%20Hair%20Design!5e0!3m2!1sen!2sza!4v1634127350262!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
         ></iframe>
      </div>
      <div class="contact-info">
         <p><i class="fas fa-phone-square-alt"></i>021 853 2978</p>
         <p><i class="fas fa-envelope"></i>hairleposh@gmail.com</p>
         <p><i class="fab fa-instagram"></i>@hairleposh</p>
         <p><i class="fab fa-facebook"></i>Le Posh Hair Design</p>
      </div>
   </section>
</template>

<script>
export default {
   name: 'ContactUs',
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.contactUs {
   background-color: $primary;
   display: flex;
   height: 300px;

   .google-map {
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

@media (max-width: 768px) {
   .contactUs {
      flex-direction: column;
      height: 100vh;

      .google-map {
         width: 100%;
         height: 50%;
      }

      .contact-info {
         width: 100%;
         height: 50%;
      }
   }
}
</style>
