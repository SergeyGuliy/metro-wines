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
import ResizeObserver from 'resize-observer-polyfill'

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
    try {
      document.querySelector('.sub-hero .container .sub-hero__row').children.forEach((i) => {
        i.children.forEach((j) => {
          j.innerHTML = j.innerHTML.replace(/\u2028/g, ' ')
          j.innerHTML = j.innerHTML.replace(/&#8232;/g, ' ')
        })
      })
    } catch (e) {

    }
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault()
    })
    document.addEventListener('touchmove', function (event) {
      event = event.originalEvent || event
      if (event.scale > 1) {
        event.preventDefault()
      }
    }, false)

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

    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
  methods: {
    disableScrolling () {
      document.querySelector('body').style.overflow = 'hidden'
    },

    enableScrolling () {
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
  margin-top: 70px;
  .layout__inner{
    flex: 1 1 auto;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
}
</style>
