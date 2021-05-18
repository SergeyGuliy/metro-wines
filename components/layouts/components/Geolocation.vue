<template>
  <div class="geolocation">
    <geolocation class="svg-geolocation" />
    <div class="dropdown-box">
      <div class="dropdown-box__top">
        Торговый центр
      </div>
      <div class="dropdown-box__bottom">
        Москва, Ленинградское ш., д.71Г
        <arrow class="svg-arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Geolocation',
  components: {
    geolocation: () => import('assets/icons/geolocation.svg'),
    arrow: () => import('assets/icons/arrow.svg')
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";
  .geolocation {
    display: flex;
    align-items: center;
    cursor: pointer;
    .svg-geolocation{
      margin-right: 19px;
    }
    .svg-arrow{
      margin-left: 8px;
    }
    .dropdown-box{
      @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
    }
  }
</style>
