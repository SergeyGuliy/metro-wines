import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      positionWithActivator: ''
    }
  },
  computed: {
    ...mapState('modals', ['data', 'component'])
  },
  created () {
    if (this.data.activator) {
      const domActivator = document.querySelector(this.data.activator)
      // eslint-disable-next-line no-unused-vars
      const { left, right, x, y, width, top, height } = domActivator.getBoundingClientRect()
      if (this.data.activator === '#bucket-activator') {
        if (window.innerWidth > 768) {
          this.positionWithActivator = `top: ${top + height + 30}px; left: ${right - 378}px; transform: translate(0,0)`
        } else {
          this.positionWithActivator = 'transform: translate(0, 0)'
        }
      } else {
        this.positionWithActivator = `top: ${top + height + 40}px; left: ${left}px; transform: translate(0,0)`
      }
    }
  },
  methods: {
    ...mapActions('modals', ['closeModal']),

    close (data = null) {
      if (!this.loading) {
        window.dispatchEvent(
          new CustomEvent('modalClose', {
            detail: data
          })
        )
        this.closeModal()
      }
    }
  }
}
