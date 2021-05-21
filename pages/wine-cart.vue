<template>
  <div class="wine-cart-main">
    <Hero />
    <div class="wine-cart-main__container">
      <div class="container">
        <div class="wine-cart-main__title">
          В вашей винной карте 111 вин
        </div>
        <WineCartList />
        <div class="wine-cart-main__actions">
          <Button :filled="true" :uppercase="true">
            Скачать EXCEL для заказа
          </Button>
          <Button :filled="true" :uppercase="true">
            Отправить ассортимент менеджеру
          </Button>
        </div>

        <div class="wine-cart-main__title wine-cart-main__title-last">
          Выберите шаблон для винной карты
        </div>
        <WIneConstructor />
        <div class="wine-cart-main__warning">
          ЧРЕЗМЕРНОЕ ПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    WineCartList: () => import('../components/layouts/WineCartList'),
    WIneConstructor: () => import('../components/layouts/WIneConstructor'),
    Button: () => import('../components/form/Button')
    // FilterBox: () => import('../components/pages/FilterBox'),
    // Catalog: () => import('../components/pages/Catalog')
  },
  created () {
    // this.openInitModals()

    // this.$openModal('Bucket')
    //   .then(() => this.$openModal('WineOwner'))
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  },
  methods: {
    openInitModals () {
      this.$openModal('Is18YearsOld')
        .then(() => this.$openModal('WineOwner'))
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

<style lang="scss">
  @import "@/assets/styles/mixins.scss";

  .wine-cart-main{
    .wine-cart-main__container{
      padding: 110px 0 50px 0;
      background: url("../assets/images/page-main_top.png"), #f4f4f4;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .wine-cart-main__title{
      @include FontStyle('Acrom', normal, #000000, 47px, 56px);
      margin-bottom: 40px;
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
      .wine-cart-main__actions{
        margin-top: 20px;
        margin-bottom: 50px;
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
        margin-bottom: 102px;
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
