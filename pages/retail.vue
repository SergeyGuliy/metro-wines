<template>
  <div class="page-main">
    <Hero :retail="true" />
    <SubHero :sub-hero-items="subHeroItems" />
    <div class="page-main__container">
      <div v-if="$userTradeCenter" class="container">
        <FilterBox />
        <Catalog />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    SubHero: () => import('../components/layouts/SubHero'),
    FilterBox: () => import('../components/pages/FilterBox'),
    Catalog: () => import('../components/pages/Catalog')
  },
  data () {
    return {
      subHeroItems: [
        {
          big: 'ВЫБЕРИТЕ<br> вина из предложенного<br> ассортимента',
          small: 'ВЫБЕРИТЕ  вина из предложенного ассортимента'
        },
        {
          big: 'СФОРМИРУЙТЕ<br> список вин<br> в Excel файл',
          small: 'СФОРМИРУЙТЕ  список вин  в Excel файл'
        },
        {
          big: 'СОБЕРИТЕ <br>выбранный ассортимент<br> в ТЦ или оформите<br> самовывоз',
          small: 'СОБЕРИТЕ  выбранный ассортимент  в ТЦ или оформите самовывоз'
        }
      ]
    }
  },
  async mounted () {
    console.clear()
    await this.$loadGeoData()
    await this.$fetchBucket()
    await this.$selectUserAge()
    await this.$selectUserType()
    this.$routeMiddleWare()
  }
}
</script>

<style lang="scss">
  .page-main{
    .page-main__container{
      padding: 111px 0 50px 0;
      background: url("../assets/images/page-main_top.png"), #f4f4f4;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    @media (max-width: 1080px) {
      .page-main__container{
        padding-top: 80px;
      }
    }
    @media (max-width: 767px) {
      .page-main__container{
        padding-top: 30px;
      }
    }
  }
</style>
