<template>
  <form class="feedback-modal" @submit.prevent="sendFeedback">
    <Close class="svg-close" @click="close" />
    <div class="feedback-modal__title">
      Заявка менеджеру
    </div>
    <div class="feedback-modal__description">
      Наш специалист свяжется с вами для уточнениния деталей.
    </div>
    <div class="feedback-modal__form">
      <InputBox
        v-model="form.firstName"
        placeholder="Имя"
        :errors="[
          ($v.form.firstName.required || !$v.form.firstName.$dirty) || vt.required
        ]"
      />
      <InputBox
        v-model="form.secondName"
        placeholder="Фамилия"
        :errors="[
          ($v.form.secondName.required || !$v.form.secondName.$dirty) || vt.required
        ]"
      />
      <InputBox
        v-model="form.city"
        placeholder="Город"
        :errors="[
          ($v.form.city.required || !$v.form.city.$dirty) || vt.required
        ]"
      />
      <InputBox
        v-model="form.email"
        placeholder="Электронная почта"
        :errors="[
          ($v.form.email.required || !$v.form.email.$dirty) || vt.required,
          ($v.form.email.regexEmail || !$v.form.email.$dirty) || vt.regexEmail]
        "
      />
      <InputBox
        v-model="form.phone"
        placeholder="Телефон"
        v-mask="'+7(###)-###-####'"
        :errors="[
          ($v.form.phone.required || !$v.form.phone.$dirty) || vt.required,
          ($v.form.phone.regexPhone || !$v.form.phone.$dirty) || vt.regexPhone
        ]"
      />
    </div>
    <div class="feedback-modal__action">
      <Button :bold="true" :filled="true">
        ОТПРАВИТЬ
      </Button>
    </div>
  </form>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { required, helpers } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

import modalMixin from './modalMixin'
//                                                +7(123)-456-7890
const regexPhone = helpers.regex('alpha', /^[+][7]{1}[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/)
const regexEmail = helpers.regex('alpha', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)

export default {
  name: 'FeedbackManadger',
  components: {
    Button: () => import('../form/Button'),
    InputBox: () => import('../form/InputBox'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin, validationMixin],

  validations: {
    form: {
      firstName: {
        required
      },
      secondName: {
        required
      },
      city: {
        required
      },
      email: {
        required,
        regexEmail
      },
      phone: {
        required,
        regexPhone
      }
    }
  },
  data () {
    return {
      form: {
        firstName: '',
        secondName: '',
        city: '',
        email: '',
        phone: ''
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler (val) {
        Object.keys(val).forEach((key) => {
          if (val[key]) {
            this.$v.form[key].$touch()
          }
        })
      }
    }
  },
  methods: {
    sendFeedback () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$mailTo(this.form)
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
    max-height: calc(100vh - 73px);
    overflow: auto;
    background-color: #ffffff;
    padding: 30px;

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
        margin-bottom: 15px;
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
      margin-top: 20px;
      height: 40px;
      .button{
        width: 100%;
      }
    }

    @media (max-width: 1080px) {

    }

    @media (max-width: 767px) {
      width: 100vw;
      height: 100vh;
      overflow: auto;
      border-radius: 0;
      left: 0;
      top: 0;
      max-height: unset;
      transform: translate(0,0);
      padding: 52px 10px 20px 10px;
      display: flex;
      flex-direction: column;
      .feedback-modal__title{
        @include FontStyle('Acrom', normal, #000000, 18px, 21px);
        margin-bottom: 3px;
      }
      .feedback-modal__description{
        @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        margin-bottom: 30px;
      }
      .feedback-modal__action{
        flex: 1 1 auto;
        display: flex;
        align-items: flex-end;
        .button{
          height: 40px;
        }
      }
    }
  }
</style>
