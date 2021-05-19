<template>
  <div class="feedback-modal">
    <Close class="svg-close" @click="close" />
    <div class="feedback-modal__title">
      Обратная связь
    </div>
    <div class="feedback-modal__description">
      Наш специалист свяжется с вами для уточнениния деталей.
    </div>
    <div class="feedback-modal__form">
      <InputBox v-model="form.name" placeholder="Имя" />
      <InputBox v-model="form.name" placeholder="Электронная почта" />
      <InputBox v-model="form.name" placeholder="Телефон" />
      <TextareaBox v-model="form.name" placeholder="Сообщение" />
    </div>
    <div class="feedback-modal__action">
      <Button :filled="true" @click="close(true)">
        ОТПРАВИТЬ
      </Button>
    </div>
  </div>
</template>

<script>
import modalMixin from './modalMixin'

export default {
  name: 'Feedback',
  components: {
    Button: () => import('../form/Button'),
    InputBox: () => import('../form/InputBox'),
    TextareaBox: () => import('../form/TextareaBox'),
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

  .feedback-modal {
    width: 503px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 30px;

    .svg-close {
      cursor: pointer;
      position: absolute;
      top: 18px;
      right: 18px;
    }
    .feedback-modal__title{
      @include FontStyle('Acrom', normal, #000000, 20px, 140%);
      margin-bottom: 18px;
    }
    .feedback-modal__description{
      @include FontStyle('Acrom', normal, #000000, 20px, 140%);
      margin-bottom: 43px;
    }
    .feedback-modal__form{
      .input-box{
        height: 40px;
        margin-bottom: 10px;
        .input-field{
          @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        }
        ::placeholder{
          @include FontStyle('Acrom', normal, #999999, 16px, 19px);
        }
      }
      .textarea-box{
        margin-bottom: 10px;
        .textarea-field{
          padding-top: 20px;
          @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        }
        ::placeholder{
          @include FontStyle('Acrom', normal, #999999, 16px, 19px);
        }
      }
    }
    .feedback-modal__action{
      height: 40px;
      .button{
        width: 100%;
      }
    }
  }
</style>
