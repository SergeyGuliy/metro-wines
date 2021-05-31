<template>
  <div class="select-city-modal" :style="positionWithActivator">
    <Close class="svg-close" @click="close" />
    <div v-if="tab === 1" class="select-city-tab select-city-tab-1">
      <div class="select-city-modal__title">
        Ваш город Москва?
      </div>
      <div class="select-city-modal__actions">
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
          @click="tab = 2"
        >
          Да
        </Button>
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
          @click="tab = 3"
        >
          Нет
        </Button>
      </div>
    </div>
    <div v-if="tab === 2" class="select-city-tab select-city-tab-2">
      <div class="select-city-modal__title">
        {{ tradeCenterSelected.name }}
      </div>
      <a href="#" class="tab__contact">
        <span>{{ tradeCenterSelected.contacts.phone }}</span>
      </a>
      <div class="tab__work-time">
        Будни: с {{ tradeCenterSelected.work_mode }}<br>
        <!--        Выходные: с 8 до 22 часов-->
      </div>
      <a href="mailto://merservise.store10@metro-cc.ru" class="tab__work-time tab__link">
        {{ tradeCenterSelected.contacts.email }}
      </a>
      <span
        class="tab__select-another noselect"
        @click="cleanCity"
      >
        Выбрать другой
      </span>
    </div>
    <div v-if="tab === 3" class="select-city-tab select-city-tab-3">
      <div class="select-city-modal__title">
        Выберите город
      </div>
      <div class="tab__cites">
        <div
          v-for="(city, index) in Object.keys(cities)"
          :key="index"
          class="tab__city pointer noselect"
          @click="selectCity(city)"
        >
          {{ city }}
        </div>
      </div>
    </div>
    <div v-if="tab === 4" class="select-city-tab select-city-tab-4">
      <div class="select-city-modal__title pointer noselect" @click="tab = 3">
        <Forward />
        {{ citySelected }}
      </div>
      <div class="tab__cites">
        <div
          v-for="(tradecenter, index) in cities[citySelected]"
          :key="index"
          class="tab__city pointer noselect"
          @click="selectTradecenter(tradecenter)"
        >
          {{ tradecenter.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from './modalMixin'

export default {
  name: 'SelectCity',
  components: {
    Button: () => import('../form/Button'),
    Forward: () => import('assets/icons/forward.svg'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin],
  data () {
    return {
      citySelected: null,
      tab: 1
    }
  },
  computed: {
    cities () {
      const cities = {}
      this.$tradeCenters.forEach((tradecenter) => {
        if (cities[tradecenter.city]) {
          cities[tradecenter.city].push(tradecenter)
        } else {
          cities[tradecenter.city] = [tradecenter]
        }
      })
      return cities
    },
    tradeCenterSelected: {
      get () {
        return this.$userTradeCenter
      },
      set (val) {
        this.$cookies.set('userTradeCenterId', val.store_id)
        this.$store.commit('SET_USER_TRADE_CENTER', val)
      }
    }
  },
  mounted () {
    if (this.tradeCenterSelected) {
      this.tab = 2
    }
  },
  methods: {
    selectCity (city) {
      this.citySelected = city
      this.tab = 4
    },
    selectTradecenter (tradecenter) {
      this.tradeCenterSelected = tradecenter
      this.close()
    },
    cleanCity () {
      this.tab = 3
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .select-city-modal {
    min-width: 400px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 32px 32px 38px 32px;
    .select-city-modal__title{
      display: flex;
      align-items: center;
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
      svg{
        margin-right: 27px;
      }
    }
    .select-city-tab{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .tab__contact{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 30px;
        span{
          @include FontStyle('Acrom', bold, #710000, 18px, 22px);
        }
      }
      .tab__work-time{
        @include FontStyle('Acrom', normal, #000000, 18px, 21px);
      }
      .tab__link{
        text-decoration: underline;
        margin-top: 30px;
      }
      .tab__select-another{
        align-self: flex-end;
        margin-top: 35px;
        width: fit-content;
        text-decoration: underline;
        cursor: pointer;
        @include FontStyle('Acrom', normal, #710000, 14px, 17px);
      }
      .tab__cites{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 409px;
        margin-top: 30px;
        width: 800px;
      }
      .tab__city{
        margin-right: 60px;
        @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        margin-bottom: 5px;
        white-space: nowrap;
        cursor: pointer;
      }
    }
    .select-city-tab-1{
    }
    .select-city-tab-2{}
    .select-city-tab-3{}
    .select-city-modal__actions{
      margin-top: 24px;
      height: 40px;
      .button{
        width: 106px;
        margin-right: 10px;
      }
    }

    @media (max-width: 1150px) {
      top: 115px !important;
      left: 50% !important;
      transform: translate(-50%, 0) !important;
    }

    @media (max-width: 767px) {
      top: 50% !important;
      transform: translate(-50%, -50%) !important;
      max-width: 300px;
      min-width: 300px;
      padding: 19px 10px 15px 10px;
      max-height: calc(100vh - 30px);
      overflow: auto;
      .select-city-modal__title{
        padding: 0 10px;
        @include FontStyle('Acrom', normal, #000000, 20px, 24px);
      }
      .select-city-tab .tab__cites{
        padding: 0 10px;
        display: block;
        width: 100%;
        .tab__city{
          margin-bottom: 8px;
        }
      }
      .select-city-tab-2{
        .select-city-modal__title{
          margin-top: 10px;
          padding: 0;
        }
        .tab__contact{
          margin-top: 13px;
          margin-bottom: 15px;
          span{
            @include FontStyle('Acrom', bold, #710000, 14px, 17px);
          }
        }
        .tab__work-time{
          @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        }
        .tab__work-time.tab__link{
          margin-top: 25px;

        }
        .tab__work-time.tab__link{

        }
      }
    }
  }
</style>
