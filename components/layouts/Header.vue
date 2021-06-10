<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__info-box">
        <LogoMetro class="svg-logo-metro" @click="routerGo" />
        <LogoMetroSmall class="svg-logo-metro-small" @click="routerGo" />
        <Geolocation
          class="geo-big"
          @setUser="setUser"
        />
      </div>
      <div class="header__toogler-box media-desktop media-mobile">
        <span>Заказ вина</span>
        <button
          :class="{'header__toggler-btn--active': $userType === 'self'}"
          class="header__toggler-btn"
          @click="setUser('self')"
        >
          для себя
        </button>
        <button
          :class="{'header__toggler-btn--active': $userType === 'restoraunt'}"
          class="header__toggler-btn"
          @click="setUser('restoraunt')"
        >
          для ресторана
        </button>
      </div>
      <div id="bucket-activator" class="header__bucket-box" @click="openBucket">
        <nuxt-link to="">
          Моя винная карта
        </nuxt-link>
        <div
          class="bucket"
          :class="{'bucket--active': isNotEmpty}"
        >
          <Bucket />
          <div class="bucket__chip">
            {{ isNotEmpty }}
          </div>
        </div>
      </div>
    </div>
    <Geolocation class="geo-small" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
    LogoMetro: () => import('assets/icons/logo_metro.svg'),
    LogoMetroSmall: () => import('assets/icons/logo_metro_small.svg'),
    Bucket: () => import('assets/icons/bucket-2.svg'),
    Geolocation: () => import('./components/Geolocation')

  },
  computed: {
    isNotEmpty () {
      return Object.keys(this.$userBucket).length
    }
  },
  methods: {
    setUser (newType) {
      this.$userType = newType
      this.routerGo()
    },
    routerGo () {
      if (this.$userType === 'restoraunt') {
        this.$router.push({ name: 'retail' })
      } else {
        this.$router.push({ name: 'index' })
      }
    },
    openBucket () {
      this.$openModal(this.$userType === 'self' ? 'BucketUser' : 'BucketRestoraunt', { activator: '#bucket-activator' })
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
  .header {
    height: 100px;
    width: 100%;
    background-color: #710000;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    .header__toogler-box{
      display: none;
      @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
      .header__toggler-btn{
        height: 35px;
        padding: 0 10px;
        border-radius: 60px;
        border: none;
        cursor: pointer;
        background-color: #7f1919;
        @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
      }
      .header__toggler-btn--active{
        background-color: #ffffff;
        @include FontStyle('Acrom', normal, #710000, 18px, 22px);

      }
    }
    .svg-logo-metro-small{
      display: none;
    }
    .geo-small{
      display: none;
    }
    .header__container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header__info-box{
      display: flex;
      align-items: center;
      .svg-logo-metro{
        cursor: pointer;
        margin-right: 60px;
      }
    }
    .header__bucket-box{
      display: flex;
      align-items: center;
      position: relative;
      a{
        @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
      }
    }
    .bucket{
      cursor: pointer;
      margin-left: 18px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #FFFFFF;
      position: relative;
      .bucket__chip{
        display: none;
      }
    }
    .bucket--active{
      background: rgba(0, 0, 0, 0.3);
      .bucket__chip{
        position: absolute;
        top: -11px;
        right: -11px;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #710000;
        box-sizing: border-box;
        @include FontStyle('Acrom', bold, #710000, 16px, 19px);
      }

    }

    @media (max-width: 1080px) {
      .header__bucket-box{
        a{
          display: none;
        }
      }
      .header__info-box{
        .svg-logo-metro{
          margin-right: 29px;
        }
      }
    }

    @media (max-width: 767px) {
      height: 103px;
      .bucket.bucket--active{
        margin-left: 0;
      }
      .header__toogler-box{
        margin-left: 15px;
        margin-right: auto;
        span{
          display: none;
        }
        .header__toggler-btn.header__toggler-btn--active{
          display: none !important;
        }
        .header__toggler-btn{
          font-size: 14px;
          line-height: 14px;
          padding: 0 8px;
        }
      }
      .header__info-box{
        .svg-logo-metro{
          display: none;
        }
        .svg-logo-metro-small{
          display: block;
        }
      }
      .container.header__container{
        height: 61px;
        padding: 0 21px;
      }
      .bucket{
        height: 32px;
        width: 32px;
        svg{
          min-width: 19px;
          margin-top: 2px;
          transform: scale(0.7);
        }
        .bucket__chip{
          @include FontStyle('Acrom', bold, #710000, 12px, 14px);
          height: 20px;
          width: 20px;
        }
      }
      .geo-big{
        display: none;
      }
      .geo-small{
        border-top: 2px solid white;
        display: flex;
        padding: 0 21px;
        .svg-geolocation{
          min-width: 33px;
          transform: scale(0.7);
          margin-right: 7px;
        }
        .dropdown-box__top{
          display: none;
        }
        .dropdown-box__bottom{
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: center;
          .svg-arrow{
            min-width: 33px;
            margin-left: 6px;
          }
        }
      }
    }
  }
  @media (min-width: 1080px) {
    .media-desktop{
      display: block !important;
    }
  }
  @media (min-width: 767px) and(max-width: 1080px) {
    .media-tablet{
      display: block !important;
    }
  }
  @media (max-width: 767px) {
    .media-mobile{
      display: block !important;
    }
  }
</style>
