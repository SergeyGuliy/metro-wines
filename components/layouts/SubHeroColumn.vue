<template>
  <div class="sub-hero__col">
    <div class="sub-hero__number">
      {{ column.number }}
    </div>
    <h2 class="sub-hero__text mt-0" v-html="column.text" />
  </div>
</template>

<script>
export default {
  name: 'SubHeroColumn',
  props: {
    column: {
      required: true,
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  .SubHeroColumn {

  }
</style>
