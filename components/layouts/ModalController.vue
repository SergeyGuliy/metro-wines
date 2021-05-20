<template>
  <div class="modal-wrapper" @click="clickModalWrapper">
    <transition name="fade">
      <template v-if="getComponent">
        <component :is="getComponent" />
      </template>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalController',
  computed: {
    ...mapState('modals', ['component']),

    getComponent () {
      if (this.component) {
        return require(`../modals/${this.component}`).default
        // eslint-disable-next-line no-unreachable
      } else {
        return null
      }
    }
  },
  methods: {
    clickModalWrapper () {
      this.$bus.emit('clickModalWrapper')
    }
  }
}
</script>

<style lang='scss'>
  .modal-wrapper {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(000, 000, 000, 0.5);
    /*visibility: hidden;*/
  }
  .modal-wrapper--active{
    /*visibility: visible;*/
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
