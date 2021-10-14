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
   </footer>
</template>

<script>
export default {
   name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

.footer {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;
   height: 150px;

   a {
      color: #fff;

      &:hover {
         color: $primary;
      }
   }

   .social > * {
      margin: auto;
      padding: 30px;
   }
}
</style>
