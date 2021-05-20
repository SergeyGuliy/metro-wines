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
      .wine-constructor__shablone-select-box{
        margin: 0 10px;
        width: calc(25% - 20px);
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: flex-end;
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
  }
</style>
