<template>
  <div
    class="input-box"
    :class="depresed? 'input-box--depresed' : null"
  >
    <input
      v-model="localValue"
      type="text"
      class="input-field"
      :placeholder="placeholder"
      :class="search? 'input-field__search' : null"
    >
    <div v-if="search" class="input-box__search">
      <Search />
    </div>
    <div class="input-box__append">
      <slot name="append" />
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
    }
  },
  data () {
    return {}
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
    .input-field:focus{
      border: 1px solid #737373;
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
  }
  .input-box--depresed{
    .input-field{
      border: none;
    }
  }
</style>
