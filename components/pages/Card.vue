<template>
  <div class="card">
    <img :src="cardData.images[0]" alt="" class="card__img">
    <h5 class="card__title">
      {{ cardData.name }}
    </h5>
    <!--    <div class="card__description truncate-overflow">-->
    <!--      {{ cardData.description }}-->
    <!--    </div>-->
    <div v-if="cardData.prices.old_price" class="card__price-discounted">
      <span class="card__old-price">{{ cardData.prices.old_price }} ₽</span>
      <span class="card__discount">-{{ $calculateDiscount (cardData.prices.old_price, cardData.prices.price) }}%</span>
    </div>
    <div class="card__new-price">
      {{ cardData.prices.price }} ₽/шт
    </div>
    <div class="card__add-box">
      <AddBox :wineData="cardData"/>
      <Button :filled="true" :uppercase="true" :bold="true" @click="openWineCard">
        Посмотреть
      </Button>
    </div>
    <div class="card__actions">
<!--      <Discount class="card__icon-discount" />-->
<!--      <Favourite class="card__icon-favorite" />-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
    // Discount: () => import('assets/icons/icon-discount.svg'),
    // Favourite: () => import('assets/icons/icon-favourite.svg'),
    AddBox: () => import('../form/AddBox'),
    Button: () => import('../form/Button')
  },
  props: {
    cardData: {
      required: true,
      type: Object
    }
  },
  mounted () {},
  methods: {
    openWineCard () {
      this.$openModal('WineCard', this.cardData)
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

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .card {
    width: 25%;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    transition: all ease 0.3s;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:hover{
      filter: drop-shadow(0px 16px 32px rgba(48, 49, 51, 0.24));
      transform: scale(1.042);
      position: relative;
      z-index: 1;
      .card__add-box{
        display: flex;
        align-items: center;
        height: 40px;
      }
      .button{
        margin-left: 10px;
      }
      .card__new-price{
        margin-bottom: 0;
      }
    }
    .card__actions{
      position: absolute;
      top: 20px;
      left: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      svg{
        cursor: pointer;
        margin-bottom: 6px;
      }
    }
    .card__add-box{
      margin-top: 32px;
      display: none;
      margin-bottom: 47px;
    }
    .card__img{
      height: 318px;
      object-fit: contain;
    }
    .card__title{
      text-align: center;
      margin-bottom: 14px;
      @include FontStyle('TimesNewRoman', normal, #710000, 25px, 29px);
    }
    .card__description{
      text-align: center;
      margin-bottom: 40px;
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      --lh: 22px;
      line-height: var(--lh);
      --max-lines: 2;
      max-height: calc(var(--lh) * var(--max-lines));
      overflow: hidden;
      position: relative;
    }
    .card__price-discounted{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 10px;
      flex: 1 1 auto;
    }
    .card__old-price{
      text-decoration: line-through;
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    .card__discount{
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
    .card__new-price{
      @include FontStyle('Acrom', bold, #000000, 25px, 30px);
      margin-bottom: 119px;
    }
    @media (max-width: 1240px) {
      width: 33.33%;
    }
    @media (max-width: 1080px) {
      width: 50%;
      .card__title{
        font-size: 25px;
        line-height: 29px;
        margin-top: 7px;
      }
      .card__description{
        font-size: 18px;
        line-height: 22px;
      }
      .card__price-discounted{
        font-size: 18px;
        line-height: 22px;
      }
      .card__old-price{
        font-size: 18px;
        line-height: 22px;
      }
      .card__discount{
        font-size: 18px;
        line-height: 22px;
      }
      .card__new-price{
        font-size: 25px;
        line-height: 30px;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      .card__add-box{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 100%;
      }
      .button {
        margin-left: 10px;
      }

      &:hover{
        filter: none;
        transform: scale(1);
        .card__add-box{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
        }
      }
      .card__new-price{
        margin-bottom: 0;
      }
    }
  }
</style>
