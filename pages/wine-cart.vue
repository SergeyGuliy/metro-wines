<template>
  <div class="wine-cart-main">
    <Hero />
    <div class="wine-cart-main__container">
      <div class="container">
        <div class="wine-cart-main__title">
          В вашей винной карте {{ basketLength }} {{ basketLengthWinesNames[basketLength] || 'вин' }}
        </div>
        <WineCartList />
        <div class="wine-cart-main__actions">
          <Button :filled="true" :uppercase="true" @click="downloadXLS">
            Скачать EXCEL для заказа
          </Button>
          <Button :filled="true" :uppercase="true">
            Отправить ассортимент менеджеру
          </Button>
        </div>

        <div class="wine-cart-main__title wine-cart-main__title-last">
          Выберите шаблон для винной карты
        </div>
        <WIneConstructor />
        <div class="wine-cart-main__warning">
          ЧРЕЗМЕРНОЕ ПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import XLSX from 'xlsx'
// eslint-disable-next-line no-unused-vars
import { saveAs } from 'file-saver'

export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    WineCartList: () => import('../components/layouts/WineCartList'),
    WIneConstructor: () => import('../components/layouts/WIneConstructor'),
    Button: () => import('../components/form/Button')
  },
  computed: {
    basketLength () {
      return Object.keys(this.$userBucket).length
    },
    basketLengthWinesNames () {
      return {
        0: 'вин',
        1: 'вино',
        2: 'винa',
        3: 'винa',
        4: 'винa'
      }
    }
  },
  async mounted () {
    console.clear()
    await this.$fetchTradecenters()
    await this.$loadGeoData()
    await this.$fetchBucket()
    await this.$selectUserAge()
    await this.$selectUserType()
    this.$routeMiddleWare()
  },
  methods: {
    downloadXLS () {
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
    s2ab (s) {
      const buf = new ArrayBuffer(s.length) // convert s to arrayBuffer
      const view = new Uint8Array(buf) // create uint8array as viewer
      for (let i = 0; i < s.length; i++) { view[i] = s.charCodeAt(i) & 0xFF } // convert to octet
      return buf
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";

  .wine-cart-main{
    .wine-cart-main__container{
      padding: 110px 0 50px 0;
      background: url("../assets/images/page-main_top.png"), #f4f4f4;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .wine-cart-main__title{
      @include FontStyle('Acrom', normal, #000000, 47px, 56px);
      margin-bottom: 40px;
    }
    .wine-cart-main__actions{
      margin-top: 55px;
      height: 68px;
      margin-bottom: 110px;
      .button{
        padding: 0 30px;
        .button__text{
          @include FontStyle('Acrom', normal, #FFFFFF, 20px, 24px);
        }
      }
      .button:first-child{
        margin-right: 12px;
      }
    }
    .wine-cart-main__warning{
      margin-top: 72px;
      display: flex;
      text-align: center;
      justify-content: center;
      @include FontStyle('Acrom', normal, #000000, 34px, 40px);
    }
    @media (max-width: 1450px) {
      .wine-cart-main__title{
        @include FontStyle('Acrom', normal, #000000, 30px, 36px);
        margin-bottom: 43px;
      }
    }
    @media (max-width: 1080px) {
      .wine-cart-main__container{
        padding-top: 80px;
      }
      .wine-cart-main__actions{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: unset;
        margin-top: 40px;
        margin-bottom: 80px;
        .button{
          height: 68px;
        }
        .button:first-child{
          margin-bottom: 30px;
        }
      }

      .wine-cart-main__warning{
        margin-top: 30px;
        max-width: 684px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media (max-width: 767px) {
      .wine-cart-main__actions{
        margin-top: 20px;
        margin-bottom: 50px;
        .button{
          height: 40px;
          max-width: 100%;
          margin-right: 0 !important;
          margin-left: 0 !important;
          .button__text{
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
          }
        }
        .button:first-child{
          margin-bottom: 10px;
        }
        .button:last-child{
          &::after{
            display: block;
            text-transform: uppercase !important;
            @include FontStyle('Acrom', bold, #FFFFFF, 14px, 16px);
            content: 'Отправить менеджеру'
          }
          .button__text{
            display: none;
          }
        }

      }
      .wine-cart-main__container{
        padding-top: 40px;
      }
      .wine-cart-main__title{
        @include FontStyle('Acrom', normal, #000000, 16px, 19px);
        margin-bottom: 102px;
      }
      .wine-cart-main__title.wine-cart-main__title-last{
        margin-bottom: 20px;
        max-width: 158px;
      }
      .wine-cart-main__warning{
        max-width: 270px;
        margin-left: auto;
        margin-right: auto;
        @include FontStyle('Acrom', normal, #000000, 18px, 22px);
      }
    }

    @media (max-width: 500px) {
      .wine-cart-main__actions .button{
        width: 100%;
      }
    }
  }
</style>
