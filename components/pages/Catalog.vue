<template>
  <div class="catalog">
    <div class="box-title">
      ВИННАЯ КАРТА
    </div>
    <div class="catalog__cards-box">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
    <PaginatorBox />
    <div class="catalog__warning">ЧРЕЗМЕРНОЕ ПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ</div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  components: {
    Card: () => import('./Card'),
    PaginatorBox: () => import('./PaginatorBox')
  },
  data () {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .catalog {
    .catalog__cards-box{
      display: flex;
      flex-wrap: wrap;
    }
    .catalog__warning{
      margin-top: 72px;
      display: flex;
      justify-content: center;
      @include FontStyle('Acrom', normal, #000000, 34px, 40px);
    }
  }
</style>
