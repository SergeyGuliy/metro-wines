<template>
  <div
    class="textarea-box"
    :class="{'textarea-box--depresed': depresed, 'textarea-box--error': localError}"
  >
    <textarea
      v-model="lovalValue"
      type="text"
      class="textarea-field"
      :placeholder="placeholder"
    />
    <div class="input-box__error">
      {{ localError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaBox',
  props: {
    errors: {},
    value: {
      required: true
    },
    placeholder: {
      type: String,
      required: false
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
    localError () {
      return this.errors ? this.errors.filter(error => typeof error === 'string')[0] : ''
    },
    lovalValue: {
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

  .textarea-box {
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 120px;
    .textarea-field{
      width: 100%;
      min-height: 120px;
      border: 1px solid #737373;
      border-radius: 5px;
      padding: 0 8px;
      resize: none;
      @include FontStyle('Acrom', normal, #000000, 20px, 25px);
    }
    /*.textarea-field:focus{*/
    /*  border: 1px solid #737373;*/
    /*}*/
    ::placeholder{
      @include FontStyle('Acrom', normal, #999999, 20px, 25px);
    }
    .textarea-box__error{
      display: none;
    }
  }
  .textarea-box--depresed{
    .textarea-field{
      border: none;
    }
  }
  .textarea-box--error{
    .textarea-field{
      border: 1px solid #710000;
    }
    .input-box__error{
      display: block;
      padding-left: 5px;
      @include FontStyle('Acrom', normal, #710000, 12px, 13px);

    }
  }
</style>
