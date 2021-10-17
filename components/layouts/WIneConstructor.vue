<template>
  <div class="wine-constructor">
    <div class="wine-constructor__shablones--wr">
      <div class="wine-constructor__shablones">
        <div
          v-for="(shablone) in shablones"
          :key="shablone"
          class="wine-constructor__shablone-select-box"
          :class="{'wine-constructor__shablone-select-box--active': shablone === activeShablone}"
          @click="activeShablone = shablone"
        >
          <div class="s-circle">
            <Ok />
          </div>
          <img class="noselect" :src="require(`assets/images/shablob-item-${shablone}.jpg`)" alt="">
          <div class="wine-constructor__shablones-shadow" />
        </div>
      </div>
      <!--      <div class="wine-constructor__shablones-shadow" />-->
    </div>
    <div v-if="activeShablone> 0" class="wine-constructor__shablone-wrapper">
      <div class="wine-constructor__text">
        Отредактируйте стоимость вин, в соответствии с вашим ценообразованием, распечатайте готовый файл и вложите в ваше меню
      </div>
      <div
        ref="printMe"
        class="shablone"
        :class="{'shablone--small': activeShablone > 2}"
      >
        <div v-if="activeShablone === 1" class="shablone__inner-box shablone__inner-box--1">
          <div class="shablone__inner-content">
            <div class="shablone__title">
              Винная карта
            </div>
            <div class="shablone__row">
              <template v-for="(block, index) in items">
                <WineConstructorBlock
                  :key="index"
                  :block-data="block"
                />
              </template>
            </div>
          </div>
        </div>

        <div v-if="activeShablone === 2" class="shablone__inner-box shablone__inner-box--2">
          <div class="shablone__inner-content">
            <div class="shablone__title">
              Винная карта
            </div>
            <div class="shablone__row">
              <template v-for="(block, index) in items">
                <WineConstructorBlock
                  :key="index"
                  :block-data="block"
                />
              </template>
            </div>
          </div>
        </div>
        <div v-if="activeShablone === 3" class="shablone__inner-box shablone__inner-box--3">
          <div class="shablone__inner-content">
            <div class="shablone__col-2">
              <template v-for="(block, index) in items">
                <WineConstructorBlock
                  :key="index"
                  :block-data="block"
                />
              </template>
            </div>
          </div>
        </div>
        <div v-if="activeShablone === 4" class="shablone__inner-box shablone__inner-box--4">
          <div class="shablone__inner-content">
            <div class="shablone__col-2">
              <template v-for="(block, index) in items">
                <WineConstructorBlock
                  :key="index"
                  :block-data="block"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="shablone__printer" />
      <div class="wine-constructor__actions">
        <Button :filled="true" :uppercase="true" @click="downloadPDF">
          Скачать pdf
        </Button>
        <Button v-if="!isEmailSendInited" class="wine-constructor__send-email" :filled="true" :uppercase="true" @click="initSendEmail">
          отправить на email
        </Button>
        <form v-else class="wine-constructor__form" @submit.prevent="sendEmail">
          <InputBox
            v-model="form.email"
            class="wine-constructor__form-input"
            placeholder="ВВЕДИТЕ EMAIL"
            :errors="[
              ($v.form.email.required || !$v.form.email.$dirty) || vt.required,
              ($v.form.email.regexEmail || !$v.form.email.$dirty) || vt.regexEmail]
            "
          />
          <Button :filled="true" :uppercase="true" class="wine-constructor__form-send">
            отправить
          </Button>
        </form>
        <!--        <Button :filled="true" :uppercase="true">-->
        <!--          Скачать для редактирования (eps)-->
        <!--        </Button>-->
      </div>
    </div>
  </div>
</template>
<script>
import domtoimage from 'dom-to-image'
import jsPDF from 'jspdf'
import { helpers, required } from 'vuelidate/lib/validators'
const regexEmail = helpers.regex('alpha', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)

