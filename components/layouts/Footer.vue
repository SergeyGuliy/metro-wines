<template>
  <div class="footer container">
    <div class="footer-col footer-col__1">
      <img src="../../assets/images/metro.png" alt="" class="img-metro">
    </div>
    <div class="footer-col footer-col__2">
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
    <div class="footer-col footer-col__3">
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
      <div class="footer__checkbox noselect" @click="isCheked = !isCheked">
        <div class="footer__checkbox-box" :class="{'footer__checkbox-box--active': isCheked}">
          <Ok />
        </div>
        <div class="footer__checkbox-text">
          Я согласен на обработку персональных данных, а также с условиями подписки
        </div>
      </div>
    </div>
    <div class="footer-col footer-col__4">
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
    Ok: () => import('assets/icons/ok.svg'),
    InputBox: () => import('../form/InputBox'),
    Button: () => import('../form/Button')
  },
  data () {
    return {
      email: '',
      isCheked: true
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
    .footer__checkbox{
      display: flex;
      margin-top: 12px;
      .footer__checkbox-box{
        margin-right: 9px;
        height: 18px;
        min-width: 18px;
        border: 1px solid #999999;
        box-sizing: border-box;
        border-radius: 3px;
        svg{
          display: none;
        }
      }
      .footer__checkbox-box--active{
        border: 1px solid #710000;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
          display: block;
        }
      }
      .footer__checkbox-text{
        @include FontStyle('Acrom', normal, #999999, 12px, 14px);
      }
    }

    @media (max-width: 1080px) {
      flex-wrap: wrap;
      .footer-col__1{
        width: 100%;
        max-width: unset;
        margin-top: 32px;
        margin-bottom: 40px;
      }
      .footer-col__2{
        width: 100%;
        margin-top: 0;
        margin-right: 55px;
        max-width: fit-content;
      }
      .footer-col__3{
        width: 100%;
        margin-right: 0;
        margin-top: 0;
        max-width: 50%;
      }
      .footer-col__4{
        width: 100%;
        margin-top: 0;
        max-width: unset;
        .footer__link-box{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .footer__link{
            margin-right: 20px;
          }
        }
      }
    }
    @media (max-width: 767px) {
      padding: 0 20px;
      .footer-col{
        max-width: unset;
        margin-top: 0;
        margin-right: 0;
      }
      .footer-col__1{
        margin-top: 32px;
        margin-bottom: 40px;
      }
      .footer-col__2{
      }
      .footer-col__3{
      }
      .footer-col__4{
        .footer__link-box{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
      }
      .footer__work-time{
        margin-left: 0;
      }
      .footer__contact{
        display: block;
        div{
          margin-bottom: 2px;
        }
      }
    }
  }
</style>
