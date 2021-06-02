<template>
  <div class="layout-default" :class="{'overflow-hidden': component}">
    <Header class="sizer" />
    <!--    <Chat />-->
    <div class="layout__inner sizer">
      <Nuxt />
    </div>
    <Footer class="sizer" />
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
    // Chat: () => import('../components/layouts/Chat'),
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
  mounted () {
    // const layoutInner = document.querySelector('.layout__inner')
    //
    // function outputsizeHeader () {
    //   console.log(`-${layoutInner.offsetHeight / 5} px`)
    //   console.log(document.querySelector('.layout__inner').style)
    //   document.querySelector('.layout__inner').style.marginBottom = `-${(layoutInner.offsetHeight / 5).toFixed()}px`
    // }
    // outputsizeHeader()
    //
    // new ResizeObserver(outputsizeHeader).observe(layoutInner)

    const layoutInner = document.querySelector('.layout__inner')
    const layoutHeader = document.querySelector('.header')
    const layoutFooter = document.querySelector('.footer')

    function outputsizeHeader () {
      if (window.innerWidth > 768) {
        layoutHeader.style.marginBottom = `-${(layoutHeader.offsetHeight / 4).toFixed()}px`
      } else {
        layoutHeader.style.marginBottom = '0px'
      }
    }
    function outputsizeFooter () {
      if (window.innerWidth > 768) {
        layoutFooter.style.marginBottom = `-${(layoutFooter.offsetHeight / 4).toFixed()}px`
      } else {
        layoutFooter.style.marginBottom = '0px'
      }
    }
    function outputsizeLayout () {
      if (window.innerWidth > 768) {
        layoutInner.style.marginBottom = `-${(layoutInner.offsetHeight / 4).toFixed()}px`
      } else {
        layoutInner.style.marginBottom = '0px'
      }
    }
    outputsizeHeader()
    outputsizeFooter()
    outputsizeLayout()

    new ResizeObserver(outputsizeLayout).observe(layoutInner)
    new ResizeObserver(outputsizeHeader).observe(layoutHeader)
    new ResizeObserver(outputsizeFooter).observe(layoutFooter)

    // window.addEventListener('resize', () => {
    //   outputsizeHeader()
    //   outputsizeFooter()
    //   outputsizeLayout()
    // })
  },
  methods: {
    disableScrolling () {
      // const x = window.scrollX
      // const y = window.scrollY
      // window.onscroll = function (e) {
      //   e.preventDefault()
      //   window.scrollTo(x, y)
      // }
      document.querySelector('body').style.overflow = 'hidden'
    },

    enableScrolling () {
      // window.onscroll = function () {}
      document.querySelector('body').style.overflow = 'auto'
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
