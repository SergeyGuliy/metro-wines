<template>
  <div class="bucket-card" @click.stop="$openProductModal(wineData.wineData)">
    <div class="bucket-card__img-box">
      <img :src="wineData.wineData.images[0]" alt="">
    </div>
    <div class="bucket-card__title-box">
      <div class="bucket-card__title">
        {{ wineData.wineData.name }}
      </div>
      <div class="bucket-card__article">
        Арт. {{ wineData.wineData.article }}
      </div>
    </div>
    <div class="bucket-card__price-box">
      <div class="bucket-card__price-total">
        {{ wineData.wineData.prices.price * wineData.count }} ₽
      </div>
      <div class="bucket-card__price-item">
        {{ wineData.wineData.prices.price }} ₽/шт
      </div>
    </div>
    <AddBox :wine-data="wineData.wineData" />
  </div>
</template>

<script>
export default {
  name: 'BucketCard',
  components: {
    AddBox: () => import('../../form/AddBox')
  },
  props: {
    wineData: {
      type: Object
    }
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.wineData)
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .bucket-card {
    height: 124px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: space-between;
    .bucket-card__img-box{
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 19px 0;
      margin-right: 63px;
      img{
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .bucket-card__title-box{
      max-width: 340px;
    }
    .bucket-card__title{
      @include FontStyle('TimesNewRoman', normal, #710000, 20px, 23px);
      margin-bottom: 2px;
    }
    .bucket-card__article{
      @include FontStyle('Acrom', normal, #000000, 14px, 17px);
    }
    .bucket-card__price-box{
      width: 309px;
      padding-left: 38px;
    }
    .bucket-card__price-total{
      @include FontStyle('Acrom', bold, #000000, 20px, 24px);
      margin-bottom: 2px;
    }
    .bucket-card__price-item{
      @include FontStyle('Acrom', normal, #000000, 14px, 17px);
    }
    .add-box{
      max-height: 41px;
    }

    @media (max-width: 1080px) {
      .bucket-card__price-box{
        padding-left: 28px;
        max-width: 213px;
        min-width: 213px;
      }
      .bucket-card__title-box{
        max-width: 340px;
      }
      .add-box{
        max-height: 41px;
        width: 100%;
        max-width: 118px;
        min-width: unset;
        .add-box__minus, .add-box__plus{
          padding: 0;
          max-width: 25px;
        }
      }
    }
    @media (max-width: 767px) {
      height: unset;
      flex-wrap: wrap;
      padding-bottom: 20px;
      .bucket-card__img-box{
        margin-right: 15px;
      }
      .bucket-card__title-box{
        max-width: 210px;
      }
      .bucket-card__price-box{
        padding: 0;
        max-width: 50%;
        min-width: unset;
      }
    }
  }
</style>
