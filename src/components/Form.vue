<template>
  <form>
    <h2>Contact Us</h2>
    <div class="text-fields">
      <input type="text" class="text-input" placeholder="Name" />
      <input type="text" class="text-input" placeholder="Subject" />
      <input type="text" class="text-input" placeholder="Phone Number" />
    </div>
    <button type="submit" class="btn-dark">SEND EMAIL</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

form {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;

  h2 {
    padding-top: 1em;
    color: white;
  }

  .text-fields {
    display: flex;
    flex-direction: column;
    width: 80%;

    .text-input {
      height: 30px;
      margin: 0.8em 0;
      width: 100%;
      border: none;
      background: rgb(228, 228, 228);
      padding: 0.5em;
      border-radius: 2em;

      &::placeholder {
        color: black;
        font-family: inherit;
        font-size: 1.5em;
      }
    }
  }

  button {
    align-items: center;
    margin-top: 1em;
    width: 80%;
    color: white;
    background: $accent;
    border: none;
    border-radius: 5em;
    padding: 1em 0;
  }
}
</style>
