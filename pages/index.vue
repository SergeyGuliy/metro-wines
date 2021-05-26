<template>
  <div class="page-main">
    <Hero />
    <SubHero :sub-hero-items="subHeroItems" />
    <div class="page-main__container">
      <div class="container">
        <FilterBox />
        <Catalog />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { api } from '../assets/js/api'
import { initGeolocation } from '../assets/js/initGeolocation'

export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    SubHero: () => import('../components/layouts/SubHero'),
    FilterBox: () => import('../components/pages/FilterBox'),
    Catalog: () => import('../components/pages/Catalog')
  },
  // async asyncData ({ $axios }) {
  //   try {
  //     const a = await api.tradecenters.getAll().then((res) => {
  //       console.log(res.data[0].site_key)
  //     })
  //     console.log(a)
  //   } catch (e) {
  //
  //   }
  // },
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
    await initGeolocation(this.$userTradeCenter).then((data) => {
      const points = this.$tradeCenters
      function diagonal (point) {
        return Math.pow(point.longitude, 2) + Math.pow(point.latitude, 2)
      }
      let closestTradeCenter = null
      points.forEach((currentCenter) => {
        const currentDelta = Math.abs(diagonal(data) - diagonal(currentCenter.coordinates))
        if (!currentCenter.coordinates) { return }
        if (!closestTradeCenter) {
          closestTradeCenter = currentCenter
          closestTradeCenter.coordinates.delta = currentDelta
        } else if (currentDelta < closestTradeCenter.coordinates.delta) {
          closestTradeCenter = currentCenter
          closestTradeCenter.coordinates.delta = currentDelta
        }
      })
      this.$store.commit('SET_USER_TRADE_CENTER', closestTradeCenter)
    }).catch((e) => {
      this.$store.commit('SET_USER_TRADE_CENTER', this.$tradeCenters.find(i => i.city === 'Москва'))
    })
    api.bucket.createMyBucket(this.$userTradeCenter?.store_id).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    api.bucket.createMyBucket2(this.$userTradeCenter?.store_id).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    api.products.getProduct1(this.$userTradeCenter?.store_id).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    api.products.getProduct2(this.$userTradeCenter?.store_id).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    api.products.categories(this.$userTradeCenter?.store_id).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    api.feedback.send(this.$userTradeCenter?.store_id, {
      email: 'qweqwe@gmail.com',
      phone: '0502808165',
      text: 'dfsfsdfsdf'
    }).then((data) => {
      console.log(data)
    }).catch((e) => {
      console.log(e)
    })
    // try {
    //   // const a = await this.$axios.$get('https://api.metro-cc.ru/api/v1/5C63A1CB1E8954499E3BB93939B7B/tradecenters')
    //   // console.log(a)
    //   // api.tradecenters.getAll().then((res) => {
    //   //   console.log(res)
    //   // })
    // } catch (e) {
    //   console.error(e)
    // }
    // setTimeout(() => {
    //   this.openInitModals()
    // }, 1000)

    //                        Feedback
    //                        FeedbackManadger
    //                        Is18YearsOld
    //                        WineCard
    //                        WineOwner
    //                        BucketUser

    //                        BucketRestoraunt
    //                        SelectCity

    // this.$openModal('BucketRestoraunt')
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
