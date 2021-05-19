<template>
  <div
    class="textarea-box"
    :class="depresed? 'textarea-box--depresed' : null"
  >
    <textarea
      v-model="lovalValue"
      type="text"
      class="textarea-field"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'TextareaBox',
  props: {
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
    .textarea-field:focus{
      border: 1px solid #737373;
    }
    ::placeholder{
      @include FontStyle('Acrom', normal, #999999, 20px, 25px);
    }
  }
  .textarea-box--depresed{
    .textarea-field{
      border: none;
    }
  }
</style>
