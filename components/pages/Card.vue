<template>
  <div class="card">
    <img src="../../assets/images/mock-wine.png" alt="" class="card__img">
    <h5 class="card__title">
      LOREM IPSUM DOLOR
    </h5>
    <div class="card__description">
      Lorem ipsum dolor sit amet, adipiscing elit
    </div>
    <div class="card__price-discounted">
      <span class="card__old-price">1235,99 ₽</span>
      <span class="card__discount">-15%</span>
    </div>
    <div class="card__new-price">
      1235,99 ₽/шт
    </div>
    <div class="card__add-box">
      <AddBox />
      <Button :filled="true" @click="openWineCard">
        Посмотреть
      </Button>
    </div>
    <div class="card__actions">
      <Discount class="card__icon-discount" />
      <Favourite class="card__icon-favorite" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
    Discount: () => import('assets/icons/icon-discount.svg'),
    Favourite: () => import('assets/icons/icon-favourite.svg'),
    AddBox: () => import('../form/AddBox'),
    Button: () => import('../form/Button')
  },
  data () {
    return {}
  },
  methods: {
    openWineCard () {
      this.$openModal('WineCard', {})
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
      margin-bottom: 14px;
      @include FontStyle('TimesNewRoman', normal, #710000, 25px, 29px);
    }
    .card__description{
      text-align: center;
      margin-bottom: 40px;
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    .card__price-discounted{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
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
  }
</style>
