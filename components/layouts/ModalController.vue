<template>
  <div v-if="getComponent" class="modal-wrapper">
    <component :is="getComponent" v-if="getComponent" />
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
  }
</style>
