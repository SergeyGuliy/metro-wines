<template>
  <div class="filter-box">
    <div class="box-title">
      ФИЛЬТРЫ
    </div>
    <div class="filter-box__row">
      <InputBox v-model="searchField" :depresed="true" placeholder="Поиск по названию" class="filter-box__cubic" :search="true" />
      <Button :bold="true" class="filter-box__cubic" :depresed="true">
        ИСКАТЬ
      </Button>
    </div>

    <div class="filter-box__tablet-box">
      <div
        class="filter-box__filters-activator noselect filter-box__filters-activator--search"
        :class="{'filter-box__filters-activator--disactivated': isMobileVisibleSearch}"
        @click="isMobileVisibleSearch = !isMobileVisibleSearch"
      >
        <div class="filter-box__filters-activator-left">
          <Search />
        </div>
      </div>
      <div
        class="filter-box__filters-activator noselect"
        :class="{'filter-box__filters-activator--disactivated': isMobileVisibleFilters}"
        @click="isMobileVisibleFilters = !isMobileVisibleFilters"
      >
        <div class="filter-box__filters-activator-left">
          <Settings />
          <span>Фильтры</span>
        </div>
        <Arrow class="svg-arrow" />
      </div>
    </div>
    <div
      class="filter-box_inner-filters"
      :class="{'filter-box_inner-filters--active':isMobileVisibleFilters}"
    >
      <div class="svg-close-filter">
        <Close @click="isMobileVisibleFilters = false" />
      </div>
      <div class="filter-box__filters">
        <SelectBox
          v-if="filters.wineCategory && filtersData.wineCategory"
          v-model="filtersData.wineSugar"
          :items="filters.wineCategory.values"
          :data="{
            title: 'Категория вина',
            icon: 'Bucket',
          }"
        />
        <SearchSelectBox
          v-if="filters.wineCountry && filtersData.wineCountry"
          v-model="filtersData.wineCountry"
          :items="filters.wineCountry.values"
          :data="{
            title: 'Страна',
            icon: 'Country',
          }"
        />
        <SelectBox
          v-if="filters.wineType && filtersData.wineType"
          v-model="filtersData.wineType"
          :items="filters.wineType.values"
          :data="{
            title: 'Цвет',
            icon: 'Color',
          }"
        />
        <SelectBox
          v-if="filters.wineSort && filtersData.wineSort"
          v-model="filtersData.wineSort"
          :items="filters.wineSort.values"
          :data="{
            title: 'Сорт винограда',
            icon: 'Sort',
          }"
        />
        <SelectBox
          v-if="filters.wineRegion && filtersData.wineRegion"
          v-model="filtersData.wineRegion"
          :items="filters.wineRegion.values"
          :data="{
            title: 'Регион',
            icon: 'Map',
          }"
        />
        <SelectBox
          v-if="filters.wineSugar && filtersData.wineSugar"
          v-model="filtersData.wineSugar"
          :items="filters.wineSugar.values"
          :data="{
            title: 'Сахар',
            icon: 'Sugar',
          }"
        />
        <DiapazoneBox
          v-model="filtersPriceDiapazone"
          :data="{
            title: 'Стоимость',
            icon: '',
          }"
        />
        <RadioBox v-model="isPremium" />
      </div>

      <div class="filter-box__filters-actions">
        <Button
          :filled="true"
          class="filter-box__show"
          @click="searchFilters"
        >
          ПОКАЗАТЬ
        </Button>
        <Button
          :outlined="true"
          class="filter-box__reset"
          @click="resetFilters"
        >
          <Close class="svg-close-reset" />
          Сбросить фильтры
        </Button>
      </div>
    </div>

    <div
      class="filter-box_inner-filters"
      :class="{'filter-box_inner-filters--active':isMobileVisibleSearch}"
    >
      <div class="svg-close-filter">
        <Close @click="isMobileVisibleSearch = false" />
      </div>
      <div class="filter-box__filters">
        <div class="mobile-search-box">
          <input type="text" class="mobile-search-box__input" placeholder="Поиск по названию">
          <button class="mobile-search-box__btn">
            <Search3 />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../../assets/js/api'

