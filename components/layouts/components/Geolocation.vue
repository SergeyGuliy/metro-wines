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

      <div class="header__toogler-box media-tablet" @click.stop="">
        Заказ вина
        <button
          :class="{'header__toggler-btn--active': $userType === 'self'}"
          class="header__toggler-btn"
          @click.stop="$emit('setUser', 'self')"
        >
          для себя
        </button>
        <button
          :class="{'header__toggler-btn--active': $userType === 'restoraunt'}"
          class="header__toggler-btn"
          @click.stop="$emit('setUser', 'restoraunt')"
        >
          для ресторана
        </button>
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
        .then(() => {})
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

    @media (max-width: 1080px) {
      .dropdown-box__bottom{
        margin-bottom: 10px;
      }
      .dropdown-box__top{
        display: none;
      }
    }

    @media (max-width: 767px) {
      .dropdown-box__bottom{
        margin-bottom: 0px;
      }
    }
  }
</style>
