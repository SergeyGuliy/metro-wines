import Vue from 'vue'
import { mapActions } from 'vuex'

Vue.mixin({
  data () {
    return {}
  },
  computed: {
    // $user () {
    //   return this.$store.state.user?.user
    // }
  },
  methods: {
    ...mapActions('modals', ['setModal']),
    $openModal (modalName, data = {}) {
      this.$store.dispatch('modals/setModal', {
        component: modalName,
        data
      })

      return new Promise(function (resolve, reject) {
        const callback = (data) => {
          if (data.detail !== null) {
            resolve(data.detail)
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject()
          }
          window.removeEventListener('modalClose', callback)
        }
        window.addEventListener('modalClose', callback)
      })
    }
  }
})
