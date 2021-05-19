<template>
  <div class="footer container">
    <div class="footer-col">
      <img src="../../assets/images/metro.png" alt="" class="img-metro">
    </div>
    <div class="footer-col">
      <div class="footer__title">
        Горячая линия METRO
      </div>
      <a href="#" class="footer__contact">
        <div class="footer__svg-box">
          <Phone />
        </div>
        <span>8-800-700-10-77</span>
      </a>
      <div class="footer__work-time">
        Будни: с 7 до 22 часов<br>
        Выходные: с 8 до 22 часов
      </div>
      <a href="#" class="footer__contact">
        <div class="footer__svg-box">
          <Email />
        </div>
        <span>Обратная связь</span>
      </a>
    </div>
    <div class="footer-col">
      <div class="footer__title mb-0">
        Подпишитесь
      </div>
      <div class="footer__title">
        на лучшие предложения
      </div>
      <InputBox v-model="email" class="footer-col__input" placeholder="E-mail">
        <template #append>
          <Button :outlined="true" @click="openFeedBackModal">
            Подписаться
          </Button>
        </template>
      </InputBox>
    </div>
    <div class="footer-col">
      <div class="footer__link-box">
        <nuxt-link to="" class="footer__link">
          Конфиденциальность
        </nuxt-link>
        <nuxt-link to="" class="footer__link">
          Правовая информация
        </nuxt-link>
        <nuxt-link to="" class="footer__link">
          Условия соглашения
        </nuxt-link>
        <nuxt-link to="" class="footer__link">
          Условия доставки
        </nuxt-link>
        <nuxt-link to="" class="footer__link">
          Карта сайта
        </nuxt-link>
      </div>
      <div class="footer__copyrights">
        © METRO Cash and Carry Russia, 2021
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
    Phone: () => import('assets/icons/phone.svg'),
    Email: () => import('assets/icons/email.svg'),
    InputBox: () => import('../form/InputBox'),
    Button: () => import('../form/Button')
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    openFeedBackModal () {
      this.$openModal('Feedback')
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

  .footer {
    display: flex;
    .footer-col{
      margin: 46px 37px 46px 0;
      flex: 1 1 auto;
      max-width: calc(25% - 37px);
    }

    .footer-col__input{
      max-height: 38px;
    }
    .img-metro{
      max-width: 206px;
    }
    .footer__link-box{
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .footer__link{
      @include FontStyle('Acrom', normal, #000000, 14px, 17px);
      margin-bottom: 10px;
    }
    .footer__contact{
      display: flex;
      align-items: center;
      span{
        @include FontStyle('Acrom', bold, #710000, 18px, 22px);
      }
    }
    .footer__copyrights{
      @include FontStyle('Acrom', normal, #000000, 14px, 17px);
    }
    .footer__svg-box{
      width: 35px;
    }
    .footer__work-time{
      margin-left: 35px;
      margin-bottom: 19px;
      margin-top: 10px;
      @include FontStyle('Acrom', normal, #000000, 18px, 21px);
    }
    .footer__title{
      @include FontStyle('Acrom', bold, #000000, 20px, 24px);
      margin-bottom: 20px;
    }

  }
</style>
