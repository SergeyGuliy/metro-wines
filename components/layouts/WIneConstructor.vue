<template>
  <div class="wine-constructor">
    <div class="wine-constructor__shablones">
      <div
        v-for="(shablone) in shablones"
        :key="shablone"
        @click="activeShablone = shablone"
        class="wine-constructor__shablone-select-box"
        :class="{'wine-constructor__shablone-select-box--active': shablone === activeShablone}"
      >
        <div class="s-circle">
          <Ok />
        </div>
        <img class="noselect" src="../../assets/images/shablob-item.jpg" alt="">
      </div>
    </div>
    <div class="wine-constructor__shablone-wrapper">
      <div class="wine-constructor__text">
        Отредактируйте стоимость вин, в соответствии с вашим ценообразованием, распечатайте готовый файл и вложите в ваше меню
      </div>
      <div class="shablone">
        <img src="../../assets/images/chamblon-main.jpg" alt="">
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
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wine-constructor {
    .shablone{
      width: 100%;
      img{
        width: 100%;
      }
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
