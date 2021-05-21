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
// import { api } from '../assets/api'

export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    SubHero: () => import('../components/layouts/SubHero'),
    FilterBox: () => import('../components/pages/FilterBox'),
    Catalog: () => import('../components/pages/Catalog')
  },
  // async asyncData ({ $axios }) {
  //   const a = await $axios.$get('https://api.metro-cc.ru/api/v1/5C63A1CB1E8954499E3BB93939B7B/tradecenters')
  //   console.log(a)
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
  mounted () {
    try {
      // const a = await this.$axios.$get('https://api.metro-cc.ru/api/v1/5C63A1CB1E8954499E3BB93939B7B/tradecenters')
      // console.log(a)
    } catch (e) {
      console.error(e)
    }
    // setTimeout(() => {
    //   this.openInitModals()
    // }, 1000)

    //                        BucketUser

    //                        BucketRestoraunt
    //                        SelectCity

    // this.$openModal('BucketUser')
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
    // api.tradecenters.getAll().then((res) => {
    //   console.log(res)
    // })
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
  }
</style>
