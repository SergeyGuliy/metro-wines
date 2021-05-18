<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__info-box">
        <LogoMetro class="svg-logo-metro" />
        <Geolocation />
      </div>
      <div class="header__bucket-box">
        <nuxt-link to="">
          Моя винная карта
        </nuxt-link>
        <div class="bucket">
          <Bucket />
          <div class="bucket__chip">12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
    LogoMetro: () => import('assets/icons/logo_metro.svg'),
    Bucket: () => import('assets/icons/bucket-2.svg'),
    Geolocation: () => import('./components/Geolocation')

  },
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";
  .header {
    height: 100px;
    width: 100%;
    background-color: #710000;
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
      background: rgba(0, 0, 0, 0.3);
      border: 2px solid #FFFFFF;
      position: relative;
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
      }
    }
  }
</style>
