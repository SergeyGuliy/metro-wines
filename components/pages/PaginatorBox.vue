<template>
  <div class="paginator-box">
    <div class="paginator-box__total">
      Показано с {{ info.from }} по {{ info.to }} из {{ info.total }} результатов поиска
    </div>
    <!--    <Button :filled="true" class="paginator-box__button">-->
    <!--      Загрузить еще-->
    <!--    </Button>-->
    <div class="paginator">
      <button class="paginator__item paginator__prev" @click="clickPrev">
        <ArrowBack />
      </button>
      <template v-for="(page) in Array.from({length:lastPage},(v,k)=>k+1)">
        <template v-if="page < 4">
          <button
            :key="page"
            class="paginator__item"
            :class="{'paginator__item--active': page === value}"
            @click="$emit('input', page)"
          >
            {{ page }}
          </button>
        </template>
        <template v-else-if="page > lastPage - 3">
          <button
            :key="page"
            class="paginator__item"
            :class="{'paginator__item--active': page === value}"
            @click="$emit('input', page)"
          >
            {{ page }}
          </button>
        </template>
        <template v-else-if="page === value">
          <button
            :key="page"
            class="paginator__item"
            :class="{'paginator__item--active': page === value}"
            @click="$emit('input', page)"
          >
            {{ page }}
          </button>
        </template>
        <template v-else-if="(page > 2 && page < lastPage - 1) && (page === value + 1 || page === value - 1)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === 3 && value < 4)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === 4 && value < 4)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === 5 && value < 4)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === lastPage - 2 && value > lastPage - 3)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === lastPage - 3 && value > lastPage - 3)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <template v-else-if="(page === lastPage - 4 && value > lastPage - 3)">
          <button :key="page" class="paginator__item" disabled>
            ...
          </button>
        </template>
        <!--        <template v-else-if="(value < 2 || value > lastPage - 2)">-->
        <!--        <template v-else-if="(value < 3 && page === 2)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value < 3 && page === 3)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value < 3 && page === 4)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value < 3 && page === 5)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value > lastPage - 3 && page === lastPage - 2)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value > lastPage - 3 && page === lastPage - 3)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
        <!--        <template v-else-if="(value > lastPage - 3 && page === lastPage - 4)">-->
        <!--          <button :key="page" class="paginator__item" disabled>-->
        <!--            ...-->
        <!--          </button>-->
        <!--        </template>-->
      </template>
      <button class="paginator__item paginator__next" @click="clickNext">
        <ArrowForward />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginatorBox',
  components: {
    // Button: () => import('../form/Button'),
    ArrowBack: () => import('assets/icons/arrow-back.svg'),
    ArrowForward: () => import('assets/icons/arrow-forward.svg')
  },
  props: {
    value: {
      required: true
    },
    lastPage: {
      required: true
    },
    info: {}
  },
  data () {
    return {}
  },
  methods: {
    clickPrev () {
      if (this.value > 1) {
        this.$emit('input', this.value - 1)
      }
    },
    clickNext () {
      if (this.value < this.lastPage) {
        this.$emit('input', this.value + 1)
      }
    }
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
      .paginator__prev, .paginator__next{
        svg{
          min-width: 10px;
        }
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
