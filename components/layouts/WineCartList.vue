<template>
  <div class="wine-cart-list">
    <CardItem
      v-for="(item, index) in $userBucket"
      :key="index"
      :selected-wines="selectedWines"
      :wine-data="item"
      @toggleList="toggleList"
    />
  </div>
</template>

<script>
export default {
  name: 'WineCartList',
  components: {
    CardItem: () => import('./CardItem')
  },
  props: {
    selectedWines: {}
  },
  data () {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    toggleList (item) {
      this.$emit('toggleList', item)
    }
  }
}
</script>

<style lang='scss'>
  .wine-cart-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
