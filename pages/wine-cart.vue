<template>
  <div class="wine-cart-main">
    <Hero />
    <!--    <pre>{{ $userBucket }}</pre>-->
    <div class="wine-cart-main__container">
      <div class="container">
        <div class="wine-cart-main__top">
          <div class="wine-cart-main__title">
            В вашей винной карте {{ basketLength }} {{ basketLengthWinesNames[basketLength] || 'вин' }}
            <div class="popup wine-cart-main__popup">
              В одну винную карту можно добавить не больше 20 позиций, выберите нужные и они автоматически попадут в шаблон. При необходимости вы можете создать несколько винных карт.
            </div>
          </div>
          <Button class="wine-cart-main__add-all" :filled="true" :uppercase="true" @click="selectAllWines">
            Добавить все в винную карту
          </Button>
        </div>
        <WineCartList :selected-wines="selectedWines" @toggleList="toggleList" />
        <div class="wine-cart-main__actions">
          <Button :filled="true" :uppercase="true" @click="$downloadXLS">
            Скачать EXCEL для заказа
          </Button>
          <Button :filled="true" :uppercase="true" @click="openFeedBackModal">
            Отправить ассортимент менеджеру
          </Button>
        </div>

        <div class="wine-cart-main__title wine-cart-main__title-last">
          Выберите шаблон для винной карты
        </div>
        <div v-if="activeShablone > 0" class="wine-cart-main__subtitle">
          В одну винную карту можно добавить не больше {{ activeShablone> 2? '15': '20' }} позиций товара. Но вы можете создать несколько винных карт.
        </div>
        <WIneConstructor
          :selected-wines="selectedWines"
          @changeActiveShablone="changeActiveShablone"
        />
        <div class="wine-cart-main__warning">
          ЧРЕЗМЕРНОЕ ПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routeMixin from '../mixins/routeMixin'
export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    WineCartList: () => import('../components/layouts/WineCartList'),
    WIneConstructor: () => import('../components/layouts/WIneConstructor'),
    Button: () => import('../components/form/Button')
  },
  mixins: [routeMixin],
  data () {
    return {
      selectedWines: [],
      activeShablone: 0
    }
  },
  computed: {
    basketLength () {
      return Object.keys(this.$userBucket).length
    },
    basketLengthWinesNames () {
      return {
        0: 'вин',
        1: 'вино',
        2: 'винa',
        3: 'винa',
        4: 'винa'
      }
    }
  },
  methods: {
    selectAllWines () {
      Object.values(this.$userBucket).forEach((item) => {
        if (!this.selectedWines.includes(item)) {
          this.selectedWines.push(item)
        }
      })
    },
    changeActiveShablone (newVal) {
      this.activeShablone = newVal
    },
    openFeedBackModal () {
      this.$openModal('FeedbackManadger')
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    toggleList (item) {
      if (this.selectedWines.includes(item)) {
        const index = this.selectedWines.findIndex(i => (i.wineData.article === item.wineData.article))
        this.selectedWines.splice(index, 1)
      } else {
        this.selectedWines.push(item)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";

  .wine-cart-main{
    .wine-cart-main__container{
      padding: 110px 0 50px 0;
      background: url("../assets/images/page-main_top.png"), #f4f4f4;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .wine-cart-main__top{
      display: flex;
      align-items: center;
    }
    .wine-cart-main__add-all{
      min-height: 40px;
      margin-left: 25px;
      margin-bottom: 20px;
    }
    .wine-cart-main__title{
      display: inline-block;
      @include FontStyle('Acrom', normal, #000000, 47px, 56px);
      margin-bottom: 30px;
      position: relative;
    }
    .wine-cart-main__subtitle{
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      margin-bottom: 25px;
    }
    .wine-cart-main__title:hover{
      .popup.wine-cart-main__popup{
        display: block;
        left: calc(100% + 34px);
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    .wine-cart-main__actions{
      margin-top: 55px;
      height: 68px;
      margin-bottom: 110px;
      .button{
        padding: 0 30px;
        .button__text{
          @include FontStyle('Acrom', normal, #FFFFFF, 20px, 24px);
        }
      }
      .button:first-child{
        margin-right: 12px;
      }
    }
    .wine-cart-main__warning{
      margin-top: 72px;
      display: flex;
      text-align: center;
      justify-content: center;
      @include FontStyle('Acrom', normal, #000000, 34px, 40px);
    }
    @media (max-width: 1450px) {
      .wine-cart-main__title{
        @include FontStyle('Acrom', normal, #000000, 30px, 36px);
        margin-bottom: 43px;
      }
      .wine-cart-main__add-all{
        margin-bottom: 38px;
      }
    }
    @media (max-width: 1080px) {
      .wine-cart-main__container{
        padding-top: 80px;
      }
      .wine-cart-main__actions{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: unset;
        margin-top: 40px;
        margin-bottom: 80px;
        .button{
          height: 68px;
        }
        .button:first-child{
          margin-bottom: 30px;
        }
      }

      .wine-cart-main__warning{
        margin-top: 30px;
        max-width: 684px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media (max-width: 767px) {

      .wine-cart-main__top{
        display: block;
      }
      .wine-cart-main__add-all{
        display: block;
        min-height: 40px;
        margin: 0 auto 20px auto;
      }
      .wine-cart-main__actions{
        margin-top: 0px;
        margin-bottom: 14px;
        .button{
          height: 40px;
          max-width: 100%;
          margin-right: 0 !important;
          margin-left: 0 !important;
          .button__text{
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
          }
        }
        .button:first-child{
          margin-bottom: 10px;
        }
        .button:last-child{
          &::after{
            display: block;
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
            content: 'Отправить менеджеру'
          }
          .button__text{
            display: none;
          }
        }

      }
      .wine-cart-main__container{
        padding-top: 40px;
      }
      .wine-cart-main__title{
        @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        /*margin-bottom: 102px;*/
        margin-bottom: 20px;
      }
      .wine-cart-main__subtitle{
        @include FontStyle('Acrom', normal, #000000, 14px, 15px);
      }
      .wine-cart-main__title.wine-cart-main__title-last{
        margin-bottom: 20px;
        max-width: 158px;
      }
      .wine-cart-main__warning{
        max-width: 270px;
        margin-left: auto;
        margin-right: auto;
        @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      }
    }

    @media (max-width: 500px) {
      .wine-cart-main__actions .button{
        width: 100%;
      }
    }
  }
</style>
