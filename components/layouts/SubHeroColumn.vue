<template>
  <div class="sub-hero__col" :class="`sub-hero__col-${column.number}`">
    <div class="sub-hero__number">
      {{ column.number }}
    </div>
    <h2 class="sub-hero__text mt-0 sub-hero__big" v-html="column.text.big" />
    <h2 class="sub-hero__text mt-0 sub-hero__small" v-html="column.text.small" />
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
