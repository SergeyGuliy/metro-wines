import Vue from 'vue'
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars
import XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import { api } from '../assets/js/api'
import { initGeolocation } from '../assets/js/initGeolocation'
import { defender } from '../components/layouts/components/defender'
// eslint-disable-next-line no-unused-vars
const mailtoLink = require('mailto-link')

Vue.mixin({
  filters: {
    number (value) {
      return (+value).toFixed(2)
    }
  },
  data () {
    return {
      vt: {
        required: 'Обязательно к заполнению',
        regexPhone: 'Телефон введен не верно. Пример: +7(123)-456-7890',
        regexEmail: 'Email введен не корректно'
      }
    }
  },
  computed: {
    $tradeCenters () {
      return this.$store?.state?.tradeCenters
    },
    $userTradeCenter () {
      return this.$store?.state?.userTradeCenter
    },
    $userType: {
      get () {
        return this.$store?.state?.userType
      },
      set (userType) {
        this.$cookies.set('userType', userType)
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

    s2ab (s) {
      const buf = new ArrayBuffer(s.length) // convert s to arrayBuffer
      const view = new Uint8Array(buf) // create uint8array as viewer
      for (let i = 0; i < s.length; i++) { view[i] = s.charCodeAt(i) & 0xFF } // convert to octet
      return buf
    },
    async $mailTo (body) {
      // eslint-disable-next-line no-unused-vars
      const keysMapTranslator = {
        firstName: 'Имя: ',
        secondName: 'Фамилия: ',
        city: 'Город: ',
        email: 'Email: ',
        phone: 'Телефон: ',
        name: 'Имя: ',
        text: 'Сообщение: '
      }
      const string = []
      if (Object.keys(body).includes('text')) {
        string.push(`${keysMapTranslator.name} ${body.name}
        `)
        string.push(`${keysMapTranslator.city} ${body.city}
        `)
        string.push(`${keysMapTranslator.email} ${body.email}
        `)
        string.push(`${keysMapTranslator.phone} ${body.phone}
        `)
        string.push(`${keysMapTranslator.text} 
        ${body.text}
        `)
      } else {
        string.push(`${keysMapTranslator.firstName} ${body.firstName}
        `)
        string.push(`${keysMapTranslator.secondName} ${body.secondName}
        `)
        string.push(`${keysMapTranslator.city} ${body.city}
        `)
        string.push(`${keysMapTranslator.email} ${body.email}
        `)
        string.push(`${keysMapTranslator.phone} ${body.phone}
        `)
        string.push(`
        Винная карта: 
        `)
        Object.values(this.$userBucket).forEach((item) => {
          string.push(`Артикул: ${item.wineData.article} - ${item.count} шт.
        `)
        })
      }
      // window.location.origin

      await this.$axios.$post(`${window.location.origin}/mail/send`, {
        from: body.email,
        subject: Object.keys(body).includes('text') ? 'Обратная связь' : 'Заявка менеджеру',
        text: string.join('')
      }).then(this.$openModal('Notification'))
    },
    $downloadXLS () {
      const tableData = []
      Object.values(this.$userBucket).forEach((wine) => {
        tableData.push([
          wine.wineData.name,
          wine.wineData.article,
          // wine.wineData.description,
          wine.wineData.prices.price,
          wine.count,
          +wine.count * +wine.wineData.prices.price,
          wine.wineData.attributes.find(i => i.id === 308)?.text || '',
          wine.wineData.attributes.find(i => i.id === 4973)?.text || '',
          wine.wineData.attributes.find(i => i.id === 309)?.text || '',
          wine.wineData.attributes.find(i => i.id === 310)?.text || '',
          wine.wineData.attributes.find(i => i.id === 311)?.text || '',
          wine.wineData.attributes.find(i => i.id === 313)?.text || '',
          wine.wineData.attributes.find(i => i.id === 1702)?.text || '',
          wine.wineData.attributes.find(i => i.id === 4975)?.text || ''
        ])
      })
      const wb = XLSX.utils.book_new()
      wb.Props = {
        Title: 'SheetJS Tutorial',
        Subject: 'Test',
        Author: 'Red Stapler',
        CreatedDate: new Date(2017, 12, 19)
      }
      wb.SheetNames.push('Test Sheet')
      const wsData = [[
        'Наименование',
        'Артикул',
        // 'Описание',
        'Цена за шт',
        'Количество',
        'Сумма',
        'Цвет',
        'Страна',
        'Регион',
        'Сорт винограда',
        'Содержание сахара',
        'Крепость (‰)',
        'Объем, л',
        'Категория вина'

      ]]
      tableData.forEach((data) => {
        wsData.push(data)
      })
      const ws = XLSX.utils.aoa_to_sheet(wsData)
      wb.Sheets['Test Sheet'] = ws
      const wscols = [
        { wpx: 200, hpx: 50 },
        { wpx: 50, hpx: 50 },
        // { wpx: 250, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 },
        { wpx: 75, hpx: 50 }
      ]
      ws['!cols'] = wscols
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
      saveAs(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), 'test.xlsx')
    },

    async $fetchTradecenters () {
      await api.tradecenters.getAll().then((res) => {
        this.$store.commit('SET_TRADE_CENTERS', res.data)
      }).catch((e) => {
        console.log(e)
      })
      // eslint-disable-next-line no-empty
      if (this.$cookies.get('userTradeCenterId')) {
        try {
          this.$store.commit('SET_USER_TRADE_CENTER', this.$store.state.tradeCenters.find((center) => {
            return +center.store_id === +this.$cookies.get('userTradeCenterId')
          }))
        } catch (e) {
          this.$cookies.remove('userTradeCenterId')
        }
      }
    },
    $openProductModal (item) {
      this.$openModal('WineCard', item)
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async $scrollToCard () {
      try {
        this.close()
      } catch (e) {}
      try {
        if (this.$route.name === 'wine-cart') {
          this.$store.commit('SET_SCROLL_TO', true)
          await this.$router.push({ name: 'retail' })
        } else {
          document.getElementById('wineCard').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          })
        }
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
    async $selectUserAge () {
      const is18 = this.$cookies.get('is18')
      if (!is18) {
        await this.$openModal('Is18YearsOld')
          .then(() => {
            this.$cookies.set('is18', 'yes')
          })
          .catch((e) => {
            window.location.href = 'https://www.metro-cc.ru/'
          })
      }
    },
    async $selectUserType () {
      const userType = this.$cookies.get('userType')
      if (userType) {
        this.$store.commit('SET_USER_TYPE', userType)
      } else {
        await this.$openModal('WineOwner')
          .then((data) => {
            console.log(data)
            this.$cookies.set('userType', data)
            this.$store.commit('SET_USER_TYPE', data)
            if (data === 'self') {
              this.$router.push({ name: 'index' })
            } else {
              this.$router.push({ name: 'retail' })
            }
          })
          .catch((e) => {
            console.log(e)
          })
      }
      defender()
    },
    $calculateDiscount (oldPrice, newPrice) {
      return ((1 - (+newPrice / +oldPrice)) * 100).toFixed()
    },
    $fetchBucket () {
      const userType = this.$cookies.get('userType')
      const currentBusket = userType === 'self' ? localStorage.getItem('bucketSelf') : localStorage.getItem('bucketRest')
      if (currentBusket) {
        const bucket = JSON.parse(currentBusket)
        if (typeof bucket === 'object') {
          this.$store.commit('bucket/SET_BUCKET', bucket)
        }
      } else {
        console.log('else')
        this.$store.commit('bucket/SET_BUCKET', {})
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
    },
    goToBucket (signature) {
      window.location.href = `http://online.metro-cc.ru/cart?signature=${signature}`
    },
    async $createOrder () {
      console.error(window.location.origin)

      // this.$cookies.removeAll()
      const busketToServer = Object.values(this.$userBucket).map((i) => {
        return {
          count: i.count,
          article: i.wineData.article
        }
      })
      return await this.$axios
        .post(`${window.location.origin}/api/createOrder`, {
          tradeCenter: this.$userTradeCenter?.store_id,
          busketToServer
        })
        .then((data) => {
          return data.data.user_hash
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  }
})
