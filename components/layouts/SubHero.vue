<template>
  <div class="sub-hero">
    <div class="container">
      <div class="sub-hero__row">
        <SubHeroColumn v-for="column in columns" :key="column.number" :column="column" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHero',
  components: {
    SubHeroColumn: () => import('./SubHeroColumn')
  },
  data () {
    return {
      columns: [
        {
          number: '1',
          text: 'ВЫБЕРИТЕ <br>вина, соответствующие <br> концепции вашего<br> заведения'
        },
        {
          number: '2',
          text: 'СФОРМИРУЙТЕ<br> вашу винную<br> карту в PDF формате <br>с выбранным<br> дизайном'
        },
        {
          number: '3',
          text: 'ОТПРАВЬТЕ <br> cформированный <br> Excel файл вашему<br> менеджеру для заказа'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .sub-hero {
    height: 297px;
    background-color: #3C0A0A;
    .sub-hero__row{
      padding: 70px 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .sub-hero__col{
      width: 33%;
      position: relative;
    }
    .sub-hero__number{
      position: absolute;
      top: -69px;
      @include FontStyle('Acrom', normal, #ffffff, 247px, 296px);
      opacity: 0.28;
    }
    .sub-hero__text{
      position: absolute;
      top: 23px;
      left: 111px;
      @include FontStyle('Acrom', normal, #ffffff, 26px, 31px);
    }
  }
</style>
