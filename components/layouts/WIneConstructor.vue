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
      <div class="wine-constructor__shablones-shadow" />
    </div>
    <div class="wine-constructor__shablone-wrapper">
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
              <div class="shablone__col">
                <template v-for="(block, index) in items">
                  <WineConstructorBlock
                    v-if="index < 3"
                    :key="index"
                    :block-data="block"
                  />
                </template>
              </div>
              <div class="shablone__col">
                <template v-for="(block, index) in items">
                  <WineConstructorBlock
                    v-if="index > 2"
                    :key="index"
                    :block-data="block"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeShablone === 2" class="shablone__inner-box shablone__inner-box--2">
          <div class="shablone__inner-content">
            <div class="shablone__title">
              Винная карта
            </div>
            <div class="shablone__row">
              <div class="shablone__col">
                <template v-for="(block, index) in items">
                  <WineConstructorBlock
                    v-if="index < 3"
                    :key="index"
                    :block-data="block"
                  />
                </template>
              </div>
              <div class="shablone__col">
                <template v-for="(block, index) in items">
                  <WineConstructorBlock
                    v-if="index > 2"
                    :key="index"
                    :block-data="block"
                  />
                </template>
              </div>
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

export default {
  name: 'WIneConstructor',
  components: {
    Button: () => import('../form/Button'),
    WineConstructorBlock: () => import('./WineConstructorBlock'),
    Ok: () => import('assets/icons/ok-2.svg')
  },
  data () {
    return {
      activeShablone: 3,
      shablones: [1, 2, 3, 4],
      pageSizeBig: {
        clientWidth: 1382,
        clientHeight: 1957
      },
      pageSizeSmall: {
        clientWidth: 693,
        clientHeight: 1957
      }
      // items: [
      //   {
      //     name: 'Игристые вина',
      //     items: [
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: 'Белые вина',
      //     items: [
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       },
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: 'Красные винА',
      //     items: [
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: 'Красные винА',
      //     items: [
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: 'Розовые вина',
      //     items: [
      //       {
      //         name: 'Le Rime, Castello Banfi',
      //         description: '2019, Италия, Тоскана',
      //         price: {
      //           bottle: '',
      //           cup: ''
      //         }
      //       }
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    currentPageSize () {
      return this.activeShablone > 2 ? this.pageSizeSmall : this.pageSizeBig
    },
    items () {
      const allWInes = Object.values(this.$userBucket).map(i => ({
        name: i.wineData.name,
        description: i.wineData.description,
        price: {
          bottle: '',
          cup: ''
        }
      }))
      return [
        {
          name: 'Белые вина',
          items: allWInes
        }
      ]
    }
  },
  watch: {
    activeShablone (val) {
      this.$nextTick(() => {
        this.doResize(null, this.currentPageSize)
      })
    }
  },
  mounted () {
    this.doResize(null, this.currentPageSize)
    window.addEventListener('resize', () => {
      this.doResize(null, this.currentPageSize)
    })
    console.clear()
    console.log(this.items)
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {})
  },
  methods: {
    downloadPDF () {
      const newDiv = document.querySelector('.shablone').cloneNode(true) // клонируем элемент с его потомками
      document.querySelector('.shablone__printer').appendChild(newDiv)

      domtoimage.toJpeg(document.querySelector('.shablone__printer .shablone'), {
        quality: 2
      })
        .then((dataUrl) => {
          let pdf
          if (this.activeShablone < 3) {
            // eslint-disable-next-line new-cap
            pdf = new jsPDF('p', 'mm', 'a4')
          } else {
            // eslint-disable-next-line new-cap
            pdf = new jsPDF('p', 'mm', [693, 1957])
          }
          const width = pdf.internal.pageSize.getWidth()
          const height = pdf.internal.pageSize.getHeight()

          pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height)
          pdf.save('download.pdf')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
        .finally(() => {
          document.querySelector('.shablone__printer').removeChild(newDiv)
        })
    },
    doResize (event, ui) {
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
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wine-constructor {
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
        padding: 169px 80px 80px 80px;
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
      }
      .shablone__col{
        width: calc(50% - 31px);
      }
      .shablone__col:last-child{
        padding-top: 500px;
      }
      .shablone__title{
        @include FontStyle('Acrom', normal, #FFFFFF, 90px, 180px);
        text-transform: uppercase;
        margin-bottom: 50px;
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
            .wcb__title{

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
      min-height: 345px;
      overflow-x: auto;
      position: relative;
      .wine-constructor__shablone-select-box{
        margin: 0 10px;
        width: calc(25% - 20px);
        position: relative;
        cursor: pointer;
        z-index: 1;
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
        min-height: 336px;
        margin: 0 -25px;
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
          &::after{
            display: block;
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
            content: 'Отправить менеджеру'
          }
          .button__text{
            display: none;
          }
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
    }
  }
</style>
