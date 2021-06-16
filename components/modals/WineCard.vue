<template>
  <div class="card-modal" @click.stop="">
    <Close class="svg-close" @click="close" />
    <div class="card-modal__left">
      <SearchPlus class="svg-SearchPlus" />
      <img :src="data.images[0]" alt="">
    </div>
    <div class="card-modal__right">
      <div class="card-modal__title">
        {{ data.name }}
      </div>
      <div class="card-modal__attr">
        Арт. {{ data.article }}
      </div>
      <div class="card-modal__parrams-box">
        <template v-for="(art, index) in data.attributes">
          <div
            v-if="index < 7"
            :key="index"
            class="card-modal__parram parram"
          >
            <span class="parram__key">{{ art.name }}: </span>
            <span class="parram__value">{{ art.text }}</span>
          </div>
        </template>
      </div>
      <div class="card-modal__devider" />
      <div v-if="data.prices.old_price" class="card-modal__price-discounted">
        <span class="card-modal__old-price">{{ data.prices.old_price | number }} ₽</span>
        <span class="card-modal__discount">
          -{{ $calculateDiscount (data.prices.old_price, data.prices.price) }}%
        </span>
      </div>
      <div class="card-modal__new-price">
        {{ data.prices.price | number }} ₽/шт
      </div>
      <div class="card-modal__add-box">
        <AddBox :wine-data="data" />
        <Button :filled="true" @click="addToBucket">
          Добавить в корзину
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin'

export default {
  name: 'WineCard',
  components: {
    Button: () => import('../form/Button'),
    AddBox: () => import('../form/AddBox'),
    SearchPlus: () => import('assets/icons/SearchPlus.svg'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin],

  created () {
    this.$bus.on('clickModalWrapper', this.close)
  },
  beforeDestroy () {
    this.$bus.off('clickModalWrapper', this.close)
  },
  methods: {
    addToBucket () {
      if (this.$userBucket[this.data.article]) {
        this.$store.commit('bucket/SET_TO_BUCKET', {
          wineData: this.data,
          count: +(this.$userBucket[this.data.article].count + 1),
          userType: this.$cookies.get('userType')
        })
      } else {
        this.$store.commit('bucket/SET_TO_BUCKET', {
          wineData: this.data,
          count: 1,
          userType: this.$cookies.get('userType')
        })
      }
      this.close()
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .card-modal {
    width: 1024px;
    height: 609px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    .card-modal__left{
      max-height: 100%;
      padding: 0 82px 0 66px;
      position: relative;
      img{
        max-height: 442px;
        max-width: 196px;
      }
      .svg-SearchPlus{
        top: 60px;
        left: 60px;
        cursor: pointer;
        position: absolute;
      }
    }
    .card-modal__right{
      flex: 1 1 auto;
      margin-right: 72px;
      max-height: 100%;
      overflow: auto;
    }
    .card-modal__title{
      @include FontStyle('TimesNewRoman', normal, #710000, 36px, 41px);
      margin-bottom: 20px;
    }
    .card-modal__attr{
      @include FontStyle('Acrom', normal, #000000, 20px, 140%);
      margin-bottom: 38px;
    }
    .card-modal__parrams-box{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 175px;
    }
    .card-modal__parram{
      width: calc(50% - 36px);
      margin-right: 18px;
      .parram__key{
        display: inline-block;
        min-width: 50px;
        @include FontStyle('Acrom', normal, #828282, 16px, 30px);
      }
      .parram__value{
        @include FontStyle('Acrom', normal, #000000, 16px, 30px);
      }
    }
    .card-modal__devider{
      margin-top: 32px;
      width: 100%;
      height: 2px;
      background: #710000;
    }
    .card-modal__price-discounted{
      margin-top: 28px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .card-modal__old-price{
      text-decoration: line-through;
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    .card-modal__discount{
      height: 26px;
      background: #710000;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      margin-left: 10px;
      @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
    }
    .card-modal__new-price{
      margin-top: 18px;
      @include FontStyle('Acrom', bold, #000000, 35px, 42px);
    }
    .card-modal__add-box{
      margin-top: 42px;
      display: flex;
      height: 40px;
      .button{
        margin-left: 10px;
        span{
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }

    @media (max-width: 1080px) {
      height: unset;
      width: 707px;
      align-items: end;
      padding-bottom: 37px;
      max-height: calc(100vh - 73px);
      overflow: auto;
      .card-modal__left{
        padding-right: 18px;
        padding-left: 30px;
        .svg-SearchPlus{
          top: 30px;
          left: 41px;
        }
      }
      .card-modal__right{
        margin-top: 55px;
      }
      .card-modal__right{
        margin-right: 37px;
      }
      .card-modal__parrams-box{
        flex-direction: column;
      }

    }

    @media (max-width: 767px) {
      height: unset;
      width: 300px;
      max-height: calc(100vh - 80px);
      transform: translate(-50%, calc(-50% + -10px));
      overflow: auto;
      flex-direction: column;
      padding: 0 15px 40px 15px;

      .card-modal__left{
        padding: 0;
        margin: 0 auto;
        max-height: 326px;
        img{
          max-height: 326px;
        }
        .svg-SearchPlus{
          left: -14px;
        }
      }
      .card-modal__parrams-box{
        max-height: unset;
      }

      .card-modal__right{
        margin: 0;
        margin-top: 28px;
      }

      .card-modal__title{
        @include FontStyle('TimesNewRoman', normal, #710000, 25px, 29px);
        margin-bottom: 14px;
      }
      .card-modal__attr{
        @include FontStyle('Acrom', normal, #000000, 18px, 22px);
        margin-bottom: 30px;
      }
      .card-modal__parram.parram{
        width: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        .parram__key{
          width: 100px;
        }
      }

      .card-modal__price-discounted{
        margin-top: 39px;

      }
      .card-modal__new-price{
        margin-top: 10px;
        @include FontStyle('Acrom', bold, #000000, 25px, 30px);
      }
      .card-modal__add-box{
        margin-top: 34px;
      }
    }
  }
</style>
