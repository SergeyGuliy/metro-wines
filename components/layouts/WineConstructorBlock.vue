<template>
  <div class="wcb">
    <div class="wcb__title">
      {{ blockData.name }}
    </div>
    <span ref="input" class="wcb-input-sizer">{{ inputVal }}</span>
    <div class="wcb__body">
      <div
        v-for="(wine, index) in blockData.items"
        :key="index"
        class="wcb__item"
      >
        <div class="wcb__left">
          <div class="wcb__name">
            {{ wine.name }}
          </div>
          <!--          <div class="wcb__description">-->
          <!--            {{ wine.description }}-->
          <!--          </div>-->
        </div>
        <!--        <pre>{{wine.price.isCupActive}}</pre>-->
        <div class="wcb__price-box">
          <input
            :ref="`cup-${index}`"
            v-model="wine.price.cup"
            class="wcb__input-cup"
            type="number"
            placeholder="бокал"
            @input="changeMaxWidth(`cup-${index}`, $event.target.value)"
          >
          <span style="display: none" class="print-text">
            <span v-if="wine.price.cup" style="white-space: nowrap">{{ wine.price.cup }}</span>
<!--            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")-->
            <span v-else class="place">бокал</span>
          </span>
          <span>/</span>
          <input
            :ref="`bottle-${index}`"
            v-model="wine.price.bottle"
            class="wcb__input-bottle"
            type="number"
            placeholder="бутылка"
            @input="changeMaxWidth(`bottle-${index}`, $event.target.value)"
          >
          <span style="display: none" class="print-text">
            <span v-if="wine.price.bottle" style="white-space: nowrap">{{ wine.price.bottle }}</span>
            <span v-else class="place">бутылка</span>
          </span>
          <span>₽</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WineConstructorBlock',
  props: {
    blockData: {
      require: true
    }
  },
  data () {
    return {
      inputVal: null
    }
  },
  methods: {
    changeMaxWidth (ref, value) {
      if (value.length) {
        this.inputVal = value
        this.$nextTick(() => {
          const width = this.$refs.input.clientWidth
          this.$refs[ref][0].style.maxWidth = (width + 4) + 'px'
        })
      } else if (ref.includes('cup')) {
        this.$refs[ref][0].style.maxWidth = '57px'
      } else {
        this.$refs[ref][0].style.maxWidth = '82px'
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wcb {
    margin-bottom: 70px;
    .wcb-input-sizer{
      display: inline-block;
      position: fixed;
      left: - 300vw;
      @include FontStyle('Acrom', bold, #FFFFFF, 25px, 30px);
    }
    .wcb__title{
      @include FontStyle('Acrom', bold, #FFFFFF, 30px, 36px);
      text-transform: uppercase;
      margin-bottom: 36px;
    }
    .wcb__body{}
    .wcb__item{
      display: flex;
      justify-content: space-between;
      padding: 11px 0;
      border-bottom: 4px solid #FFFFFF;
    }
    .wcb__left{
      max-width: 325px;
      min-width: 325px;
    }
    .wcb__name{
      @include FontStyle('Acrom', normal, #FFFFFF, 25px, 30px);
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .wcb__description{
      @include FontStyle('Acrom', normal, #FFFFFF, 18px, 22px);
    }
    .wcb__price-box{
      display: flex;
      align-items: center;
      input{
        background-color: transparent;
        border: none;
        max-width: 57px;
        @include FontStyle('Acrom', bold, #FFFFFF, 25px, 30px);
        display: flex;
        align-items: center;
        position: relative;
        -moz-appearance: textfield;
      }
      .wcb__input-bottle{
        max-width: 82px;
      }
      input::placeholder{
        position: absolute;
        top: 3px;
        @include FontStyle('Acrom', bold, rgba(255, 255, 255, 0.5), 18px, 24px);
      }
      span{
        @include FontStyle('Acrom', bold, #FFFFFF, 25px, 30px);
      }
      span:last-child{
        margin-left: 5px;
      }
      input::-webkit-inner-spin-button{
        display: none !important;
      }
      span .place {
        @include FontStyle('Acrom', bold, rgba(255, 255, 255, 0.5), 18px, 24px);
      }
    }
  }
</style>