export default {
  name: 'FilterBox',
  components: {
    InputBox: () => import('../form/InputBox'),
    Button: () => import('../form/Button'),
    RadioBox: () => import('../form/RadioBox'),
    SelectBox: () => import('../form/SelectBox'),
    SearchSelectBox: () => import('../form/SearchSelectBox'),
    DiapazoneBox: () => import('../form/DiapazoneBox'),
    Arrow: () => import('assets/icons/arrow-2.svg'),
    Close: () => import('assets/icons/close.svg'),
    Search: () => import('assets/icons/Search.svg'),
    Search3: () => import('assets/icons/search-3.svg'),
    Settings: () => import('assets/icons/settings.svg')
  },
  data () {
    return {
      isMobileVisibleFilters: false,
      isMobileVisibleSearch: false,
      searchField: '',
      isPremium: false,
      filtersData: {},
      filters: {},
      filtersPriceDiapazone: [1, 10000],
      usedIds: {
        4975: 'wineCategory',
        309: 'wineCountry',
        310: 'wineSort',
        4973: 'wineRegion',
        311: 'wineSugar',
        308: 'wineType'
      },
      serversFilters: []
    }
  },
  watch: {
    isMobileVisibleFilters (val) {
      if (val && window.innerWidth < 767) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    },
    isMobileVisibleSearch (val) {
      if (val && window.innerWidth < 767) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  },
  mounted () {
    api.products.wineProducts(this.$userTradeCenter?.store_id, 412338)
      .then((data) => {
        data.data.attributes.forEach((i) => {
          if (Object.keys(this.usedIds).includes(i.id.toString())) {
            const key = this.usedIds[i.id]
            this.$set(this.filtersData, key, [])
            this.$set(this.filters, key, i)
            this.serversFilters.push(i)
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  },
  methods: {
    resetFilters () {
      this.isMobileVisibleFilters = false
    },
    searchFilters () {
      const filters = {
        attributes: [],
        price_min: Math.min(...this.filtersPriceDiapazone),
        price_max: Math.max(...this.filtersPriceDiapazone)
      }
      Object.values(this.filtersData).forEach((i) => {
        i.forEach((j) => {
          if (j) {
            filters.attributes.push({
              attribute_id: j.attribute_id,
              value_id: j.value_id
            })
          }
        })
      })
      this.$bus.$emit('searchActivation', filters)
      this.isMobileVisibleFilters = false
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .filter-box {
    margin-bottom: 110px;
    .svg-close-filter, .filter-box__reset{
      display: none;
    }
    .mobile-search-box{
      display: none;
    }
    .filter-box__row{
      background: #FFFFFF;
      border-radius: 5px;
      display: flex;
      height: 70px;
      margin-bottom: 20px;
      filter: drop-shadow(0px 16px 32px rgba(48, 49, 51, 0.24));
      .button__text{
        font-weight: bold;
      }
    }
    .filter-box__cubic{
      border-radius: 0px;
    }
    .filter-box__filters{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    .filter-box__show{
      display: block;
      height: 68px;
      margin: 12px auto 0 auto;
      padding: 0 108px;
      .button__text{
        @include FontStyle('Acrom', normal, #ffffff, 20px, 24px);
      }
    }
    .filter-box__filters-activator{
      display: none;
    }

    @media (max-width: 1300px) {
      /*display: none;*/
      margin-bottom: 50px;

      .filter-box__tablet-box{
        display: flex;
        align-items: center;
        .filter-box__filters-activator:first-child{
          margin-right: 20px;
        }
      }
      .filter-box__row{
        margin-bottom: 44px;
      }
      .box-title{
        margin-bottom: 30px;
      }
      .filter-box__filters-activator{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        max-height: 70px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        padding-right: 28px;
        padding-left: 23px;
        cursor: pointer;
        opacity: 1;
        transition: all ease 0.5s;
        transform: scale(1,1);
        .filter-box__filters-activator-left{
          display: flex;
          align-items: center;
          svg{
            margin-right: 25px;
          }
        }
      }

      .filter-box__filters-activator--search{
        display: none;
      }
      .filter-box__filters-activator--disactivated{
        max-height: 1px;
        transform: scale(1,0);
        opacity: 0;
        transition: all ease 0.5s;
      }
      .custom-input-box{
        width: calc(50% - 20px);
      }
      .filter-box_inner-filters{
        max-height: 1px;
        transform: scale(1,0);
        opacity: 0;
        transition: all ease 0.5s;
        .filter-box__show{
          margin-bottom: 0;
        }
      }
      .filter-box_inner-filters--active{
        transition: all ease 0.5s;
        transform: scale(1,1);
        max-height: 500px;
        opacity: 1;
      }
    }

    @media (max-width: 767px) {
      margin-bottom: 30px;
      .mobile-search-box{
        background: #FFFFFF;
        /* def_2 */

        box-shadow: 0px 16px 32px rgba(48, 49, 51, 0.24);
        border-radius: 5px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 7px;
        .mobile-search-box__btn{
          margin-left: 5px;
          background: #710000;
          box-shadow: 0px 16px 32px rgba(48, 49, 51, 0.24);
          border-radius: 5px;
          height: 100%;
          width: 38px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-search-box__input{
          height: 100%;
          flex: 1 1 auto;
          background-color: transparent;
          padding: 0 8px;
          border: none;
          @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        }
        .mobile-search-box__input::placeholder{
          @include FontStyle('Acrom', normal, #999999, 16px, 19px);
        }
      }
      .filter-box__filters-activator--search{
        display: flex;
      }
      .filter-box__row{
        display: none;
      }
      .box-title{
        margin-bottom: 9px;
      }
      .svg-close-filter{
        min-height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .filter-box__filters-activator{
        padding: 20px;
        width: unset;
        display: inline-flex;
        margin: 0;
        min-width: 70px;

        .filter-box__filters-activator-left{
          span{
            display: none;
          }
          svg{
            margin: 0;
          }
        }
        .svg-arrow{
          display: none;
        }
      }
      .filter-box_inner-filters--active{
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        max-height: unset;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: column;
        z-index: 5;
        .custom-input-box{
          width: calc(100% - 20px);
          margin-bottom: 4px;
        }
        .filter-box__filters{
          margin: 0;
          height: calc(100vh - 132px);
          overflow: auto;
          flex-direction: column;
        }
      }
      .custom-input-box__inner-box{
        margin: 0 -10px;
        width: 100vw;
        max-width: unset;
      }
      .filter-box__filters-actions{
        height: 115px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #FFFFFF;
        padding: 20px 0;
        .button{
          max-height: 40px;
        }
        .filter-box__show{
          margin-top: 0;
          .button__text{
            @include FontStyle('Acrom', bold, #ffffff, 14px, 16px);
          }

        }
        .filter-box__reset{
          max-height: 20px;
          display: flex;
          justify-content: center;
          .button__text{
            display: flex;
            align-items: center;
            color: #E02121;
          }
          .svg-close-reset{
            display: block;
            margin-right: 10px;
            .button__text{
              @include FontStyle('Acrom', normal, #E02121, 16px, 19px);
            }
            path{
              fill: #E02121;
            }

          }
        }
      }
    }
  }
</style>
