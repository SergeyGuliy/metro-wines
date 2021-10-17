<template>
  <div class="notification-modal">
    <Close class="svg-close" @click="close" />
    <Submit />
    <div class="notification-modal__title">
      Сообщение успешно
      отправлено!
    </div>
    <div v-if="!data.hideSub" class="notification-modal__subtitle">
      Наш специалист свяжется с вами для уточнениния деталей.
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin'
export default {
  name: 'Notification',
  components: {
    Close: () => import('assets/icons/close.svg'),
    Submit: () => import('assets/icons/submit.svg')
  },
  mixins: [modalMixin],
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        text: ''
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .notification-modal {
    width: 503px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    max-height: calc(100vh - 73px);
    overflow: auto;
    padding: 53px 30px 37px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .notification-modal__title{
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
      margin-bottom: 13px;
      margin-top: 22px;
      text-align: center;
    }
    .notification-modal__subtitle{
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      text-align: center;
    }

    @media (max-width: 1080px) {

    }

    @media (max-width: 767px) {
      max-width: 300px;
      min-width: 300px;
      padding: 25px 15px 25px 15px;
      .notification-modal__title{
        @include FontStyle('Acrom', normal, #000000, 22px, 24px);
        margin-bottom: 8px;
        margin-top: 16px;
        text-align: center;
      }
      .notification-modal__subtitle{
        @include FontStyle('Acrom', normal, #000000, 16px, 14px);
        text-align: center;
      }
    }
  }
</style>
