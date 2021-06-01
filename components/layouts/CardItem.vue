<template>
  <div class="card-item">
    <img :src="wineData.wineData.images[0]" alt="" class="card-item__img">
    <div class="card-item__box">
      <h5 class="card-item__title">
        {{ wineData.wineData.name }}
      </h5>
<!--      <div class="card-item__description">-->
<!--        {{ wineData.wineData.description }}-->
<!--      </div>-->
    </div>
    <div class="card-item__add-box">
      <div class="card-item__price-box">
        <div class="card-item__price-item">
          {{ wineData.wineData.prices.price | number }} ₽/шт
        </div>
        <div class="card-item__price-total">
          {{ (wineData.wineData.prices.price * wineData.count) | number }} ₽
        </div>
      </div>
      <AddBox :wine-data="wineData.wineData" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
    AddBox: () => import('../form/AddBox')
  },
  props: {
    wineData: {
      type: Object
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .card-item {
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
    }
    .card-item__add-box{
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 32px;
      margin-bottom: 47px;
      width: 100%;
    }
    .add-box{
      max-height: 41px;
      max-width: 118px;
      min-width: 118px;
    }
    .card-item__price-item{
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    .card-item__price-total{
      margin-top: 8px;
      @include FontStyle('Acrom', bold, #000000, 25px, 30px);
    }
    .card-item__img{
      height: 318px;
      object-fit: contain;
    }
    .card-item__title{
      margin-bottom: 14px;
      align-self: flex-start;
      text-align: center;
      @include FontStyle('TimesNewRoman', normal, #710000, 25px, 29px);
    }
    .card-item__description{
      align-self: flex-start;
      margin-bottom: 40px;
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    @media (max-width: 1450px) {
      width: 33.33%;
    }
    @media (max-width: 1080px) {
      width: 50%;
    }
    @media (max-width: 767px) {
      padding: 0 10px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: end;
      .card-item__img{
        max-height: 100px;
        margin-top: 15px;
        margin-right: 15px;
      }
      .card-item__title{
        margin-top: 22px;
        @include FontStyle('TimesNewRoman', normal, #710000, 20px, 23px);
      }
      .card-item__description{
        display: none;
      }
      .card-item__box{
        max-width: calc(100% - 45px);
        flex: 1 1 auto;
      }
      .card-item__add-box{
        padding: 0 10px;
        align-items: center;
        flex-direction: row-reverse;
        margin: 15px 0;
        .card-item__price-item{
          display: none;
        }
        .card-item__price-total{
          margin-top: 0;
          @include FontStyle('Acrom', bold, #000000, 18px, 22px);
        }
      }
    }
  }
</style>
