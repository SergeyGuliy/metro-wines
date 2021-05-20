<template>
  <div class="page-main">
    <Hero :retail="true" />
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
        'ВЫБЕРИТЕ<br> вина из предложенного<br> ассортимента',
        'СФОРМИРУЙТЕ<br> список вин<br> в Excel файл',
        'СОБЕРИТЕ <br>выбранный ассортимент<br> в ТЦ или оформите<br> самовывоз'
      ]
    }
  },
  created () {
    // this.openInitModals()

    // this.$openModal('Bucket')
    //   .then(() => this.$openModal('WineOwner'))
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
  }
</style>
