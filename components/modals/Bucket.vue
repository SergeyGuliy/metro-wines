<template>
  <div class="bucket-modal">
    <Close class="svg-close" @click="close" />
    <div class="bucket-modal__outset">
      <div class="bucket-modal__title">
        Ваша корзина
      </div>
      <div class="bucket-modal__devider" />
      <div class="bucket-modal__body">
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
      </div>
    </div>
    <div class="bucket-modal__footer">
      <div class="bucket-modal__symm">
        Всего товаров на сумму:
        <span class="bucket-modal__symm-inner">12 358,12 ₽</span>
      </div>
      <div class="bucket-modal__actions">
        <Button :rounded="true" :uppercase="true" :bold="true" @click="close(true)">
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
  name: 'Bucket',
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

  .bucket-modal {
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
    margin: 0 20px;
    .bucket-modal__outset{
      margin: 0 20px;
    }
    .bucket-modal__title{
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
    }
    .bucket-modal__devider{
      background: #710000;
      width: 100%;
      height: 2px;
      margin-top: 9px;
    }
    .bucket-modal__body{
      height: 457px;
      margin-top: 15px;
      overflow: auto;
    }
    .bucket-modal__footer{
      padding: 0 20px;
      height: 90px;
      width: 100%;
      background: #F4F3F1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .bucket-modal__symm{
      @include FontStyle('Acrom', bold, #000000, 16px, 19px);
    }
    .bucket-modal__symm-inner{
      @include FontStyle('Acrom', bold, #000000, 25px, 30px);
    }
    .bucket-modal__actions{
      height: 40px;
      .button:first-child{
        margin-right: 15px;
      }
    }

  }
</style>
