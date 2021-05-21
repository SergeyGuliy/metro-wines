<template>
  <div class="select-city-modal" :style="positionWithActivator">
    <Close class="svg-close" @click="close" />

    <div v-if="tab === 1" class="select-city-tab select-city-tab-1">
      <div class="select-city-modal__title">
        Ваш город Москва?
      </div>
      <div class="select-city-modal__actions">
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
          @click="tab = 2"
        >
          Да
        </Button>
        <Button
          :filled="true"
          :bold="true"
          :uppercase="true"
          @click="tab = 3"
        >
          Нет
        </Button>
      </div>
    </div>
    <div v-if="tab === 2" class="select-city-tab select-city-tab-2">
      <div class="select-city-modal__title">
        Москва, Ленинградское ш., д.71Г
      </div>
      <a href="#" class="tab__contact">
        <span>+7 (495) 502-10-09</span>
      </a>
      <div class="tab__work-time">
        Будни: с 7 до 22 часов<br>
        Выходные: с 8 до 22 часов
      </div>
      <a href="mailto://merservise.store10@metro-cc.ru" class="tab__work-time tab__link">
        merservise.store10@metro-cc.ru
      </a>
      <span
        class="tab__select-another noselect"
        @click="tab = 3"
      >
        Выбрать другой
      </span>
    </div>
    <div v-if="tab === 3" class="select-city-tab select-city-tab-3">
      <div class="select-city-modal__title">
        Выберите город
      </div>
      <div class="tab__cites">
        <div class="tab__city pointer noselect" @click="tab = 4">
          Москва
        </div>
      </div>
    </div>
    <div v-if="tab === 4" class="select-city-tab select-city-tab-4">
      <div class="select-city-modal__title pointer noselect" @click="tab = 3">
        <Forward />
        Москва
      </div>
      <div class="tab__cites">
        <div class="tab__city pointer noselect" @click="tab = 2">
          Москва
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from './modalMixin'

export default {
  name: 'SelectCity',
  components: {
    Button: () => import('../form/Button'),
    Forward: () => import('assets/icons/forward.svg'),
    Close: () => import('assets/icons/close.svg')
  },
  mixins: [modalMixin],
  data () {
    return {
      tab: 1
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .select-city-modal {
    min-width: 400px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 32px 32px 38px 32px;
    .select-city-modal__title{
      display: flex;
      align-items: center;
      @include FontStyle('Acrom', normal, #000000, 26px, 31px);
      svg{
        margin-right: 27px;
      }
    }
    .select-city-tab{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .tab__contact{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 30px;
        span{
          @include FontStyle('Acrom', bold, #710000, 18px, 22px);
        }
      }
      .tab__work-time{
        @include FontStyle('Acrom', normal, #000000, 18px, 21px);
      }
      .tab__link{
        text-decoration: underline;
        margin-top: 30px;
      }
      .tab__select-another{
        align-self: flex-end;
        margin-top: 35px;
        width: fit-content;
        text-decoration: underline;
        cursor: pointer;
        @include FontStyle('Acrom', normal, #710000, 14px, 17px);
      }
      .tab__cites{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 409px;
        margin-top: 30px;
        width: 800px;
      }
      .tab__city{
        margin-right: 60px;
        @include FontStyle('Acrom', normal, #000000, 14px, 17px);
        margin-bottom: 5px;
        white-space: nowrap;
        cursor: pointer;
      }
    }
    .select-city-tab-1{
    }
    .select-city-tab-2{}
    .select-city-tab-3{}
    .select-city-modal__actions{
      margin-top: 24px;
      height: 40px;
      .button{
        width: 106px;
        margin-right: 10px;
      }
    }

    @media (max-width: 1080px) {

    }

    @media (max-width: 767px) {

    }
  }
</style>
