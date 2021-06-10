<template>
  <div class="old-modal">
    <div class="old-modal__left">
      <img class="old-modal__img-big" src="../../assets/images/bottle.png" alt="">
      <img class="old-modal__img-medium" src="../../assets/images/bottle-2.jpg" alt="">
      <div class="old-modal__18">
        18+
      </div>
    </div>
    <div class="old-modal__right">
      <div class="old-modal__18-small">
        18+
      </div>
      <div class="old-modal__title">
        Для доступа на сайт необходимо подтвердить возраст
      </div>
      <div class="old-modal__description">
        Сайт содержит информацию, не рекомендованную для лиц, не достигших совершеннолетнего возраста. Сведения, размещенные на сайте, носят исключительно информационный характер и предназначены только для личного использования.
      </div>
      <div class="old-modal__buttons">
        <Button :filled="true" :uppercase="true" :bold="true" @click="close(true)">
          Мне исполнилось 18 лет
        </Button>
<!--        <Button :filled="true" :uppercase="true" :bold="true" @click="close()">-->
<!--          Мне меньше 18 лет-->
<!--        </Button>-->
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin'
export default {
  name: 'Is18YearsOld',
  components: {
    Button: () => import('../form/Button')
  },
  mixins: [modalMixin]

}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .old-modal {
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
    .old-modal__18-small{
      display: none;
    }
    .old-modal__left{
      max-height: 100%;
      flex: 1 1 auto;
      position: relative;
      .old-modal__img-big{
        max-width: 230px;
        max-height: 610px;
        display: block;
        margin: 0 auto;
      }
      .old-modal__img-medium{
        display: none;
      }
    }
    .old-modal__18{
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, 0%);
      @include FontStyle('TimesNewRoman', bold, #ffffff, 120px, 144px);
    }
    .old-modal__right{
      width: 564px;
      display: flex;
      flex-direction: column;
      .old-modal__title{
        text-transform: uppercase;
        @include FontStyle('TimesNewRoman', normal, #710000, 36px, 41px);
      }
      .old-modal__description{
        padding-right: 15px;
        margin: 32px 0;
        @include FontStyle('Acrom', normal, #000000, 20px, 140%);
      }
      .old-modal__buttons{
        height: 40px;
        .button{
          padding: 0 18.5px;
          span{
            text-transform: uppercase;
          }
        }
        .button:first-child{
          margin-right: 10px;

        }
      }
    }

    @media (max-width: 1080px) {
      width: 708px;
      max-height: calc(100vh - 40px);
      overflow: auto;
      .old-modal__left{
        margin-left: 14px;
        margin-right: 29px;
        .old-modal__img-big{
          display: none;
        }
        .old-modal__img-medium{
          display: block;
        }
      }
      .old-modal__right {
        .old-modal__title {
        }
      }
      .old-modal__title{
        max-width: 420px;
      }

    }

    @media (max-width: 767px) {
      width: 300px;
      max-height: calc(100vh - 73px);
      overflow: auto;
      align-items: baseline;
      height: 520px;
      .old-modal__18-small{
        display: block;
        margin-bottom: 7px;
        @include FontStyle('Acrom', bold, #710000, 50px, 60px);
      }
      .old-modal__left{
        display: none;
      }
      .old-modal__right{
        padding: 23px 20px 0 20px;
        .old-modal__title{
          margin-bottom: 7px;
          @include FontStyle('TimesNewRoman', normal, #710000, 20px, 23px);
        }
        .old-modal__description{
          margin-top: 0;
          @include FontStyle('Acrom', normal, #000000, 16px, 140%);
        }
      }
      .old-modal__buttons{
        display: flex;
        flex-direction: column;
        height: unset !important;
        .button{
          width: 100%;
          height: 40px;
          min-height: 40px;
        }
        .button:first-child{
          margin-bottom: 18px;
        }
        .button:last-child{
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
