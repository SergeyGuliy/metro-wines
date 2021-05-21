<template>
  <div class="paginator-box">
    <div class="paginator-box__total">
      Показано с 1 по 16 из 256 результатов поиска
    </div>
    <Button :filled="true" class="paginator-box__button">
      Загрузить еще
    </Button>
    <div class="paginator">
      <button class="paginator__item paginator__prev">
        <ArrowBack />
      </button>
      <button class="paginator__item paginator__item--active">
        1
      </button>
      <button class="paginator__item">
        2
      </button>
      <button class="paginator__item">
        3
      </button>
      <button class="paginator__item">
        ...
      </button>
      <button class="paginator__item">
        8
      </button>
      <button class="paginator__item">
        9
      </button>
      <button class="paginator__item">
        10
      </button>
      <button class="paginator__item paginator__next">
        <ArrowForward />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginatorBox',
  components: {
    Button: () => import('../form/Button'),
    ArrowBack: () => import('assets/icons/arrow-back.svg'),
    ArrowForward: () => import('assets/icons/arrow-forward.svg')
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .paginator-box {
    margin-top: 50px;
    background: #FFFFFF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .paginator-box__button{
      max-height: 40px;
      span{
        font-weight: bold;
      }
    }
    .paginator-box__total{
      @include FontStyle('Acrom', normal, #000000, 18px, 22px);
    }
    .paginator{
      display: flex;
      .paginator__item{
        cursor: pointer;
        height: 36px;
        width: 36px;
        border: 1.5px solid #EBEFF3;
        display: flex;
        align-items: center;
        justify-content: center;
        @include FontStyle('Acrom', Bold, #000000, 16px, 19px);
        background-color: transparent;
      }
      .paginator__item--active{
        border: 1.5px solid #710000;
        @include FontStyle('Acrom', Bold, #710000, 16px, 19px);
      }
      .paginator__prev{
        border-radius: 6px 0px 0px 6px;
      }
      .paginator__next{
        border-radius:  0 6px 6px 0;
      }
    }

    @media (max-width: 1080px) {
      flex-direction: column;
      height: unset;
      padding: 20px 0 24px 0;
      .paginator-box__total{
        order: 1;
        text-align: center;
      }
      .paginator{
        order: 2;
        margin: 27px 0;
      }
      .paginator-box__button{
        order: 3;
        height: 40px;
        padding: 0 35px;
      }
    }
    @media (max-width: 767px) {
      margin-top: 10px;
      margin-left: -10px;
      margin-right: -10px;

    }
  }
</style>
