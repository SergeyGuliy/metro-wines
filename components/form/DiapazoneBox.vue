<template>
  <div
    v-click-outside="hide"
    class="custom-input-box noselect"
    @click="isOpen = true"
  >
    <div class="custom-input-box__outer">
      <component :is="data.icon" class="custom-input-box__icon" />
      <span class="custom-input-box__outer-text">{{ data.title }}</span>
      <Arrow class="custom-input-box__arrow" />
    </div>
    <div v-if="isOpen" class="custom-input-box__inner-box diapazone-box">
      <div class="diapazone-box__inputs">
        <div class="diapazone-box__input-box">
          <div class="diapazone-box__input-box-prepend">
            от
          </div>
          <input type="text" class="diapazone-box__input">
          <div class="diapazone-box__input-box-append">
            ₽
          </div>
        </div>
        <div class="diapazone-box__input-box">
          <div class="diapazone-box__input-box-prepend">
            до
          </div>
          <input type="text" class="diapazone-box__input">
          <div class="diapazone-box__input-box-append">
            ₽
          </div>
        </div>
      </div>
      <veeno
        connect
        :handles="handles"
        :range="range"
      />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SelectBox',
  directives: {
    ClickOutside
  },
  components: {
    Color: () => import('assets/icons/color.svg'),
    Bucket: () => import('assets/icons/bucket.svg'),
    Sort: () => import('assets/icons/sort.svg'),
    Map: () => import('assets/icons/map.svg'),
    Sugar: () => import('assets/icons/sugar.svg'),
    Arrow: () => import('assets/icons/arrow-2.svg'),
    Close: () => import('assets/icons/close-2.svg'),
    veeno: () => import('veeno')
  },
  props: {
    value: {
      required: true
    },
    items: {
      required: true
    },
    data: {
      required: true
    }
  },
  data () {
    return {
      handles: [35, 55],
      range: {
        min: 0,
        max: 100
      },
      isOpen: false
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    hide () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";

  .diapazone-box{
    max-width: 100%;
    cursor: default;
    .diapazone-box__inputs{
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .diapazone-box__input-box{
      max-width: calc(50% - 4px);
      position: relative;
    }
    .diapazone-box__input-box-prepend, .diapazone-box__input-box-append{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .diapazone-box__input-box-prepend{
      left: 8px;
      @include FontStyle('Acrom', normal, #000000, 16px, 19px);
    }
    .diapazone-box__input-box-append{
      right: 20%;
      @include FontStyle('Acrom', normal, #828282, 16px, 19px);
    }
    .diapazone-box__input{
      max-width: 100%;
      height: 38px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      border-radius: 5px;
      padding: 0 50px 0 30px;
    }
  }
</style>
