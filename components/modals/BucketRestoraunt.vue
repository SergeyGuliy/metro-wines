<template>
  <div class="bucket-restoraunt" :style="positionWithActivator" @click.stop="">
    <div v-if="!Object.keys($userBucket).length" class="bucket-restoraunt__empty">
      <div class="bucket-restoraunt__title">
        Вы пока не выбрали ни одного вина для своей будущей винной карты
      </div>
      <div class="bucket-restoraunt__actions">
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
        >
          перейтик выбору
        </Button>
      </div>
    </div>
    <div v-else class="bucket-restoraunt__filled">
      <div class="bucket-restoraunt__title">
        Корзина
      </div>

      <div class="bucket-restoraunt__devider" />
      <div class="bucket-restoraunt__body">
        <!--        <pre>{{ $userBucket }}</pre>-->
        <template v-for="(item, index) in $userBucket">
          <div :key="index" class="bucket-restoraunt__card r-card">
            <Close class="svg-close" @click="close" />
            <img :src="item.wineData.images[0]" alt="" class="r-card__img">
            <div class="r-card__right">
              <div class="r-card__title">
                {{ item.wineData.name }}
              </div>
              <div class="r-card__atricle">
                Арт. {{ item.wineData.article }}
              </div>
              <div class="r-card__actions big">
                <AddBox :wine-data="item.wineData" />
                <div class="r-card__price">
                  {{ item.wineData.prices.price }} ₽
                </div>
              </div>
            </div>
            <div class="r-card__actions small">
              <AddBox :wine-data="item.wineData" />
              <div class="r-card__price">
                {{ item.wineData.prices.price }} ₽
              </div>
            </div>
          </div>
          <div :key="index + 10000" class="bucket-restoraunt__card-border" />
        </template>
      </div>
      <div class="bucket-restoraunt__devider" />
      <div class="bucket-restoraunt__actions">
        <div class="bucket-restoraunt__top">
          <div class="bucket-restoraunt__total">
            {{ Object.keys($userBucket).length }} товаров
          </div>
          <div class="bucket-restoraunt__right">
            <div class="bucket-restoraunt__old">
              {{ $getTotalDiscount }} ₽
            </div>
            <div class="bucket-restoraunt__current">
              {{ $getTotalPrice }} ₽
            </div>
          </div>
        </div>
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
          @click="goToWineCard"
        >
          Перейти в винную карту
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import modalMixin from './modalMixin'

export default {
  name: 'BucketRestoraunt',
  components: {
    Button: () => import('../form/Button'),
    AddBox: () => import('../form/AddBox'),
    Close: () => import('assets/icons/close.svg')
  },
  directives: {
    ClickOutside
  },
  mixins: [modalMixin],
  data () {
    return {
      itemsLength: 1
    }
  },
  created () {
    this.$bus.on('clickModalWrapper', this.close)
  },
  beforeDestroy () {
    this.$bus.off('clickModalWrapper', this.close)
  },
  methods: {
    goToWineCard () {
      this.$router.push({ name: 'wine-cart' })
      this.close()
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .bucket-restoraunt {
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px 0;
    width: 378px;
    .r-card__actions.small{
      display: none !important;
    }
    .bucket-restoraunt__empty{
      .bucket-restoraunt__title{
        margin-bottom: 24px;
      }
    }
    .bucket-restoraunt__title{
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
      margin-bottom: 9px;
      padding: 0 30px;
    }
    .bucket-restoraunt__devider{
      background: #710000;
      height: 2px;
      margin: 0 30px;
    }
    .bucket-restoraunt__actions{
      padding: 0 30px;
      .button{
        width: 100%;
        height: 40px;
      }
      .bucket-restoraunt__top{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 25px 0;

      }
      .bucket-restoraunt__total{
        @include FontStyle('Acrom', bold, #000000, 14px, 17px);
      }
      .bucket-restoraunt__right{

      }
      .bucket-restoraunt__old{
        @include FontStyle('Acrom', normal, #000000, 18px, 22px);
        text-align: right;
        text-decoration-line: line-through;
      }
      .bucket-restoraunt__current{
        @include FontStyle('Acrom', bold, #000000, 25px, 30px);
        text-align: right;
      }
    }
    .bucket-restoraunt__body{
      max-height: 560px;
      overflow: auto;
    }
    .bucket-restoraunt__card.r-card{
      padding: 0 30px;
      margin: 10px 0 15px 0;
      display: flex;
      position: relative;
      .svg-close{
        top: 10px;
        right: 30px;
        transform: scale(0.7);
      }
      .r-card__img{
        max-width: 30px;
        max-height: 100px;
        margin: 0 15px;
        object-fit: cover;
      }
      .r-card__right{

      }
      .r-card__title{
        @include FontStyle('TimesNewRoman', normal, #710000, 20px, 23px);
        margin-top: 10px;
        max-width: 90%;
      }
      .r-card__atricle{
        @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        margin-top: 10px;
        margin-bottom: 16px;
      }
      .r-card__actions{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add-box{
          height: 41px;
        }
      }
      .r-card__price{
        @include FontStyle('Acrom', bold, #000000, 18px, 22px);
      }
    }
    .bucket-restoraunt__card-border{
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      opacity: 0.1;
      transform: rotate(-180deg);
      height: 6px;
      margin-bottom: 5px;
    }
    .r-card__actions.small{
      display: none;
    }

    @media (max-width: 1080px) {

    }

    @media (max-width: 767px) {
      width: 300px;
      top: calc(100vh - 366px);
      filter: unset;
      position: static;
      transform: unset !important;
      margin-top: calc(100vh - 570px);
      margin-left: auto;
      margin-right: auto;
      height: 450px;
      .bucket-restoraunt__actions{
        position: fixed;
        background: #F4F3F1;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 122px;
        flex-direction: column;
        align-items: baseline;
        padding: 14px 20px 20px 20px;
        .bucket-restoraunt__top{
          margin: 0;
          margin-bottom: 11px;
        }
        .bucket-restoraunt__total{
          @include FontStyle('Acrom', bold, #000000, 12px, 14px);
        }
        .bucket-restoraunt__old{
          @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        }
        .bucket-restoraunt__current{
          @include FontStyle('Acrom', bold, #000000, 18px, 22px);
        }
      }
      .bucket-restoraunt__title{
        @include FontStyle('Acrom', normal, #000000, 20px, 24px);
      }
      .bucket-restoraunt__body{
        height: 394px;
      }
      .bucket-restoraunt__card.r-card {
        flex-wrap: wrap;
        padding: 0 20px;
        .r-card__actions.big {
          display: none;
        }
        .r-card__right{
          max-width: calc(100% - 60px);
        }
      }
      .r-card__actions.small{
        display: flex !important;
        justify-content: space-between;
        width: 100%;
        .add-box{
          max-width: 118px;
          min-width: unset;
        }
      }
    }
  }
</style>
