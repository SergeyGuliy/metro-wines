<template>
  <div v-if="helperVisible" class="chat">
    <div class="chat-activator">
      <Close class="svg-close" @click="helperVisible = false" />
      <div class="chat-activator__right">
        <WineHolder />
        <div class="chat-activator__text">
          {{ activatorTitle }}
        </div>
      </div>
      <button class="chat-activator__btn" @click="chatVisible = true">
        Задать вопрос
      </button>
    </div>
    <div v-if="chatVisible" class="chat-wrapper">
      <div class="chat-wrapper__header">
        <div class="chat-wrapper__left">
          <div class="chat-wrapper__title">
            Напишите сообщение
          </div>
          <div class="chat-wrapper__subtitle">
            Кависта Metro онлайн!
          </div>
        </div>
        <div class="chat-wrapper__svg" @click="closeChat">
          <Arrow />
        </div>
      </div>
      <div class="chat-wrapper__body">
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
        <div class="chat-wrapper__message chat-wrapper__message--my">
          Здравствуйте!
        </div>
        <div class="chat-wrapper__message">
          Добрый день. Как я могу к вам обраться?
        </div>
      </div>
      <div class="chat-wrapper__input-box">
        <textarea id="" name="" cols="30" rows="10" placeholder=" Введите сообщение" />
        <button>
          <ArrowTop />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  components: {
    WineHolder: () => import('assets/icons/wine-holder.svg'),
    Arrow: () => import('assets/icons/arrow.svg'),
    ArrowTop: () => import('assets/icons/arrow-top.svg'),
    Close: () => import('assets/icons/close.svg')
  },
  data () {
    return {
      helperVisible: true,
      chatVisible: false,
      activatorTitle: 'Если у вас возникли вопросы,  обратитесь к кависту Metro'
    }
  },
  watch: {
    chatVisible (val) {
      if (val && window.innerWidth < 767) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  },
  methods: {
    closeChat () {
      this.chatVisible = false
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .chat {
    .chat-activator{
      position: fixed;
      bottom: 0;
      right: 50%;
      transform: translate(50%, 0);
      width: 865px;
      height: 95px;
      background: #710000;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      border-radius: 5px 5px 0px 0px;
      z-index: 2;
      display: flex;
      align-items: center;
      padding: 0 125px;
      .svg-close{
        top: 8px;
        right: 8px;
        path{
          fill: white;
        }

      }
      .chat-activator__right{
        display: flex;
        align-items: center;
        svg{
          min-width: 40px;
        }
      }
      .chat-activator__text{
        padding: 0 13px;
        @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
      }
      .chat-activator__btn{
        background: #FFFFFF;
        border-radius: 5px;
        width: 269px;
        height: 40px;
        text-transform: uppercase;
        border: none;
        @include FontStyle('Acrom', bold, #710000, 14px, 22px);

      }
      @media (max-width: 1080px) {
        width: 708px;
        padding: 0 99px;

      }
      @media (max-width: 767px) {
        width: 300px;
        height: 95px;
        padding: 10px 9px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .svg-close{
          top: 3px;
          right: 3px;
        }
        .chat-activator__text{
          padding: 0 8px;
          @include FontStyle('Acrom', normal, #ffffff, 14px, 17px);
        }
        .chat-activator__btn{
          height: 28px;
          @include FontStyle('Acrom', bold, #710000, 14px, 16px);

        }
      }
    }
    .chat-wrapper{
      position: fixed;
      bottom: 0;
      right: 50%;
      transform: translate(50%, 0);
      width: 865px;
      height: 544px;
      background: #FFFFFF;
      border-radius: 5px 5px 0px 0px;
      z-index: 3;
      display: flex;
      flex-direction: column;
      .chat-wrapper__header{
        min-height: 60px;
        max-height: 60px;
        background: #710000;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px 0 30px;
        border-radius: 5px 5px 0px 0px;
        .chat-wrapper__left{

        }
        .chat-wrapper__title{
          @include FontStyle('Acrom', normal, #ffffff, 18px, 21px);
        }
        .chat-wrapper__subtitle{
          @include FontStyle('Acrom', normal, #ffffff, 14px, 17px);
        }
        .chat-wrapper__svg{
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
      .chat-wrapper__body{
        flex: 1 1 auto;
        padding: 20px 20px 20px 30px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        overflow: auto;
        .chat-wrapper__message{
          background: #F2F2F2;
          border-radius: 5px;
          padding: 12px 20px;
          margin-bottom: 12px;
          max-width: 80%;
          @include FontStyle('Acrom', bold, #710000, 14px, 16px);
        }
        .chat-wrapper__message--my{
          align-self: flex-end;
          padding-left: 55px;
        }
      }
      .chat-wrapper__input-box{
        height: 139px;
        display: flex;
        border-top: 1.5px solid #EBEFF3;
        textarea{
          flex: 1 1 auto;
          padding: 15px 20px;
          resize: none;
          border: none;
          @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        }
        textarea::placeholder{
          @include FontStyle('Acrom', normal, #999999, 16px, 19px);
        }
        button{
          border: none;
          background: #BDBDBD;
          margin: 30px 20px 0 20px;
          border-radius: 5px;
          height: 40px;
          width: 40px;
        }
      }

      @media (max-width: 1080px) {
        width: 708px;
        .chat-wrapper__body .chat-wrapper__message{
          border: 1px solid #710000;
          background-color: white;
          @include FontStyle('Acrom', bold, #710000, 14px, 16px);

        }
      }
      @media (max-width: 767px) {
        border: 0;
        bottom: 0;
        right: 0;
        transform: translate(0, 0);
        width: 100vw;
        height: 100vh;
        .chat-wrapper__header{
          border-radius: 0 !important;
        }
      }
    }
  }
</style>
