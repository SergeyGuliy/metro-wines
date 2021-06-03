<template>
  <div class="bucket-user-modal">
    <Close class="svg-close" @click="close" />
    <div class="bucket-user-modal__outset">
      <div class="bucket-user-modal__title">
        Ваша корзина
      </div>
      <div class="bucket-user-modal__devider" />
      <div class="bucket-user-modal__body">
        <BucketCard
          v-for="(item, index) in $userBucket"
          :key="index"
          :wine-data="item"
        />
      </div>
    </div>
    <div class="bucket-user-modal__footer">
      <div class="bucket-user-modal__symm">
        Всего товаров на сумму:
        <span class="bucket-user-modal__symm-inner">{{ $getTotalPrice | number }} ₽</span>
      </div>
      <div class="bucket-user-modal__actions">
        <Button :rounded="true" :uppercase="true" :bold="true" @click="$downloadXLS">
          Скачать спецификацию
        </Button>
        <Button :filled="true" :uppercase="true" :bold="true" @click="close(true)">
          Оформить заказ
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from './modalMixin'

export default {
  name: 'BucketUser',
  components: {
    Button: () => import('../form/Button'),
    BucketCard: () => import('./components/BucketCard'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin],
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .bucket-user-modal {
    width: 1024px;
    max-height: 609px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding-top: 30px;
    .bucket-user-modal__outset{
      margin: 0 20px;
    }
    .bucket-user-modal__title{
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
    }
    .bucket-user-modal__devider{
      background: #710000;
      width: 100%;
      height: 2px;
      margin-top: 9px;
    }
    .bucket-user-modal__body{
      height: 457px;
      margin-top: 15px;
      overflow: auto;
    }
    .bucket-user-modal__footer{
      padding: 0 20px;
      height: 90px;
      width: 100%;
      background: #F4F3F1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0 0 5px 5px;
    }
    .bucket-user-modal__symm{
      @include FontStyle('Acrom', bold, #000000, 16px, 19px);
    }
    .bucket-user-modal__symm-inner{
      @include FontStyle('Acrom', bold, #000000, 25px, 30px);
    }
    .bucket-user-modal__actions{
      height: 40px;
      .button:first-child{
        margin-right: 15px;
      }
    }

    @media (max-width: 1080px) {
      width: 708px;
      max-height: 609px;
      padding-top: 20px;
      .bucket-user-modal__outset{
        margin: 0 30px;
      }
      .bucket-user-modal__footer{
        padding: 0 30px;
      }
      .bucket-user-modal__symm{
        display: flex;
        flex-direction: column;
      }
    }

    @media (max-width: 767px) {
      width: 100vw;
      height: 100vh;
      filter: unset;
      position: fixed;
      top: 0;
      left: 0;
      transform: translate(0, 0) !important;
      border-radius: 0;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      max-height: 100vh;
      /*.svg-close{*/
      /*  display: none;*/
      /*}*/
      .bucket-user-modal__outset{
        flex: 1 1 auto;
        max-height: calc(100vh - 122px);
        margin: 0;
      }
      .bucket-user-modal__body{
        flex: 1 1 auto;
        height: unset;
        overflow: auto;
        max-height: calc(100vh - 191px);
        .bucket-card{
          /*padding: 0 30px;*/
          padding-right: 30px;
          padding-left: 30px;
        }
      }
      .bucket-user-modal__devider{
        margin: 0 30px;
        width: unset;
      }
      .bucket-user-modal__title{
        margin: 0 30px;
        margin-bottom: 10px;
        @include FontStyle('Acrom', normal, #000000, 20px, 24px);
      }
      .bucket-user-modal__symm{
        @include FontStyle('Acrom', bold, #000000, 12px, 14px);
      }
      .bucket-user-modal__symm-inner{
        @include FontStyle('Acrom', bold, #000000, 18px, 22px);
      }
      .bucket-user-modal__footer{
        background: #F4F3F1;
        bottom: 0;
        left: 0;
        height: 122px;
        flex-direction: column;
        align-items: baseline;
        padding: 14px 20px 20px 20px;
        .bucket-user-modal__actions{
          display: flex;
        }
      }

    }

  }
</style>
