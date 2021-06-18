<template>
  <div
    class="input-box"
    :class="{'input-box--depresed': depresed, 'input-box--error': localError}"
  >
    <input
      ref="localInput"
      v-model="localValue"
      type="text"
      class="input-field"
      :placeholder="placeholder"
      :class="search? 'input-field__search' : null"
    >
    <div v-if="showRecomendation && showRecomendationStatus" class="input-box__recomendation">
      <div
        v-for="(city, index) in filterdCities"
        :key="index"
        class="input-box__city"
        @click="localValue = city"
      >
        {{ city }}
      </div>
    </div>
    <div v-if="search" class="input-box__search">
      <Search />
    </div>
    <div class="input-box__append">
      <slot name="append" />
    </div>
    <div class="input-box__error">
      {{ localError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  components: {
    Search: () => import('../../assets/icons/Search.svg')
  },
  props: {
    errors: {},
    value: {
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    search: {
      type: Boolean,
      default: () => false
    },
    depresed: {
      type: Boolean,
      default: () => false
    },
    showRecomendation: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      showRecomendationStatus: false
    }
  },
  computed: {
    filterdCities () {
      return this.$cities.filter(i => i.toUpperCase().includes(this.localValue.toUpperCase()))
    },
    localError () {
      return this.errors ? this.errors.filter(error => typeof error === 'string')[0] : ''
    },
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    this.$refs.localInput.onblur = () => {
      setTimeout(() => {
        this.showRecomendationStatus = false
      }, 100)
    }
    this.$refs.localInput.onfocus = () => {
      this.showRecomendationStatus = true
    }
  },
  methods: {
    clickCity (city) {
      console.log(city)
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .input-box {
    width: 100%;
    height: 100%;
    position: relative;
    .input-field{
      width: 100%;
      height: 100%;
      border: 1px solid #737373;
      border-radius: 5px;
      padding: 0 8px;
      @include FontStyle('Acrom', normal, #000000, 20px, 25px);
    }
    /*.input-field:focus{*/
    /*  border: 1px solid #737373;*/
    /*}*/

    .input-box__recomendation{
      position: absolute;
      top: calc(100%);
      border: 1px solid #737373;
      border-radius: 5px;
      left: 0;
      width: 100%;
      height: fit-content;
      max-height: 100px;
      overflow: auto;
      background-color: white;
      z-index: 1;
      .input-box__city{
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .input-field__search{
      padding: 0 8px 0 62px;
    }
    .input-box__append{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .input-box__search{
      height: 22px;
      width: 22px;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      svg{
        max-width: 100%;
        max-height: 100%;
      }
    }
    ::placeholder{
      @include FontStyle('Acrom', normal, #999999, 20px, 25px);
    }
    .input-box__error{
      display: none;
    }
  }
  .input-box--depresed{
    .input-field{
      border: none;
    }
  }
  .input-box--error{
    .input-field{
      border: 1px solid #710000;
    }
    .input-box__error{
      display: block;
      padding-left: 5px;
      @include FontStyle('Acrom', normal, #710000, 12px, 13px);

    }
  }
</style>
