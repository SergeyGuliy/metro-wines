<template>
  <div class="bucket-card">
    <div class="bucket-card__img-box">
      <img src="../../../assets/images/mock-wine.png" alt="">
    </div>
    <div class="bucket-card__title-box">
      <div class="bucket-card__title">MAKEDONSKO CRVENO STOBI WINERY </div>
      <div class="bucket-card__article">Арт. 448800</div>
    </div>
    <div class="bucket-card__price-box">
      <div class="bucket-card__price-total">12 358,12 ₽</div>
      <div class="bucket-card__price-item">1235,99 ₽/шт</div>
    </div>
    <AddBox />
  </div>
</template>

<script>
export default {
  name: 'BucketCard',
  components: {
    AddBox: () => import('../../form/AddBox')
  },
  data () {
    return {}
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
      }
    }
    .bucket-card__title-box{
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
      }
    }
  }
</style>
