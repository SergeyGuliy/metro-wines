<template>
  <div class="wine-constructor">
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
      </div>
    </div>
    <div class="wine-constructor__shablone-wrapper">
      <div class="wine-constructor__text">
        Отредактируйте стоимость вин, в соответствии с вашим ценообразованием, распечатайте готовый файл и вложите в ваше меню
      </div>
      <div class="shablone" :class="{'shablone--small': activeShablone > 2}">
        <div v-if="activeShablone === 1" class="shablone__inner-box shablone__inner-box--1">
          <div class="shablone__inner-content">
            <div class="shablone__title">
              Винная карта
            </div>
          </div>
        </div>
        <div v-if="activeShablone === 2" class="shablone__inner-box shablone__inner-box--2">
          <div class="shablone__title">
            Винная карта
          </div>
        </div>
        <div v-if="activeShablone === 3" class="shablone__inner-box shablone__inner-box--3" />
        <div v-if="activeShablone === 4" class="shablone__inner-box shablone__inner-box--4" />
      </div>
      <div class="wine-constructor__actions">
        <Button :filled="true" :uppercase="true">
          Скачать pdf
        </Button>
        <Button :filled="true" :uppercase="true">
          Скачать для редактирования (eps)
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WIneConstructor',
  components: {
    Button: () => import('../form/Button'),
    Ok: () => import('assets/icons/ok-2.svg')
  },
  data () {
    return {
      activeShablone: 1,
      shablones: [1, 2, 3, 4]
    }
  },
  mounted () {
    const $wrapper = document.querySelector('.shablone__inner-content')
    const starterData = {
      clientWidth: 1382,
      clientHeight: 1957
    }
    function doResize (event, ui) {
      const elHeight = $wrapper.clientHeight
      const elWidth = $wrapper.clientWidth
      const scale = Math.min(
        elWidth / ui.clientWidth,
        elHeight / ui.clientHeight
      )
      console.log(scale)
      $wrapper.style.transform = `scale(${scale})`
      $wrapper.style.width = `${1 / scale * starterData.clientWidth}px`
      $wrapper.style.height = `${1 / scale * starterData.clientHeight}px`
    }
    doResize(null, starterData)
    window.addEventListener('resize', () => {
      doResize(null, starterData)
    })
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wine-constructor {
    .shablone{
      width: 100%;
      padding-top: 141.6%;
      position: relative;
      .shablone__title{
        @include FontStyle('Acrom', normal, #FFFFFF, 90px, 180px);
        text-transform: uppercase;
      }
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
      }
      .shablone__inner-box--3{
        /*max-width: 679px;*/
        /*margin: 0 auto;*/
        background-image: url("../../assets/images/chamblon-main-3.jpg");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .shablone__inner-box--4{
        /*max-width: 679px;*/
        /*margin: 0 auto;*/
        background-image: url("../../assets/images/chamblon-main-4.jpg");
        background-size: contain;
        background-repeat: no-repeat;
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
