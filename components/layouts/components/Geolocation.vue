<template>
  <div id="geolocation-activator" class="geolocation" @click="openSelectCity">
    <geolocation class="svg-geolocation" />
    <div class="dropdown-box">
      <div class="dropdown-box__top">
        Торговый центр
      </div>
      <div class="dropdown-box__bottom">
        {{ getTradeCenterName }}
        <arrow class="svg-arrow" />
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
  },
  computed: {
    getTradeCenterName () {
      return this.$userTradeCenter ? `${this.$userTradeCenter?.city}, ${this.$userTradeCenter?.name}` : ''
    }
  },
  methods: {
    openSelectCity () {
      this.$openModal('SelectCity', { activator: '#geolocation-activator' })
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";
  .geolocation {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
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