export default {
  name: 'WIneConstructor',
  components: {
    Button: () => import('../form/Button'),
    WineConstructorBlock: () => import('./WineConstructorBlock'),
    InputBox: () => import('../form/InputBox'),
    Ok: () => import('assets/icons/ok-2.svg')
  },
  props: {
    selectedWines: {}
  },

  validations: {
    form: {
      email: {
        required,
        regexEmail
      }
    }
  },
  data () {
    return {
      form: {
        email: ''
      },
      isEmailSendInited: false,
      activeShablone: 0,
      shablones: [1, 2, 3, 4],
      pageSizeBig: {
        clientWidth: 1382,
        clientHeight: 1957
      },
      pageSizeSmall: {
        clientWidth: 693,
        clientHeight: 1957
      },
      pdf: null
    }
  },
  computed: {
    currentPageSize () {
      return this.activeShablone > 2 ? this.pageSizeSmall : this.pageSizeBig
    },
    items () {
      const winesAttributes = Object.values(this.selectedWines).map(i => i.wineData.attributes.map(i => i.id === 308 ? i : false).filter(i => !!i))
      // winesAttributes.map((i) => {
      //   console.log(i)
      // })
      // eslint-disable-next-line no-unused-vars
      const winesTypes = {}
      winesAttributes.forEach((i) => {
        if (i.length) {
          if (!winesTypes[i[0].value_id]) {
            winesTypes[i[0].value_id] = {
              name: `${i[0].text} вино`,
              items: []
            }
          }
        }
      })

      // 308
      Object.values(this.selectedWines).forEach((i) => {
        const type = i.wineData.attributes.find(i => i.id === 308)
        if (type) {
          winesTypes[type.value_id].items.push({
            name: i.wineData.name,
            description: i.wineData.description,
            price: {
              bottle: '',
              cup: '',
              isBottleActive: false,
              isCupActive: false
            }
          })
        } else if (!winesTypes.other) {
          winesTypes.other = {
            name: 'Другие вина',
            items: [{
              name: i.wineData.name,
              description: i.wineData.description,
              price: {
                bottle: '',
                cup: '',
                isBottleActive: false,
                isCupActive: false
              }
            }]
          }
        } else {
          winesTypes.other.items.push({
            name: i.wineData.name,
            description: i.wineData.description,
            price: {
              bottle: '',
              cup: '',
              isBottleActive: false,
              isCupActive: false
            }
          })
        }
      })
      return Object.values(winesTypes)
    }
  },
  watch: {
    activeShablone (val) {
      this.$nextTick(() => {
        this.doResize(null, this.currentPageSize)
        this.$emit('changeActiveShablone', val)
      })
    }
  },
  mounted () {
    this.doResize(null, this.currentPageSize)
    window.addEventListener('resize', () => {
      this.doResize(null, this.currentPageSize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {})
  },
  methods: {
    initSendEmail () {
      this.isEmailSendInited = true
    },
    async sendEmail () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const newDiv = document.querySelector('.shablone').cloneNode(true) // клонируем элемент с его потомками
        document.querySelector('.shablone__printer').appendChild(newDiv)

        document.querySelectorAll('.shablone__printer input').forEach((i) => {
          i.style.display = 'none'
        })

        document.querySelectorAll('.shablone__printer .print-text').forEach((i) => {
          i.style.display = 'inline-block'
        })

        await domtoimage.toJpeg(document.querySelector('.shablone__printer .shablone'), {
          quality: 2
        })
          // eslint-disable-next-line require-await
          .then(async (dataUrl) => {
            if (this.activeShablone < 3) {
              // eslint-disable-next-line new-cap
              this.pdf = new jsPDF('p', 'mm', 'a4')
            } else {
              // eslint-disable-next-line new-cap
              this.pdf = new jsPDF('p', 'mm', [693, 1957])
            }
            const width = this.pdf.internal.pageSize.getWidth()
            const height = this.pdf.internal.pageSize.getHeight()

            this.pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height)

            const pdf = this.pdf.output('blob')

            const formData = new FormData()
            formData.append('pdf', pdf)
            formData.append('to', this.form.email)
            formData.append('subject', 'Винная карта')
            formData.append('from', 'support@winelist.metro-cc.ru')

            await this.$axios.$post(`${window.location.origin}/mail/send/pdf`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' }
            }).then(this.$openModal('Notification', { hideSub: true }))
            this.isEmailSendInited = false
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error)
          })
          .finally(() => {
            document.querySelector('.shablone__printer').removeChild(newDiv)
            console.log('created')
          })
      }
    },
    async downloadPDF () {
      await this.createPDF()
      this.pdf.save('download.pdf')
    },
    async createPDF () {
      const newDiv = document.querySelector('.shablone').cloneNode(true) // клонируем элемент с его потомками
      document.querySelector('.shablone__printer').appendChild(newDiv)

      document.querySelectorAll('.shablone__printer input').forEach((i) => {
        i.style.display = 'none'
      })

      document.querySelectorAll('.shablone__printer .print-text').forEach((i) => {
        i.style.display = 'inline-block'
      })

      await domtoimage.toJpeg(document.querySelector('.shablone__printer .shablone'), {
        quality: 2
      })
        .then((dataUrl) => {
          if (this.activeShablone < 3) {
            // eslint-disable-next-line new-cap
            this.pdf = new jsPDF('p', 'mm', 'a4')
          } else {
            // eslint-disable-next-line new-cap
            this.pdf = new jsPDF('p', 'mm', [693, 1957])
          }
          const width = this.pdf.internal.pageSize.getWidth()
          const height = this.pdf.internal.pageSize.getHeight()

          this.pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height)
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
        .finally(() => {
          document.querySelector('.shablone__printer').removeChild(newDiv)
          console.log('created')
        })
    },
    doResize (event, ui) {
      try {
        const $wrapper = document.querySelector('.shablone__inner-content')
        const elWidth = document.querySelector('.shablone__inner-box').clientWidth
        const scale = elWidth / ui.clientWidth
        if (this.activeShablone < 3) {
          $wrapper.style.transform = `scale(${scale})`
          $wrapper.style.width = `${this.currentPageSize.clientWidth}px`
          $wrapper.style.height = `${this.currentPageSize.clientHeight}px`
          $wrapper.style.top = `${((1 / scale) - 1) * (-50)}%`
          $wrapper.style.left = `${((1 / scale) - 1) * (-50)}%`
        } else if (scale < 1) {
          $wrapper.style.transform = `scale(${scale})`
          $wrapper.style.width = `${this.currentPageSize.clientWidth}px`
          $wrapper.style.height = `${this.currentPageSize.clientHeight}px`
          $wrapper.style.top = `${((1 / scale) - 1) * (-50)}%`
          $wrapper.style.left = `${((1 / scale) - 1) * (-50)}%`
        } else {
          $wrapper.style.transform = 'scale(1)'
          $wrapper.style.width = '693px'
          $wrapper.style.height = '1957px'
          $wrapper.style.top = '0'
          $wrapper.style.left = '0'
        }
      } catch (e) {

      }
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wine-constructor {

    .wine-constructor__send-email{
      width: 500px;
    }
    .wine-constructor__form{
      display: inline-flex;
      height: 68px;
      width: 770px;
    }
    .wine-constructor__form-input{
      margin-right: 12px;
      width: auto;
      max-width: 500px;
      flex: 1 1 auto;
      .input-field{
        width: -webkit-fill-available;
        max-width: 500px;
        padding-left: 15px !important;
        padding-right: 15px !important;
        border: 3px solid #710000;
      }
      .input-field::placeholder{
        color: #710000;

      }
    }
    .wine-constructor__form-send{
      width: auto;
      max-width: 270px;
    }
    .shabloneCanvas{
      position: fixed;
      z-index: -2;
    }
    .shablone{
      width: 100%;
      padding-top: 141.6%;
      position: relative;
      .shablone__inner-box{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
      .shablone__inner-content{
        padding: 98px 80px 80px 80px;
        position: absolute;
        min-height: 100%;
        min-width: 100%;
        top: -50%;
        left: -50%;
        display: flex;
        flex-direction: column;
      }
      .shablone__row{
        display: flex;
        justify-content: space-between;
        flex: 1 1 auto;
        overflow: hidden;
      }
      .shablone__col{
        width: calc(50% - 31px);
      }
      .shablone__col-2{
        max-height: 100%;
        overflow: hidden;
      }
      /*.shablone__col:last-child{*/
      /*  padding-top: 500px;*/
      /*}*/
      .shablone__title{
        @include FontStyle('Acrom', normal, #FFFFFF, 90px, 180px);
        text-transform: uppercase;
        margin-bottom: 50px;
      }
      .shablone__inner-box--1, .shablone__inner-box--2{
        .shablone__row{
          flex-direction: column;
          justify-content: unset;
          flex-wrap: wrap;
        }
        .wcb{
          width: calc(50% - 31px);
          margin-right: 62px;
        }
        .wcb__left{
          max-width: 380px;
          min-width: 330px;
        }
      }
      .shablone__inner-box--1{
        background-image: url("../../assets/images/chamblon-main-1.jpg");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .shablone__inner-box--2{
        background-image: url("../../assets/images/chamblon-main-2.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        .shablone__title{
          color: #710000;
        }
        .wcb{
          .wcb__title, .wcb__name, .wcb__description, .wcb__price-box span, .wcb__price-box input{
            color: #000000;
          }
          .wcb__item{
            border-bottom: 4px solid #000000;
          }
          .wcb__price-box input::placeholder{
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      .shablone__inner-box--3, .shablone__inner-box--4{
        max-width: 693px;
        max-height: 1957px;
        margin: 0 auto;
        .shablone__inner-content{
          padding: 169px 74px 80px 74px;
          .wcb{
            .wcb__item{

            }
            .wcb__price-box{
              max-width: calc(100% - 370px);
            }
            .wcb__left {
              max-width: 320px;
              min-width: 320px;
            }
          }
        }
      }
      .shablone__inner-box--3{
        background-image: url("../../assets/images/chamblon-main-3.jpg");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .shablone__inner-box--4{
        background-image: url("../../assets/images/chamblon-main-4.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        .wcb{
          .wcb__title, .wcb__name, .wcb__description, .wcb__price-box span, .wcb__price-box input{
            color: #000000;
          }
          .wcb__item{
            border-bottom: 4px solid #000000;
          }
          .wcb__price-box input::placeholder{
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    .shablone__printer{
      position: fixed;
      top: 200vh;
      right: 200vw;
      z-index: 10;
      .shablone{
        width: 1382px;
        height: 1957px;
        .shablone__inner-content{
          top: 0 !important;
          left: 0 !important;
          transform: scale(1) !important;
        }
      }
      .shablone.shablone--small{
        width: 693px;
        height: 1957px;
        .shablone__inner-content{
          top: 0 !important;
          left: 0 !important;
          transform: scale(1) !important;
        }
      }
    }
    .shablone--small {
      padding-top: 282.4%;
    }
    .wine-constructor__shablones{
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-items: flex-end;
      min-height: 458px;
      margin-top: -141px;
      /*overflow-x: auto;*/
      /*overflow-y: visible;*/
      overflow: auto;
      position: relative;
      .wine-constructor__shablone-select-box{
        margin: 0 10px;
        width: calc(25% - 20px);
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: flex-end;
        min-width: 336px;
        img{
          object-fit: cover;
          height: 295px;
          transition: all ease 0.5s;
          width: 100%;
        }
      }
      .wine-constructor__shablone-select-box--active{
        img{
          height: 319px;
        }
        .s-circle{
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          svg{
            display: block;
          }
          .s-circle__popup{
            display: block;
            width: 420px;
            /*min-width: 420px;*/
            left: calc(100% + -51px);
            bottom: 148%;
            /*position: relative;*/
          }
          /*&::after{*/
          /*  top: calc(100% - 63px);*/
          /*  transform: rotate(45deg);*/
          /*  position: absolute;*/
          /*  display: block;*/
          /*  content: '';*/
          /*  height: 20px;*/
          /*  width: 20px;*/
          /*  background-color: white;*/
          /*}*/
        }
      }

      .wine-constructor__shablone-select-box:nth-child(3), .wine-constructor__shablone-select-box:nth-child(4) {
        .s-circle{
          .s-circle__popup{
            width: 420px;
            left: unset;
            right: calc(100% + -51px);
            bottom: 148%;
          }
        }
      }
      .s-circle{
        position: absolute;
        right: 10px;
        top: 10px;
        height: 40px;
        width: 40px;
        border: 3px solid #FFFFFF;
        border-radius: 50%;
        svg{
          display: none;
        }
      }
    }
    .wine-constructor__shablones--wr{
      position: relative;
    }
    .wine-constructor__shablones-shadow{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 119px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      opacity: 0.2;
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .wine-constructor__shablone-wrapper{
      background-color: #ffffff;
      padding: 41px 30px 68px 30px;
    }
    .wine-constructor__text{
      @include FontStyle('Acrom', normal, #000000, 35px, 42px);
      max-width: 1128px;
      margin-bottom: 43px;
    }
    .wine-constructor__actions{
      margin-top: 55px;
      height: 68px;
      .button{
        padding: 0 30px;
        .button__text{
          @include FontStyle('Acrom', normal, #FFFFFF, 20px, 24px);
        }
      }
      .button:first-child{
        margin-right: 12px;
      }
    }
    @media (min-width: 732px) {
      .shablone--small{
        padding-top: calc(100vh + 1083px);
      }
    }
    @media (max-width: 1080px) {
      .wine-constructor__shablones{
        min-height: 428px;
        margin-top: -106px;
        margin-right: -25px;
        margin-left: -25px;
      }
      .wine-constructor__shablone-wrapper{
        margin: 0 -30px;
      }
      .wine-constructor__text{
        @include FontStyle('Acrom', normal, #000000, 26px, 30px);
        margin-bottom: 30px;
      }
      .wine-constructor__actions{
        margin-top: 30px;
      }
    }
    @media (max-width: 767px) {
      .wine-constructor__shablones{
        min-height: unset;
        margin: 0 -15px;
      }
      .wine-constructor__form{
        height: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .wine-constructor__form-input{
        margin: 0 0 10px 0;
      }
      .wine-constructor__send-email{
        width: unset;
      }
      .wine-constructor__shablone-wrapper{
        margin: 0 -20px;
        padding-bottom: 26px;
      }
      .wine-constructor__text{
        @include FontStyle('Acrom', normal, #000000, 12px, 14px);
        margin-bottom: 30px;
        max-width: 276px;
      }
      .wine-constructor__actions{
        margin-top: 20px;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: unset;
        .button {
          height: 40px;
          max-width: 100%;
          margin-right: 0 !important;
          margin-left: 0 !important;

          .button__text {
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
          }
        }
        .button:first-child{
          margin-bottom: 10px;
        }
        .button:last-child{

        }
      }
      .wine-constructor__shablones{
        min-height: unset;
        .wine-constructor__shablone-select-box{
          max-width: 188px;
          margin: 0 5px;
          width: 100%;
          min-width: 188px;
          img{
            height: unset;
          }
        }
      }
    }
    @media (max-width: 500px) {
      .wine-constructor__actions .button{
        width: 100%;
      }
      .wine-constructor__form{
        width: 100%;
      }
      .wine-constructor__form-input{
        width: 100%;
      }
      .wine-constructor__send-email{
        width: 100%;
      }
    }
  }
</style>
