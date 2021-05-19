<template>
  <div class="custom-input-box noselect" @click="$emit('input', !localValue)">
    Премиум ассортимент
    <div class="checkbox" :class="{'checkbox--active':localValue}">
      <Ok class="svg-ok" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioBox',
  components: {
    Ok: () => import('assets/icons/ok.svg')
  },
  props: {
    value: {
      required: true
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
  }
}
</script>
