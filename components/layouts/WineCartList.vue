<template>
  <div class="wine-cart-list">
    <CardItem v-for="(card, index) in cards" :key="index" :card="card" />
  </div>
</template>

<script>
export default {
  name: 'WineCartList',
  components: {
    CardItem: () => import('./CardItem')
  },
  data () {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8]
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
