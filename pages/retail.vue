<template>
  <div class="page-main">
    <Hero />
    <SubHero :sub-hero-items="subHeroItems" />
    <div class="page-main__container">
      <div v-if="$userTradeCenter" class="container">
        <FilterBox />
        <div id="wineCard" class="box-title">
          ВИННАЯ КАРТА
        </div>
        <Catalog />
      </div>
    </div>
  </div>
</template>

<script>
import routeMixin from '../mixins/routeMixin'

export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    SubHero: () => import('../components/layouts/SubHero'),
    FilterBox: () => import('../components/pages/FilterBox'),
    Catalog: () => import('../components/pages/Catalog')
  },
  mixins: [routeMixin],
  data () {
    return {
      subHeroItems: [
        {
          big: '<span>ВЫБЕРИТЕ</span><span>вина, соответствующие</span><span> концепции вашего</span><span>заведения</span>',
          small: 'ВЫБЕРИТЕ вина, соответствующие  концепции вашего заведения'
        },
        {
          big: '<span>СФОРМИРУЙТЕ</span><span>вашу винную</span><span>карту в PDF формате </span><span>с выбранным</span><span>дизайном</span> ',
          small: 'СФОРМИРУЙТЕ вашу винную карту в PDF формате  с выбранным  дизайном'
        },
        {
          big: '<span>ОТПРАВЬТЕ</span><span>cформированный</span><span>Excel файл вашему</span><span>менеджеру для заказа</span> ',
          small: 'ОТПРАВЬТЕ  cформированный  Excel файл вашему  менеджеру для заказа'
        }

      ]
    }
  },
  mounted () {
    try {
      if (this.$store?.state?.scrollTo) {
        document.getElementById('wineCard').scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    } catch (e) {
    } finally {
      this.$store.commit('SET_SCROLL_TO', false)
    }
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
