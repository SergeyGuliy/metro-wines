import Vue from 'vue'
import { mapActions } from 'vuex'
import { api } from '../assets/js/api'
import { initGeolocation } from '../assets/js/initGeolocation'

Vue.mixin({
  data () {
    return {}
  },
  computed: {
    $tradeCenters () {
      return this.$store?.state?.tradeCenters
    },
    $userTradeCenter () {
      return this.$store?.state?.userTradeCenter
    },
    $userHash: {
      get () {
        return this.$store?.state?.userHash
      },
      set (userHash) {
        this.$cookies.set('userHash', userHash)
        this.$store.commit('SET_USER_HASH', userHash)
      }
    },
    $userBucket () {
      return this.$store?.state?.bucket?.bucket
    }
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
    },
    async $fetchBucket () {
      await api.bucket.getMyBasket(this.$userTradeCenter?.store_id, this.$userHash).then((data) => {
        this.$userHash = data.data.user_hash
        this.$store.commit('bucket/SET_BUCKET', data.data)
      }).catch((e) => {
        console.log(e)
      })
    },
    async $loadGeoData () {
      if (!this.$userTradeCenter) {
        await initGeolocation(this.$userTradeCenter).then((data) => {
          const points = this.$tradeCenters
          function diagonal (point) {
            return Math.pow(point.longitude, 2) + Math.pow(point.latitude, 2)
          }
          let closestTradeCenter = null
          points.forEach((currentCenter) => {
            const currentDelta = Math.abs(diagonal(data) - diagonal(currentCenter.coordinates))
            if (!currentCenter.coordinates) { return }
            if (!closestTradeCenter) {
              closestTradeCenter = currentCenter
              closestTradeCenter.coordinates.delta = currentDelta
            } else if (currentDelta < closestTradeCenter.coordinates.delta) {
              closestTradeCenter = currentCenter
              closestTradeCenter.coordinates.delta = currentDelta
            }
          })
          this.$cookies.set('userTradeCenterId', closestTradeCenter.store_id)
          this.$store.commit('SET_USER_TRADE_CENTER', closestTradeCenter)
        }).catch((e) => {
          const defaultCenter = this.$tradeCenters.find(i => i.city === 'Москва')
          this.$cookies.set('userTradeCenterId', defaultCenter.store_id)
          this.$store.commit('SET_USER_TRADE_CENTER', defaultCenter)
        })
      }
    }
  }
})
