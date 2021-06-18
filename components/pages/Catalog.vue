<template>
  <div v-if="cards.length" class="catalog">
    <div class="catalog__cards-box">
      <Card v-for="(card, index) in cards" :key="index" :card-data="card" />
    </div>
    <PaginatorBox
      v-if="lastPage && lastPage > 0"
      :value="currentPage"
      :last-page="lastPage"
      :info="info"
      @input="changePage"
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
      lastPage: null,
      filters: {},
      searchField: '',
      info: {
        to: null,
        from: null,
        total: null
      }
    }
  },
  watch: {
    $userTradeCenter: {
      deep: true,
      handler (val) {
        // this.fetchCatalog()
      }
    }
  },
  mounted () {
    this.fetchCatalog()
    this.$bus.$on('searchFilter', this.useFilters)
  },
  beforeDestroy () {
    this.$bus.$off('searchFilter', this.useFilters)
  },
  methods: {
    async useFilters (data) {
      console.log(data)
      this.$set(this, 'filters', data.filters)
      this.$set(this, 'searchField', data.searchField)
      this.currentPage = 1
      await this.fetchCatalog()
    },
    changePage (page) {
      this.$scrollToCard()
      this.currentPage = page
      this.fetchCatalog()
    },
    async fetchCatalog () {
      if (this.searchField.length) {
        await this.searchInCatalog()
      } else {
        await this.filtredCatalog()
      }
    },
    async searchInCatalog () {
      await api.products.search(this.$userTradeCenter?.store_id, this.searchField, {
        page: this.currentPage,
        ...this.filters
      })
        .then((res) => {
          // eslint-disable-next-line camelcase
          const { total_pages, page, total } = res.data
          this.cards = res.data.products
          this.lastPage = null
          this.currentPage = +page
          // eslint-disable-next-line camelcase
          this.lastPage = +total_pages
          // eslint-disable-next-line camelcase
          this.info.from = ((+page - 1) * 12) + 1
          // eslint-disable-next-line camelcase
          this.info.to = ((+page) * 12) < +total ? ((+page) * 12) : +total
          this.info.total = +total
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async filtredCatalog () {
      if (this.$userTradeCenter?.store_id) {
        if (this.$userType === 'restoraunt') {
          await api.products.getProduct(this.$userTradeCenter?.store_id, {
            page: this.currentPage,
            ...this.filters
          })
            .then((res) => {
              // console.log(res.data)

              // eslint-disable-next-line camelcase,no-unused-vars
              const { last_page, current_page, data, to, from, total } = res.data
              this.cards = data
              // eslint-disable-next-line camelcase
              this.currentPage = +current_page
              // eslint-disable-next-line camelcase
              this.lastPage = +last_page
              this.info.to = +to
              this.info.from = +from
              this.info.total = +total
            })
            .catch((e) => {
              console.log(e)
            })
        } else {
          await api.products.getProduct(this.$userTradeCenter?.store_id, {
            page: this.currentPage,
            ...this.filters
          })
            .then((res) => {
              // console.log(res.data)

              // eslint-disable-next-line camelcase,no-unused-vars
              const { last_page, current_page, data, to, from, total } = res.data
              this.cards = data
              // eslint-disable-next-line camelcase
              this.currentPage = +current_page
              // eslint-disable-next-line camelcase
              this.lastPage = +last_page
              this.info.to = +to
              this.info.from = +from
              this.info.total = +total
            })
            .catch((e) => {
              console.log(e)
            })
        }
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
