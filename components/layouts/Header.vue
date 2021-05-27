<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__info-box">
        <LogoMetro class="svg-logo-metro" />
        <LogoMetroSmall class="svg-logo-metro-small" />
        <Geolocation class="geo-big" />
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
            margin-left: 6px;
          }
        }
      }
    }
  }
</style>
