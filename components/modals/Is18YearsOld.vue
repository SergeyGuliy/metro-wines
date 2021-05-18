<template>
  <div class="old-modal">
    <div class="old-modal__left">
      <img src="../../assets/images/bottle.png" alt="">
      <div class="old-modal__18">
        18+
      </div>
    </div>
    <div class="old-modal__right">
      <div class="old-modal__title">
        Для доступа на сайт необходимо подтвердить возраст
      </div>
      <div class="old-modal__description">
        Сайт содержит информацию, не рекомендованную для лиц, не достигших совершеннолетнего возраста. Сведения, размещенные на сайте, носят исключительно информационный характер и предназначены только для личного использования.
      </div>
      <div class="old-modal__buttons">
        <Button :filled="true" @click="close(true)">
          Мне исполнилось 18 лет
        </Button>
        <Button :filled="true" @click="close()">
          Мне меньше 18 лет
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from './modalMixin'
export default {
  name: 'Is18YearsOld',
  components: {
    Button: () => import('../form/Button')
  },
  mixins: [modalMixin],

  data () {
    return {}
  }
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
    .old-modal__left{
      max-height: 100%;
      flex: 1 1 auto;
      position: relative;
      img{
        max-width: 230px;
        max-height: 610px;
        display: block;
        margin: 0 auto;
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
        margin: 32px 0;
        @include FontStyle('Acrom', normal, #000000, 20px, 140%);
      }
      .old-modal__buttons{
        height: 40px;
        .button{
          padding: 0 20px;
          span{
            text-transform: uppercase;
          }
        }
        .button:first-child{
          margin-right: 10px;

        }
      }
    }
  }
</style>
