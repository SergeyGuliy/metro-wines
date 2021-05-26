<template>
  <div class="page-main">
    <Hero />
    <SubHero :sub-hero-items="subHeroItems" />
<!--    <pre>{{ $userBucket }}</pre>-->
    <div class="page-main__container">
      <div class="container">
        <FilterBox />
        <Catalog v-if="$userTradeCenter" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { api } from '../assets/js/api'

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
          big: 'ВЫБЕРИТЕ <br>вина, соответствующие <br> концепции вашего<br> заведения',
          small: 'ВЫБЕРИТЕ вина, соответствующие  концепции вашего заведения'
        },
        {
          big: 'СФОРМИРУЙТЕ<br> вашу винную<br> карту в PDF формате <br>с выбранным<br> дизайном',
          small: 'СФОРМИРУЙТЕ вашу винную карту в PDF формате  с выбранным  дизайном'
        },
        {
          big: 'ОТПРАВЬТЕ <br> cформированный <br> Excel файл вашему<br> менеджеру для заказа',
          small: 'ОТПРАВЬТЕ  cформированный  Excel файл вашему  менеджеру для заказа'
        }

      ]
    }
  },
  async mounted () {
    await this.$loadGeoData()
    await this.$fetchBucket()
    // await api.products.categories(this.$userTradeCenter?.store_id).then((data) => {
    //   console.log(data)
    // }).catch((e) => {
    //   console.log(e)
    // })

    //                        Feedback
    //                        FeedbackManadger
    //                        Is18YearsOld
    //                        WineCard
    //                        WineOwner
    //                        BucketUser

    //                        BucketRestoraunt
    //                        SelectCity

    // this.$openModal('Feedback')
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  },
  methods: {
    openInitModals () {
      this.$openModal('Is18YearsOld')
        .then(() => this.$openModal('WineOwner'))
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
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
