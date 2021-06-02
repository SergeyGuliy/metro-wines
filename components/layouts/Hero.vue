<template>
  <div class="hero" :class="{'hero-retail': $route.name === 'retail', 'hero-wine-cart': $route.name === 'wine-cart',}">
    <div class="container">
      <h1 class="hero__text" v-html="retail? retailText: restorauntText" :class="{'mb-0': $route.name === 'retail'}" />
      <h2 v-if="$route.name === 'retail'" class="hero__subtext">
        Создайте свою собственную винную карту,
        соответствующую концепции вашего заведения
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    retail: {
      default: () => false,
      type: Boolean
    }
  },
  data () {
    return {
      restorauntText: 'Винная карта для вашего ресторана',
      retailText: 'Ваша карта  любимых вин'
    }
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
    .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .hero__text{
      max-width: 690px;
      text-transform: uppercase;
      @include FontStyle('TimesNewRoman', normal, #ffffff, 86px, 99px);
    }
    .hero__subtext{
      max-width: 672px;
      margin: 0;
      @include FontStyle('Acrom', normal, #ffffff, 26px, 31px);

    }

    @media (max-width: 1080px) {
      height: 450px;
      .hero__text{
        margin-top: 63px;
        @include FontStyle('TimesNewRoman', normal, #ffffff, 60px, 69px);
      }
      .hero__subtext{
        display: none;
      }
    }
    @media (max-width: 767px) {
      height: 222px;
      .hero__text{
        margin-top: 0;
        margin-left: 10px;
        @include FontStyle('TimesNewRoman', normal, #ffffff, 30px, 34px);
      }
    }
  }
  .hero-retail{
    background-image: linear-gradient(90deg, #000000 0%, rgba(123, 9, 9, 0) 97.7%), url("../../assets/images/hero-retail.jpg");
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    background-size: cover;
  }

  .hero-wine-cart{
    background-image: linear-gradient(90deg, #000000 0%, rgba(123, 9, 9, 0) 97.7%), url("../../assets/images/hero-wine-cart.jpg");
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    background-size: cover;
  }

</style>
