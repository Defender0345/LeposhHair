<template>
   <div class="time-slots">
      <p>Monday : <span>Closed</span></p>
      <p>Tuesday : <span>08:00 - 17:00</span></p>
      <p>Wednesday : <span>08:00 - 13:00</span></p>
      <p>Thursday : <span>08:00 - 17:00</span></p>
      <p>Friday : <span>08:00 - 17:00</span></p>
      <p>Saterday : <span>08:00 - 13:00</span></p>
      <p>Sunday : <span>Closed</span></p>
   </div>
</template>

<script>
export default {
   name: 'TimeCard',

   data() {
      return {};
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.time-slots {
   display: flex;
   flex-wrap: wrap;
   text-transform: uppercase;
   font-weight: bold;
   text-align: center;
   p {
      width: 25%;
      padding: 1em;
      margin: 0;

      span {
         font-weight: 300;
      }
   }
}

@media (max-width: 768px) {
   .time-slots {
      flex-direction: column;

      p {
         width: 100%;
      }
   }
}
</style>
