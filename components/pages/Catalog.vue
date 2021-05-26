<template>
  <div v-if="cards.length" class="catalog">
    <div class="box-title">
      ВИННАЯ КАРТА
    </div>
    <div class="catalog__cards-box">
      <Card v-for="(card, index) in cards" :key="index" :card-data="card" />
    </div>
    <PaginatorBox
      v-if="lastPage && lastPage > 0"
      :current-page="currentPage"
      :last-page="lastPage"
    />
    <div class="catalog__warning">
      ЧРЕЗМЕРНОЕ ПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
    </div>
  </div>
</template>

<script>
import { api } from '../../assets/js/api'

export default {
  name: 'Catalog',
  components: {
    Card: () => import('./Card'),
    PaginatorBox: () => import('./PaginatorBox')
  },
  data () {
    return {
      cards: [],
      currentPage: null,
      lastPage: null
    }
  },
  watch: {
    $userTradeCenter: {
      deep: true,
      handler (val) {
        console.log('val')
        console.log(val)
        // this.fetchCatalog()
      }
    }
  },
  mounted () {
    // api.products.categories(this.$userTradeCenter?.store_id)
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
    this.fetchCatalog()
  },
  methods: {
    async fetchCatalog () {
      if (this.$userTradeCenter?.store_id) {
        await api.products.getProduct2(this.$userTradeCenter?.store_id)
          .then((res) => {
            // eslint-disable-next-line camelcase,no-unused-vars
            const { last_page, current_page, data } = res.data
            this.cards = data
            // eslint-disable-next-line camelcase
            this.currentPage = current_page
            // eslint-disable-next-line camelcase
            this.lastPage = last_page
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .catalog {
    .catalog__cards-box{
      display: flex;
      flex-wrap: wrap;
    }
    .catalog__warning{
      margin-top: 72px;
      display: flex;
      justify-content: center;
      @include FontStyle('Acrom', normal, #000000, 34px, 40px);
      text-align: center;
    }

    @media (max-width: 1080px) {
      .catalog__warning{
        margin-top: 30px;
        max-width: 684px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media (max-width: 767px) {
      .catalog__warning{
        max-width: 270px;
        margin-left: auto;
        margin-right: auto;
        @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      }
    }
  }
</style>
