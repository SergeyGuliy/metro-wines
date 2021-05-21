<template>
  <div class="card-item">
    <img src="../../assets/images/mock-wine.png" alt="" class="card-item__img">
    <h5 class="card-item__title">
      LOREM IPSUM DOLOR
    </h5>
    <div class="card-item__description">
      Lorem ipsum dolor sit amet, adipiscing elit
    </div>
    <div class="card-item__add-box">
      <div class="card-item__price-box">
        <div class="card-item__price-item">
          1235,99 ₽/шт
        </div>
        <div class="card-item__price-total">
          12 358,12 ₽
        </div>
      </div>
      <AddBox />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
    AddBox: () => import('../form/AddBox')
  },
  data () {
    return {}
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
      width: 100%;
    }
  }
</style>
