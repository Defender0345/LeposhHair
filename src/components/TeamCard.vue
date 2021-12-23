<template>
  <div class="heading">
    <h2>Meet our TEAM!</h2>
  </div>
  <div class="tmembers">
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
    <div class="member">
      <img src="@/assets/Images/team/team1.jpg" alt="test" />
      <h4>Name and surname</h4>
      <h5>Position</h5>
      <h6>Experience</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.heading {
  text-align: center;
  align-items: center;
  background: $accent;
  color: white;
  padding: 2em;
}
.tmembers {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding: 2em 0;

  .member {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      max-width: 250px;
    }
    h4 {
      font-size: 1.5em !important;
    }
    h5 {
      font-size: 1em;
    }
    h6 {
      font-size: 0.8em;
    }
  }
}
</style>
