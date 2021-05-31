<template>
  <div class="page-main">
    <Hero />
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
          big: 'ВЫБЕРИТЕ<br>вина, соответствующие<br> концепции вашего<br>заведения',
          small: 'ВЫБЕРИТЕ вина, соответствующие  концепции вашего заведения'
        },
        {
          big: 'СФОРМИРУЙТЕ<br> вашу винную<br> карту в PDF формате <br>с выбранным<br> дизайном',
          small: 'СФОРМИРУЙТЕ вашу винную карту в PDF формате  с выбранным  дизайном'
        },
        {
          big: 'ОТПРАВЬТЕ <br>cформированный <br>Excel файл вашему<br> менеджеру для заказа',
          small: 'ОТПРАВЬТЕ  cформированный  Excel файл вашему  менеджеру для заказа'
        }

      ]
    }
  },
  async mounted () {
    console.clear()
    await this.$fetchTradecenters()
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
