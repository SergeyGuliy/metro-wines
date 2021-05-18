<template>
  <div class="filter-box">
    <div class="box-title">
      ФИЛЬТРЫ
    </div>
    <div class="filter-box__row">
      <InputBox v-model="searchField" :depresed="true" placeholder="Поиск по названию" class="filter-box__cubic" :search="true" />
      <Button class="filter-box__cubic" :depresed="true">
        ИСКАТЬ
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  components: {
    InputBox: () => import('../form/InputBox'),
    Button: () => import('../form/Button')
  },
  data () {
    return {
      searchField: ''
    }
  }
}
</script>

<style lang='scss'>
  .filter-box {
    margin-bottom: 110px;
    .filter-box__row{
      background: #FFFFFF;
      border-radius: 5px;
      display: flex;
      height: 70px;
      margin-bottom: 20px;
    }
    .filter-box__cubic{
      border-radius: 0px;
    }
  }
</style>
