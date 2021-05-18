<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero__text">
        Винная карта <br> для вашего <br> ресторана
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .hero {
    background-image: linear-gradient(90deg, #000000 0%, rgba(123, 9, 9, 0) 97.7%), url("../../assets/images/hero.jpg");
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    height: 627px;
    background-size: cover;
    display: flex;
    align-items: center;
    .hero__text{
      @include FontStyle('TimesNewRoman', normal, #ffffff, 86px, 99px);
    }
  }
</style>
