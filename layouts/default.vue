<template>
  <div class="layout-default" :class="{'overflow-hidden': component}">
    <Header />
    <div class="layout__inner">
      <Nuxt />
    </div>
    <Footer />
    <client-only>
      <transition name="fade">
        <ModalController v-if="component" />
      </transition>
    </client-only>
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('../components/layouts/Header'),
    Footer: () => import('../components/layouts/Footer'),
    ModalController: () => import('../components/layouts/ModalController')
  },
  computed: {
    component () {
      return this.$store.state.modals.component
    }
  },
  watch: {
    component (val) {
      if (val) {
        this.disableScrolling()
      } else {
        this.enableScrolling()
      }
    }
  },
  methods: {
    disableScrolling () {
      const x = window.scrollX
      const y = window.scrollY
      window.onscroll = function (e) {
        e.preventDefault()
        window.scrollTo(x, y)
      }
    },

    enableScrolling () {
      window.onscroll = function () {}
    }
  }
}
</script>

<style lang="scss">
.layout-default{
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  .layout__inner{
    flex: 1 1 auto;
  }
}
</style>
