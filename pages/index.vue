<template>
  <div class="page-main">
    <Hero :retail="true" />
    <SubHero :sub-hero-items="subHeroItems" />
    <div v-if="$userTradeCenter" class="page-main__container">
      <div class="container">
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
// eslint-disable-next-line no-unused-vars
import { api } from '../assets/js/api'
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
          big: '<span>ВЫБЕРИТЕ</span><span>вина из предложенного</span><span>ассортимента</span>',
          small: 'ВЫБЕРИТЕ  вина из предложенного ассортимента'
        },
        {
          big: '<span>СФОРМИРУЙТЕ</span><span> список вин</span><span> в Excel файл</span>',
          small: 'СФОРМИРУЙТЕ  список вин  в Excel файл'
        },
        {
          big: '<span>СОБЕРИТЕ</span><span>выбранный ассортимент</span><span>в ТЦ или оформите</span><span>самовывоз</span>',
          small: 'СОБЕРИТЕ  выбранный ассортимент  в ТЦ или оформите самовывоз'
        }
      ]
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
