import Vue from 'vue'
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { api } from '../assets/js/api'
import { initGeolocation } from '../assets/js/initGeolocation'
import { defender } from '../components/layouts/components/defender'

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
    $userType: {
      get () {
        return this.$store?.state?.userType
      },
      set (userType) {
        this.$store.commit('SET_USER_TYPE', userType)
      }
    },
    $userBucket () {
      return this.$store?.state?.bucket?.bucket
    },
    $getTotalPrice () {
      let a = 0
      if (this.$userBucket) {
        Object.values(this.$userBucket).forEach((item) => {
          if (item.wineData.prices.price) {
            a = +a + (+item.count * +item.wineData.prices.price)
          }
        })
      }
      return a
    },
    $getTotalDiscount () {
      let a = 0
      if (this.$userBucket) {
        Object.values(this.$userBucket).forEach((item) => {
          if (item.wineData.prices.old_price) {
            a = +a + (+item.count * +item.wineData.prices.old_price)
          }
        })
      }
      return a
    }
  },
  methods: {
    ...mapActions('modals', ['setModal']),
    $openProductModal (item) {
      console.log(item)
      this.$openModal('WineCard', item)
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    $scrollToCard () {
      try {
        this.close()
      } catch (e) {}
      try {
        document.getElementById('wineCard').scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      } catch (e) {}
    },

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
    $routeMiddleWare () {
      if (this.$userType === 'restoraunt') {
        if (!['retail', 'wine-cart'].includes(this.$route.name)) {
          this.$router.push({ name: 'retail' })
        }
      } else if (this.$userType === 'self') {
        if (['retail', 'wine-cart'].includes(this.$route.name)) {
          this.$router.push({ name: 'index' })
        }
      }
      defender()
    },
    async $selectUserAge () {
      const is18 = localStorage.getItem('is18')
      if (!is18) {
        await this.$openModal('Is18YearsOld')
          .then(() => {
            localStorage.setItem('is18', 'yes')
          })
          .catch((e) => {
            window.location.href = 'https://www.metro-cc.ru/'
          })
      }
    },
    async $selectUserType () {
      const userType = localStorage.getItem('userType')
      if (userType) {
        this.$store.commit('SET_USER_TYPE', userType)
      } else {
        await this.$openModal('WineOwner')
          .then((data) => {
            localStorage.setItem('userType', data)
            this.$store.commit('SET_USER_TYPE', data)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
    $calculateDiscount (oldPrice, newPrice) {
      return ((1 - (+newPrice / +oldPrice)) * 100).toFixed()
    },
    $fetchBucket () {
      if (localStorage.getItem('bucket')) {
        const bucket = JSON.parse(localStorage.getItem('bucket'))
        if (typeof bucket === 'object') {
          this.$store.commit('bucket/SET_BUCKET', bucket)
        }
      }
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
