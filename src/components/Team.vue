<template>
  <section>
    <TeamCard />
  </section>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue';

export default {
  name: 'Team',
  components: {
    TeamCard,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';
</style>
