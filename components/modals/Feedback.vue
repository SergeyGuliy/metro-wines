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
      <InputBox
        v-model="form.name"
        placeholder="Имя"
        :errors="[
          ($v.form.name.required || !$v.form.name.$dirty) || vt.required
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
        v-mask="'+7(###)-###-####'"
        placeholder="Телефон"
        :errors="[
          ($v.form.phone.required || !$v.form.phone.$dirty) || vt.required,
          ($v.form.phone.regexPhone || !$v.form.phone.$dirty) || vt.regexPhone
        ]"
      />
      <InputBox
        v-model="form.city"
        :show-recomendation="true"
        placeholder="Введите ваш город"
        :errors="[($v.form.city.required || !$v.form.city.$dirty) || vt.required]"
      />
      <TextareaBox
        v-model="form.text"
        placeholder="Сообщение"
        :errors="[
          ($v.form.text.required || !$v.form.text.$dirty) || vt.required
        ]"
      />
    </div>
    <div class="feedback-modal__action">
      <Button :filled="true" :bold="true" @click="sendFeedback">
        ОТПРАВИТЬ
      </Button>
    </div>
  </div>
</template>

<script>
import { helpers, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import modalMixin from '../../mixins/modalMixin'
const regexPhone = helpers.regex('alpha', /^[+][7]{1}[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/)
const regexEmail = helpers.regex('alpha', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
export default {
  name: 'Feedback',
  components: {
    Button: () => import('../form/Button'),
    InputBox: () => import('../form/InputBox'),
    TextareaBox: () => import('../form/TextareaBox'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin, validationMixin],
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        city: '',
        text: ''
      }
    }
  },

  validations: {
    form: {
      name: {
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
      },
      text: {
        required
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
    background-color: #ffffff;
    max-height: calc(100vh - 73px);
    overflow: auto;
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
