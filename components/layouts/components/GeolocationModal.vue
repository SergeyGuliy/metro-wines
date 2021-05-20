<template>
  <div class="geolocation-modal">
    <div class="geolocation-modal__background" />
    <div class="geolocation-modal__inner">
      <div class="geolocation-modal__title">
        Я покупаю вино
      </div>
      <div class="geolocation-modal__actions">
        <Button
                :filled="true"
        >
          для себя
        </Button>
        <Button
                :filled="true"
        >
          для ресторана*
        </Button>
      </div>
      <div class="geolocation-modal__star">
        *Для держателей оптовых лицензий
      </div>
    </div>
  </div>
</template>

<script>
// import modalMixin from './modalMixin'

export default {
  name: 'WineOwner',
  components: {
    Button: () => import('../../form/Button')
  },
  // mixins: [modalMixin],
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .geolocation-modal {
    width: 500px;
    height: 270px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 80px;
    left: -10px;
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
    .geolocation-modal__inner{
      position: relative;
      z-index: 2;
    }
    .geolocation-modal__background{
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      background: rgba(000, 000, 000, 0.5);
    }
    .geolocation-modal__title{
      @include FontStyle('Acrom', normal, #000000, 36px, 43px);
    }
    .geolocation-modal__actions{
      margin-top: 57px;
      height: 40px;
      .button{
        width: 172px;
        span{
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
    .geolocation-modal__star{
      margin-top: 36px;
      @include FontStyle('Acrom', normal, #000000, 12px, 14px);
    }
  }
</style>
