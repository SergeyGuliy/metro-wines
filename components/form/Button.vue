<template>
  <button
    class="button"
    :class="{'button--depresed': depresed, 'button--outlined': outlined, 'button--filled': filled}"
    @click.stop="$emit('click')"
  >
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    outlined: {
      default: () => false,
      type: Boolean
    },
    depresed: {
      default: () => false,
      type: Boolean
    },
    filled: {
      default: () => false,
      type: Boolean
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .button {
    cursor: pointer;
    .button__text{
      @include FontStyle('Acrom', normal, #710000, 14px, 16px);

    }
  }
  .button--outlined{
    border: none;
    background-color: transparent;
    .button__text{
      font-weight: bold;
      color: #710000;
    }
  }
  .button--depresed{
    border: none;
    background-color: #f2f2f2;
    padding: 0 52px;
    .button__text{
      font-weight: bold;
      color: #710000;
    }
  }
  .button--filled{
    border: none;
    background: #710000;
    border-radius: 5px;
    padding: 0 17px;
    height: 100%;
    .button__text{
      font-weight: normal;
      color: #FFFFFF;
    }
  }
</style>
