<template>
  <div class="wine-owner-modal">
    <div class="wine-owner-modal__title">
      Я покупаю вино
    </div>
    <div class="wine-owner-modal__actions">
      <Button
        :filled="true"
        @click="close('self')"
      >
        для себя
      </Button>
      <Button
        :filled="true"
        @click="close('restoraunt')"
      >
        для ресторана*
      </Button>
    </div>
    <div class="wine-owner-modal__star">
      *Для держателей оптовых лицензий
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin'

export default {
  name: 'WineOwner',
  components: {
    Button: () => import('../form/Button')
  },
  mixins: [modalMixin],
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .wine-owner-modal {
    width: 500px;
    height: 270px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
    .wine-owner-modal__title{
      @include FontStyle('Acrom', normal, #000000, 36px, 43px);
    }
    .wine-owner-modal__actions{
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
    .wine-owner-modal__star{
      margin-top: 36px;
      @include FontStyle('Acrom', normal, #000000, 12px, 14px);
    }

    @media (max-width: 1080px) {

    }

    @media (max-width: 767px) {
      width: 300px;
      height: 234px;
      padding: 26px 0 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .wine-owner-modal__title{
        text-align: center;
        margin-bottom: 32px;
        @include FontStyle('Acrom', normal, #000000, 20px, 24px);
      }
      .wine-owner-modal__star{
        margin-top: 28px;
      }
      .wine-owner-modal__actions{
        display: flex;
        height: unset;
        margin-top: 0;
        flex-direction: column;
        .button{
          min-height: 40px;
          width: 172px;
        }
        .button:first-child{
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
