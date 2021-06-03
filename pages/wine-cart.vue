<template>
  <div class="wine-cart-main">
    <Hero />
    <!--    <pre>{{ $userBucket }}</pre>-->
    <div class="wine-cart-main__container">
      <div class="container">
        <div class="wine-cart-main__title">
          В вашей винной карте {{ basketLength }} {{ basketLengthWinesNames[basketLength] || 'вин' }}
          <div class="popup wine-cart-main__popup">
            В одну винную карту можно добавить не больше 20 позиций, выберите нужные и они автоматически попадут в шаблон. При необходимости вы можете создать несколько винных карт.
          </div>
        </div>
        <WineCartList :selected-wines="selectedWines" @toggleList="toggleList" />
        <div class="wine-cart-main__actions">
          <Button :filled="true" :uppercase="true" @click="$downloadXLS">
            Скачать EXCEL для заказа
          </Button>
          <Button :filled="true" :uppercase="true" @click="openFeedBackModal">
            Отправить ассортимент менеджеру
          </Button>
        </div>

        <div class="wine-cart-main__title wine-cart-main__title-last">
          Выберите шаблон для винной карты
        </div>
        <WIneConstructor :selected-wines="selectedWines" />
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
// eslint-disable-next-line no-unused-vars
const mock = {
  58876: {
    wineData: {
      id: 538316,
      article: 58876,
      name: 'Вино МУЧО МАС красное сухое 0,75 л',
      description: 'Вино MUCHO MAS, красное сухое, 0,75 л изготовлено из купажа винограда сортов сира и темпранильо . Алкоголь изготавливается по классической технологии, ферментация происходит в стальных емкостях. После окончания брожения часть напитка выдерживается в дубовых бочках, а часть в тех же емкостях из нержавеющей стали. В результате получается вино с сухин, но гармоничным вкусом, многослойным ароматом. Вкусовая гамма наполнена нотами свежих ягод, пряностей и летних цветов. Вкус структурирован, раскрывается постепенно. В послевкусии ощущаются бархатные танины и легкая кислотность. Алкоголь рекомендуется подавать к тунцу, красному мясу и выдержанным сырам, овощам, приготовленным на гриле. Перед употреблением напиток следует охладить до 16-18 градусов по Цельсию. Перед подачей вину необходимо подышать . Приобрести вино MUCHO MAS, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_555326001001_01.png?w=200'
      ],
      stock: {
        value: 137,
        text: 'Заканчивается'
      },
      prices: {
        price: 519.2,
        type: 'discount_levels',
        old_price: 649,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 551.65
          }
        ],
        offline: {
          price: 649,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '17501',
          name: 'Сорт винограда',
          text: 'Темпранильо. Сира',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14',
          name: 'Крепость (‰)',
          text: '14',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '6156',
          name: 'Категория вина',
          text: 'столовое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '25517',
          name: 'Сочетание с продуктами',
          text: 'блюда из мяса. говядина. телятина. сыры. пицца. паста',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Темпранильо 90%, Сира 10%, антиокислитель –диоксид серы (Е220)',
          name: 'Состав',
          text: 'Темпранильо 90%, Сира 10%, антиокислитель –диоксид серы (Е220)',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '79',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '79',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,8',
          name: 'Углеводы, гр',
          text: '0,8',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '16-18',
          name: 'Температура подачи,',
          text: '16-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  93440: {
    wineData: {
      id: 574428,
      article: 93440,
      name: 'Вино BATUTA Tempranillo красное полусухое, 0,75л',
      description: 'Вино BATUTA Tempranillo, красное полусухое, 0,75 л производится в Испании. В его основе сорт винограда темпранильо, прошедший тщательный отбор, ферментацию и выдержку. Цвет напитка насыщенный, рубиновый оттенок на солнце дополняется яркими бликами. Во вкусе ощущаются фруктово-ягодные аккорды в облаке свежести. Текстура вина гладкая, с выразительным послевкусием. Аромат повторяет основные аккорды букета, благоухала спелостью фруктов, оттеняемых травянистыми нотами. Напиток рекомендуется дегустировать предварительно охлажденным. Для подачи подойдут фужеры с высокими ножками, помогающие сохранить заданную температуру, исключив контакт с теплом рук. Открытую бутылку предпочтительнее хранить в закупоренном виде в холодильнике. Вино может выступать в качестве освежающего аперитива. Оно утоляет жажду, повышает аппетит. Гастрономическую компанию на столе ему составят мясные блюда. К напитку можно подать жаркое, тушеную говядину, буженину, нарезку из копченостей. Также его вкус подчеркнут тарталетки с паштетом, деликатесные сорта сыров. Приобрести вино BATUTA Tempranillo, красное полусухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_84191001001_01.png?w=200'
      ],
      stock: {
        value: 502,
        text: 'Товара много'
      },
      prices: {
        price: 339,
        type: 'old_price',
        old_price: 399,
        source: 'movie',
        offline: {
          price: 339,
          type: 'old_price',
          old_price: 399
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '26623',
          name: 'Сорт винограда',
          text: 'Темпранильо. Шираз',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '873',
          name: 'Содержание сахара',
          text: 'полусухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '13,5',
          name: 'Крепость (‰)',
          text: '13,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Вальдепаньянс',
          name: 'Регион',
          text: 'Вальдепаньянс',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '6156',
          name: 'Категория вина',
          text: 'столовое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '20588',
          name: 'Сочетание с продуктами',
          text: 'мясные деликатесы. копченые колбаски. паэлья. мясо с овощами. выдержанные сыры',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '16-18',
          name: 'Температура подачи,',
          text: '16-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '25',
          name: 'Максимальная температура хранения,',
          text: '25',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  107214: {
    wineData: {
      id: 585028,
      article: 107214,
      name: 'Вино La Sastreria розовое сухое, 0,75л',
      description: '',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_95440001001_01.png?w=200'
      ],
      stock: {
        value: 924,
        text: 'Товара много'
      },
      prices: {
        price: 499,
        type: 'old_price',
        old_price: 629,
        source: 'movie',
        offline: {
          price: 499,
          type: 'old_price',
          old_price: 629
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '843',
          name: 'Тип',
          text: 'розовое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  107217: {
    wineData: {
      id: 585078,
      article: 107217,
      name: 'Вино La Sastreria белое сухое, 0,75л',
      description: '',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_95442001001_01.png?w=200'
      ],
      stock: {
        value: 908,
        text: 'Товара много'
      },
      prices: {
        price: 499,
        type: 'old_price',
        old_price: 629,
        source: 'movie',
        offline: {
          price: 499,
          type: 'old_price',
          old_price: 629
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '865',
          name: 'Страна',
          text: 'Абхазия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '22011',
          name: 'Сочетание с продуктами',
          text: 'морепродукты. рыба',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  261418: {
    wineData: {
      id: 216915,
      article: 261418,
      name: 'Вино VILLA MARIA Private Bin Sauvignon Blanc 0,75 л',
      description: 'Вино VILLA MARIA Private Bin Sauvignon Blanc, белое сухое, 0,75 л отличается красивым желто-соломенным цветом с золотистыми отблесками. В его элегантном букете гармонично сплетаются фруктовые абрикосовые и персиковые полутона с освежающим акцентом лимона на фоне душистых весенних цветов и легкой солоноватости минералов. Хорошо сбалансированный и кристально чистый вкус составлен из спелых фруктов и минеральных нюансов. В длительном стойком послевкусии играет сдержанная благородная кислинка.Напиток изготовлен из отборных плодов сорта совиньон блан, заботливо выращенного на плодородных почвах долины Мальборо в Новой Зеландии. Ягоды бережно собирают в момент оптимальной зрелости и после тщательной сортировки отправляют на ферментацию при строгом контроле температуры. Выдержка проводится на дрожжевом осадке и занимает непродолжительное время, после чего вино пропускают сквозь фильтры и разливают по бутылкам.В полной мере оценить богатство вкуса и аромата благородного вина помогает предварительное охлаждение. Напиток подают к столу при температуре около 10-12 °С после того, как он подышит не менее четверти часа, насыщаясь воздухом. Белое вино хорошо стимулирует аппетит и пробуждает вкусовые рецепторы, поэтому станет удачным выбором в качестве легкого аперитива. Его также можно предложить как сопровождение к жареной или запеченной рыбе, куриной грудке под сливочным соусом, приготовленным на гриле морепродуктам, Цезарю и другим салатам, сладким фруктам, десертам, сырному ассорти. Приобрести вино VILLA MARIA Private Bin Sauvignon Blanc, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_226594001001_01.png?w=200'
      ],
      stock: {
        value: 571,
        text: 'Товара много'
      },
      prices: {
        price: 1249,
        type: 'discount_levels',
        source: 'movie',
        levels: [
          {
            count: 3,
            price: 1128.97
          }
        ],
        offline: {
          price: 1249,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [],
      embeds: []
    },
    count: 3
  },
  393998: {
    wineData: {
      id: 133749,
      article: 393998,
      name: 'Напиток APEROL Аперитив 11%, 0,7л',
      description: 'Напиток APEROL Аперитив 11%, 0,7 л– это идеальный аперитив. Напиток обладает интересным оранжевым цветом и отличается горько-сладким фруктово-травяным вкусом. Аромат алкоголя раскрывается апельсиновыми нотками и сочными травяными нюансами. Наличие оттенков трав во вкусе и запахе не случайно - напиток представляет собой настой трав и корней. Апероль рекомендуется подавать со льдом, добавлять в него тоник, лимон, сахарный сироп и водку. Апероль прекрасно подходит для приготовления коктейлей, в том числе с пивом, вином. Приобрести напиток APEROL Аперитив 11%, 0,7 л можно в Москве в торговом центре METRO.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_468523001001_01.png?w=200',
        'https://cdn.metro-cc.ru/ru/ru_pim_468523001001_02.png?w=200'
      ],
      stock: {
        value: 128,
        text: 'Заканчивается'
      },
      prices: {
        price: 1149,
        type: 'discount_levels',
        source: 'movie',
        levels: [
          {
            count: 2,
            price: 1069.03
          }
        ],
        offline: {
          price: 1149,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 322,
          value_id: '931',
          name: 'Тип',
          text: 'аперитив',
          category_id: 412340,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 323,
          value_id: '934',
          name: 'Страна',
          text: 'Италия',
          category_id: 412340,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 5103,
          value_id: '11',
          name: 'Крепость (%)',
          text: '11',
          category_id: 412340,
          sort_order: '5',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5106,
          value_id: 'деминерализованная вода, сахар, спирт этиловый ректификованный высшей очистки из пищевого сырья, растительные экстракты и настои, ароматизаторы - фруктовый, травяной, десертный (содержит хинин), хлорид натрия, красители (Е110, Е124)',
          name: 'Состав',
          text: 'деминерализованная вода, сахар, спирт этиловый ректификованный высшей очистки из пищевого сырья, растительные экстракты и настои, ароматизаторы - фруктовый, травяной, десертный (содержит хинин), хлорид натрия, красители (Е110, Е124)',
          category_id: 412340,
          sort_order: '8',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5107,
          value_id: '160,8',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '160,8',
          category_id: 412340,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5108,
          value_id: '0,1',
          name: 'Белки, гр',
          text: '0,1',
          category_id: 412340,
          sort_order: '10',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5109,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412340,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5110,
          value_id: '24,8',
          name: 'Углеводы, гр',
          text: '24,8',
          category_id: 412340,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5111,
          value_id: 'не ограничен',
          name: 'Срок годности, г',
          text: 'не ограничен',
          category_id: 412340,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5114,
          value_id: 'стеклянная бутылка',
          name: 'Тип упаковки',
          text: 'стеклянная бутылка',
          category_id: 412340,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5115,
          value_id: '7',
          name: 'Ширина упаковки, см',
          text: '7',
          category_id: 412340,
          sort_order: '17',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5116,
          value_id: '27',
          name: 'Высота упаковки, см',
          text: '27',
          category_id: 412340,
          sort_order: '18',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5117,
          value_id: '7',
          name: 'Длина упаковки, см',
          text: '7',
          category_id: 412340,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5702,
          value_id: '10',
          name: 'Минимальная температура хранения,',
          text: '10',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5703,
          value_id: '25',
          name: 'Максимальная температура хранения,',
          text: '25',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5704,
          value_id: '24,8',
          name: 'Сахар, г/дм',
          text: '24,8',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  480768: {
    wineData: {
      id: 114518,
      article: 480768,
      name: 'Вино COLTERENZIO Pfefferer белое полусухое 12%, 0,75 л',
      description: 'Вино COLTERENZIO Pfefferer, белое полусухое 12%, 0,75 л — изысканный алкогольный напиток крепостью 12% родом из знаменитого региона виноделия — Тосканы. Оно подойдет как для праздничного застолья, так и для романтического ужина или повседневного обеда. Разлитое по бокалам, оно смотрится утонченно благодаря своему легкому светло-соломенному цвету. Вкус напитка раскрывается изящными освежающими оттенками фруктов с нюансами минералов, а также умеренной кислотностью в мягком послевкусии. Аромат вина не оставит никого равнодушным — это интригующий букет из запахов спелого персика, сочных цитрусов, сладких пряностей и нежных белых цветов. Вкусо-ароматические характеристики вина лучше всего раскрываются при температуре 10-12°C. Подавать COLTERENZIO Pfefferer рекомендуется перед основным приемом пищи в качестве аперитива. Также напиток изумительно подчеркнет вкус блюд из рыбы и морепродуктов, легких летних салатов, различных закусок, пасты и супов. Выигрышное сочетание — белое полусухое вино и нежнейшая телятина или птица. Представленный легкий напиток изготовлен из спелого винограда сортов шардоне и пино гриджио, произрастающего на юных лозах виноградников Банфи. Сбор урожая производится в конце лета, после чего ягоды проходят стадию деликатной прессовки и подвергаются ферментации в резервуарах из нержавеющей стали на протяжении 13-16 суток при определенном температурном режиме. Затем молодой напиток некоторое время выдерживается в аналогичных емкостях, а в конце января разливается по бутылкам. Компания COLTERENZIO известна во всем мире за высокое качество выпускаемой продукции. Она неоднократно награждалась на международных конкурсах. Приобрести вино COLTERENZIO Pfefferer, белое полусухое 12%, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_225232001001_01.png?w=200'
      ],
      stock: {
        value: 360,
        text: 'Товара достаточно'
      },
      prices: {
        price: 1129,
        type: 'old_price',
        old_price: 1599,
        source: 'movie',
        offline: {
          price: 1129,
          type: 'old_price',
          old_price: 1599
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '31923',
          name: 'Сорт винограда',
          text: 'Голден Мускат',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '873',
          name: 'Содержание сахара',
          text: 'полусухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Трентино-Альто Адидже',
          name: 'Регион',
          text: 'Трентино-Альто Адидже',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '30904',
          name: 'Сочетание с продуктами',
          text: 'аперитив. рыбные блюда. морепродукты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Голден Мускат 100%',
          name: 'Состав',
          text: 'Голден Мускат 100%',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  502172: {
    wineData: {
      id: 574675,
      article: 502172,
      name: 'Аперетив APEROL, 1л',
      description: 'Аперитив APEROL, 1 л – это идеальный аперитив. Напиток обладает интересным оранжевым цветом и отличается горько-сладким фруктово-травяным вкусом. Аромат алкоголя раскрывается апельсиновыми нотками и сочными травяными нюансами. Наличие оттенков трав во вкусе и запахе не случайно - напиток представляет собой настой трав и корней. Апероль рекомендуется подавать со льдом, добавлять в него тоник, лимон, сахарный сироп и водку. Апероль прекрасно подходит для приготовления коктейлей, в том числе с пивом, вином. Приобрести аперитив APEROL, 1 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до 18 лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_245834001001_01.png?w=200'
      ],
      stock: {
        value: 404,
        text: 'Товара достаточно'
      },
      prices: {
        price: 1759,
        type: 'discount_levels',
        source: 'movie',
        levels: [
          {
            count: 2,
            price: 1583.1
          }
        ],
        offline: {
          price: 1759,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 322,
          value_id: '931',
          name: 'Тип',
          text: 'аперитив',
          category_id: 412340,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 323,
          value_id: '934',
          name: 'Страна',
          text: 'Италия',
          category_id: 412340,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 5103,
          value_id: '11',
          name: 'Крепость (%)',
          text: '11',
          category_id: 412340,
          sort_order: '5',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5106,
          value_id: 'деминерализованная вода, сахар, спирт этиловый ректификованный высшей очистки из пищевого сырья, растительные экстракты и настои, ароматизаторы - фруктовый, травяной, десертный, содержит хинин, хлорид натрия, красители',
          name: 'Состав',
          text: 'деминерализованная вода, сахар, спирт этиловый ректификованный высшей очистки из пищевого сырья, растительные экстракты и настои, ароматизаторы - фруктовый, травяной, десертный, содержит хинин, хлорид натрия, красители',
          category_id: 412340,
          sort_order: '8',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5107,
          value_id: '160,8',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '160,8',
          category_id: 412340,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5108,
          value_id: '0,1',
          name: 'Белки, гр',
          text: '0,1',
          category_id: 412340,
          sort_order: '10',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5110,
          value_id: '24,8',
          name: 'Углеводы, гр',
          text: '24,8',
          category_id: 412340,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5111,
          value_id: 'не ограничен',
          name: 'Срок годности, г',
          text: 'не ограничен',
          category_id: 412340,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5114,
          value_id: 'бутылка',
          name: 'Тип упаковки',
          text: 'бутылка',
          category_id: 412340,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5115,
          value_id: '9',
          name: 'Ширина упаковки, см',
          text: '9',
          category_id: 412340,
          sort_order: '17',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5116,
          value_id: '33',
          name: 'Высота упаковки, см',
          text: '33',
          category_id: 412340,
          sort_order: '18',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5117,
          value_id: '9',
          name: 'Длина упаковки, см',
          text: '9',
          category_id: 412340,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5701,
          value_id: '8-10',
          name: 'Температура подачи,',
          text: '8-10',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5702,
          value_id: '10',
          name: 'Минимальная температура хранения,',
          text: '10',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 5703,
          value_id: '25',
          name: 'Максимальная температура хранения,',
          text: '25',
          category_id: 412340,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  515557: {
    wineData: {
      id: 249238,
      article: 515557,
      name: 'Вино MATSU El Picaro красное сухое, 0,75л',
      description: 'Вино MATSU El Picaro Toro Do красное сухое, 0,75 л – оригинальное молодое вино, отражающее мощный испанский темперамент. Название напитка в переводе означает Озорник , а этикетка бутылки сразу притягивает взгляд: на ней изображен портрет владельца винодельни Matsu в молодости. Для изготовления вина был использован лучший, собранный вручную виноград сорта Темпранильо. Напиток обладает приятным рубиновым цветом и многогранным сладковатым ароматом, сплетенным из аккордов спелых ягод, пряностей и лесных растений. Вкус вина – шелковистый, округлый и яркий, с нотами темных фруктов и лакрицы, бархатистой танинностью и стойким послевкусием. Вино отлично дополнит блюда итальянской кухни, дичь и жареное мясо. Рекомендуемая температура подачи к столу – 16-18 градусов. Приобрести  вино MATSU El Picaro Toro Do красное сухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_271623001001_01.png?w=200'
      ],
      stock: {
        value: 299,
        text: 'Товара мало'
      },
      prices: {
        price: 1059,
        type: 'discount_levels',
        source: 'movie',
        levels: [
          {
            count: 3,
            price: 948.97
          }
        ],
        offline: {
          price: 1059,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5866',
          name: 'Сорт винограда',
          text: 'Темпранильо',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14,5',
          name: 'Крепость (‰)',
          text: '14,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Кастилия и Леон, Д.О. Торо ',
          name: 'Регион',
          text: 'Кастилия и Леон, Д.О. Торо ',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '31509',
          name: 'Сочетание с продуктами',
          text: 'птица',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Темпранильо 100%, консервант Е220',
          name: 'Состав',
          text: 'Темпранильо 100%, консервант Е220',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '81,2',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '81,2',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '16-18',
          name: 'Температура подачи,',
          text: '16-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  521095: {
    wineData: {
      id: 255379,
      article: 521095,
      name: 'Вино BRANCOTT ESTATE Marlborough Sauvignon Blanc белое сухое, 0,75л',
      description: 'Вино BRANCOTT ESTATE, белое сухое, 0,75 л имеет насыщенный фруктовый вкус с цитрусовыми нотками, в которых присутствует розовый грейпфрут с легкими оттенками перца и травы. Оно хорошо подходит в качестве аперитива и не менее интересно сочетается с с различными видами сыров, морепродуктами, рыбными блюдами, а также свежеприготовленным нежным мясом птицы. Яркое и насыщенное вино изготавливается из винограда, выращенного в регионе Мальборо. Виноградники располагаются в южной части долины Вайрау. Сбор урожая начинается в середине марта, а завершается – в середине апреля. Приятный нежный вкус получается благодаря специальной технологии винификации. Мягкий отжим плодов дает возможность получить чистый и прозрачный сок для ферментации, которая происходит при низкой температуре в специальных металлических емкостях. Винодельческое хозяйство Brancott начало существовать с 1934 года, когда Иван Юкич переехал в Новую Зеландию и начал выращивать небольшой виноградник. В 1944 начали производиться первые вина, а в 1973 году компания уже начала осваивать Южный остров. Центр винодельни находится именно в регионе Мальборо. На развитие виноделия благоприятно воздействует местный климат, который чередуется яркими солнечными днями с прохладными сухими ночами, что дарит винам естественную кислотность. Приобрести  вино BRANCOTT ESTATE, белое сухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_285593001001_01.png?w=200'
      ],
      stock: {
        value: 117,
        text: 'Заканчивается'
      },
      prices: {
        price: 1039.2,
        type: 'discount_levels',
        old_price: 1299,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 1104.15
          }
        ],
        offline: {
          price: 1299,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '872',
          name: 'Страна',
          text: 'Новая Зеландия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5883',
          name: 'Сорт винограда',
          text: 'Совиньон Блан',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '873',
          name: 'Содержание сахара',
          text: 'полусухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '13',
          name: 'Крепость (‰)',
          text: '13',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Мальборо',
          name: 'Регион',
          text: 'Мальборо',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '27980',
          name: 'Сочетание с продуктами',
          text: 'аперитив. сыры. морепродукты. рыбные блюда. блюда из нежного мяса птицы',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Совиньон Блан 100%, консервант - диоксид серы',
          name: 'Состав',
          text: 'Совиньон Блан 100%, консервант - диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '77',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '77',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8500,
          value_id: '4,5',
          name: 'Сахар, г/дм',
          text: '4,5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  536058: {
    wineData: {
      id: 374769,
      article: 536058,
      name: 'Вино CAMPO VIEJO Tempranillo Rioja красное сухое, 0,75л',
      description: 'В Campo Viejo приверженность традициям виноделия и применение самых передовых технологий позволяют совершенствовать традиционные методы и производить яркие и выразительные вина Риохи, удовлетворяющие вкусы самых взыскательных потребителей.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_319899001001_01.png?w=200'
      ],
      stock: {
        value: 33,
        text: 'Заканчивается'
      },
      prices: {
        price: 669,
        type: 'old_price',
        old_price: 999,
        source: 'movie',
        offline: {
          price: 669,
          type: 'old_price',
          old_price: 999
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 3
  },
  620754: {
    wineData: {
      id: 488695,
      article: 620754,
      name: 'Вино RAMA CORTA красное сухое, 0,75 л',
      description: 'Сухое вино RAMA CORTA красное объемом 0,75 л изготовлено на основе классического испанского сорта винограда Темпранильо. Напиток с градусом 14% употребляется легко, а спиртозность во вкусе не ощущается. Он характеризуется ароматом спелой вишни, шоколада и коры дерева, незначительной терпкостью и бархатистым вкусом. Если напитку дать настояться, то проявится минимальный вкус дубовой бочки. Он относится к категории танинных, полнотелых благородных вин, оставляет дубовое смоляное послевкусие. Лучше всего алкоголь сочетается с сырами твердых сортов, сыровяленым мясом, сырокопчеными колбасами, ветчиной. В качестве аперитива под вино лучше предложить маринованные корнишоны, артишоки и спаржу. Приобрести вино RAMA CORTA красное сухое, 0,75 л можно в Москве в торговом центре METRO.Год: 2013.Бренд: RAMA CORTA.Страна производитель: Испания.Сорт винограда: Tempranillo.Крепость: 14%.Цвет: темно-вишневый с оттенком вишни и марганцовки.Запах: при 14% спирта в запахе совсем не ощущается спиртуозность.Вкус: оттенки вишни и коры вишневого дерева, дубовая бочка, нотки засахаренного варенья, шоколадные ноты, бархатные танины. дерева.Послевкусие: долгое, приятное.Объем, л: 0,75.Условия хранения: Хранить при относительной влажности не более 85%, в вентилируемых, не имеющих постороннего запаха помещениях, исключающих воздействие прямого солнечного света. После вскрытия упаковки (бутылки) рекомендуется хранить в закрытом виде в холодильнике.Срок хранения: не ограничен.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_486180001001_01.png?w=200'
      ],
      stock: {
        value: 279,
        text: 'Товара мало'
      },
      prices: {
        price: 431.21,
        type: 'discount_levels',
        old_price: 539,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 458.15
          }
        ],
        offline: {
          price: 539,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5851',
          name: 'Сорт винограда',
          text: 'темпранильо',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14',
          name: 'Крепость (‰)',
          text: '14',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '6156',
          name: 'Категория вина',
          text: 'столовое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Темпранильо',
          name: 'Состав',
          text: 'Темпранильо',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  620877: {
    wineData: {
      id: 505170,
      article: 620877,
      name: 'Вино WINE SPAIN Pueblo Viejo Rioja Reserva красное сухое, 0,75 л',
      description: 'Вино WINE SPAIN Pueblo Viejo Rioja Reserva, красное сухое, 0,75 л создан из сорта темпранильо, поэтому обладает насыщенным гранатовым оттенком с нежными лиловыми переливами на свету. Алкогольный напиток производится из урожая Риохи, подвергается ферментации в стальных резервуарах при температуре 28°C. Выдержка занимает год в дубовых барриках, после чего следует бутилирование. В стойком аромате преобладают ноты спелых ягод, ежевичного и смородинового варенья на фоне древесных интонаций. Элегантный вкус развивается легкой сладостью и умеренной терпкостью, отдает пряными специями и нюансами дубовой коры. Вино подается при комнатной температуре к праздничному или обеденному столу. Оно отлично сочетается с легкими закусками, мясом говядины, бараниной, запеченной телятиной или птицей, приготовленной на гриле. Алкогольный напиток сопровождает говяжий стейк, кострец ягненка, пайар на гриле, спагетти с болоньезе, пиццу с острыми приправами, каннеллони, гуляш по-венски. Алкоголь разливается в высокие фужеры на тонкой ножке, которые заполняются всего на треть для максимальной аэрации. Приобрести вино WINE SPAIN Pueblo Viejo Rioja Reserva, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485699001001_01.png?w=200'
      ],
      stock: {
        value: 724,
        text: 'Товара много'
      },
      prices: {
        price: 759,
        type: 'old_price',
        old_price: 899,
        source: 'movie',
        offline: {
          price: 759,
          type: 'old_price',
          old_price: 899
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '20598',
          name: 'Сорт винограда',
          text: 'Темпранильо. Гарнача. Масуэло',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14',
          name: 'Крепость (‰)',
          text: '14',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Риоха',
          name: 'Регион',
          text: 'Риоха',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '31789',
          name: 'Сочетание с продуктами',
          text: 'паста. рыба. мясо. сыры',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 5
  },
  620881: {
    wineData: {
      id: 504523,
      article: 620881,
      name: 'Вино PUEBLO VIEJO Розовое сухое 0,75 л',
      description: 'Вино PUEBLO VIEJO, розовое сухое, 0,75 л — это алкогольный напиток родом из солнечной Испании. Виноград сортов «темпранильо» и «гренаш» для него выращивают в средиземном климате, на берегу моря. В букете вкуса и аромата отсутствуют танинные примеси, так как виноград выстаивается в чанах из нержавеющей стали. Напиток представляет собой жидкость благородного розового цвета с рубиновыми и оранжевыми переливами. Это молодое, свежее вино, с ярким клубнично-вишневым ароматом. В его вкусе отчетливо ощущаются малина и земляника, а также легкий намек на полевые травы. Присутствует долгое, сухое, приятное послевкусие с заметной минеральностью. Вино хорошо сочетается с десертами, легкими закусками, белой рыбой, холодными супами. Его можно подавать как аперитив или использовать в качестве основы для коктейлей, предварительно охладив до +6-8 градусов Цельсия. Приобрести вино PUEBLO VIEJO, розовое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485696001001_01.png?w=200'
      ],
      stock: {
        value: 149,
        text: 'Заканчивается'
      },
      prices: {
        price: 419,
        type: 'old_price',
        old_price: 499,
        source: 'movie',
        offline: {
          price: 419,
          type: 'old_price',
          old_price: 499
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '843',
          name: 'Тип',
          text: 'розовое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14',
          name: 'Крепость (‰)',
          text: '14',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Риоха',
          name: 'Регион',
          text: 'Риоха',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '31792',
          name: 'Сочетание с продуктами',
          text: 'холодные закуски. салаты. белая рыба',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '98',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '98',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '10',
          name: 'Температура подачи,',
          text: '10',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 2
  },
  620884: {
    wineData: {
      id: 491096,
      article: 620884,
      name: 'Вино CERRO DE LA CRUZ Розовое сухое 1 л',
      description: 'Вино CERRO DE LA CRUZ, розовое сухое, 1 л создается из винограда сорта темпранильо, обладающего яркими вкусовыми характеристиками. Он выращивается в оптимальных климатических условиях и собирается в пик зрелости, проходит бережный отжим и ферментацию. В букете напитка выражено звучат фруктовые ноты, в послевкусии дополняющиеся умеренной терпкостью. Текстура вина гладкая, сбалансированная. В аромате аккорды фруктов оттеняются свежестью луговых трав и пряностью специй. Лучше всего ноты раскрываются при подаче напитка предварительно охлажденным. Температурный режим варьируется от 16 до 18 градусов. Также рекомендуется не сервировать вино сразу после вскрытия. Оно должно насытиться кислородом, что позволит аромату звучать естественнее. Цвет напитка сдержанный, розово-красный. На солнце в нем проскальзывают лососевые проблески. В качестве гастрономических компаньонов к нему могут выступать зрелые сыры, жаркое, мясо на гриле, овощные рагу и легкие салаты. Также можно подавать напиток с дичью. В качестве самостоятельного аперитива он хорошо утоляет жажду и пробуждает аппетит. Приобрести вино CERRO DE LA CRUZ, розовое сухое, 1 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485726001001_01.png?w=200'
      ],
      stock: {
        value: 72,
        text: 'Заканчивается'
      },
      prices: {
        price: 269,
        type: 'old_price',
        old_price: 319,
        source: 'movie',
        offline: {
          price: 269,
          type: 'old_price',
          old_price: 319
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 4
  },
  620888: {
    wineData: {
      id: 490853,
      article: 620888,
      name: 'Вино BATUTA Airen белое сухое, 0,75 л',
      description: 'Вино BATUTA Airen, белое сухое, 0,75 л изготовлено из винограда сорта «айрен», благодаря чему получилось свежим и ароматным, с ненавязчивой кислинкой и освежающими цитрусовыми мотивами. Напиток привлекает освежающим и слегка сладковатым вкусом, в котором угадываются нотки сена, спелых фруктов и карамели, перетекающие в долгоиграющее послевкусие. Деликатный, приятный аромат привлекает интонациями сладостей, яблока, белой сливы и летних фруктов. Вино обладает бледно-лимонным цветом с едва заметным блеском и красиво искрится в бокале. Алкоголь рекомендуется употреблять охлажденным до 8-12 градусов — при такой температуре он полностью раскрывает свой сбалансированный и гармоничный букет. К вину можно подать овощные салаты, тарелку сырного ассорти, профитроли с нежным паштетом, хрустящие крокеты с икрой и другие холодные закуски. Горячее сырное фондю идеально дополнит белое сухое вино. Также напиток отлично сочетается с мидиями, креветками, устрицами и другими дарами моря. Приобрести вино BATUTA Airen, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485795001001_01.png?w=200'
      ],
      stock: {
        value: 78,
        text: 'Заканчивается'
      },
      prices: {
        price: 339,
        type: 'old_price',
        old_price: 399,
        source: 'movie',
        offline: {
          price: 339,
          type: 'old_price',
          old_price: 399
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '6098',
          name: 'Сорт винограда',
          text: 'Айрен',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Тьерра де Кастилья',
          name: 'Регион',
          text: 'Тьерра де Кастилья',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '21886',
          name: 'Сочетание с продуктами',
          text: 'блюда из рыбы',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Айрен 100%, антиокислитель диоксид серы (Е220)',
          name: 'Состав',
          text: 'Айрен 100%, антиокислитель диоксид серы (Е220)',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '70',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '70',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '10.дек',
          name: 'Температура подачи,',
          text: '10.дек',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  620889: {
    wineData: {
      id: 490916,
      article: 620889,
      name: 'Вино BATUTA Rosado Розовое сухое 0,75 л',
      description: 'Вино BATUTA Rosado, розовое сухое 0,75 л обладает нежным розовым оттенком и красиво отблескивает в бокале. Пикантный, слегка терпкий вкус привлекает сложным и насыщенным букетом, в котором ощущаются спелая малина и клубничное суфле, а в долгоиграющем послевкусии проступают нотки грейпфрута. Аромат напитка наполнен оттенками красных ягод и леденцов в окружении зеленых растительных мотивов. Алкоголь лучше всего дегустировать охлажденным до 10-13 градусов – в таком состоянии он полностью раскрывает вкусовые характеристики. Вино является универсальным, поэтому гармонично дополнит вкус практически любого блюда. Напиток отлично сочетается с блюдами из белого мяса, домашней птицей, ягненком и кроликом. Он будет уместен с устрицами, кальмарами, креветками и другими морепродуктами. К вину подойдут нарезка твердых сыров и мягкий козий сыр, холодные мясные закуски, овощное рагу и летние салаты. Фрукты, несладкая выпечка, ризотто, красная рыба и мясо, приготовленное на решетке гриль, хорошо поддержат легкое розовое вино. Приобрести вино BATUTA Rosado, розовое сухое 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485763001001_01.png?w=200'
      ],
      stock: {
        value: 194,
        text: 'Товара мало'
      },
      prices: {
        price: 319.2,
        type: 'discount_levels',
        old_price: 399,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 339.15
          }
        ],
        offline: {
          price: 399,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [],
      embeds: []
    },
    count: 3
  },
  620892: {
    wineData: {
      id: 495689,
      article: 620892,
      name: 'Вино WINE ITALY Terre degli Eremi белое сухое, 0,75 л',
      description: 'Вино TERRE DEGLI EREMI, белое сухое, 0,75 л - элегантный напиток с легкой текстурой и истинно итальянским характером. Производится из винограда сорта Треббьяно, выращенного в благодатных условиях провинции Terre degli Eremi. Ягоды собираются в период наступления полной зрелости, далее поступает на сортировку в цеха, затем подвергается мацерации и ферментации с соблюдением строгого температурного режима в соответствии со старинными, проверенными технологиями и рецептами виноделия. Вино выдерживается в резервуарах из нержавеющей стали в определенных условиях окружающей среды, без доступа солнечного света, негативно влияющего на итоговое качество продукта. Напиток обладает соломенно-желтым, с золотистыми отблесками цветом, утонченным ароматом с оттенками спелых белых фруктов, цветов и свежескошенной травы, чайной розы, меда и минералов. В интенсивном вкусе можно различить сладковатый фруктовый тон, выраженную минеральность, легкую горчинку яблочного семени, меда, зеленых яблок, крыжовника. В гастрономическом плане вино составит отличную партию белому мясу, морепродуктам, рыбе, овощным салатам, фруктам, сырам. Может подаваться в качестве аперитива. Приобрести вино TERRE DEGLI EREMI, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_485273001001_01.png?w=200'
      ],
      stock: {
        value: 261,
        text: 'Товара мало'
      },
      prices: {
        price: 439,
        type: 'old_price',
        old_price: 529,
        source: 'movie',
        offline: {
          price: 439,
          type: 'old_price',
          old_price: 529
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5937',
          name: 'Сорт винограда',
          text: 'Треббьяно',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '6156',
          name: 'Категория вина',
          text: 'столовое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '6166',
          name: 'Сочетание с продуктами',
          text: 'морепродукты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Треббьяно 100%',
          name: 'Состав',
          text: 'Треббьяно 100%',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '14-16',
          name: 'Температура подачи,',
          text: '14-16',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '25',
          name: 'Максимальная температура хранения,',
          text: '25',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  623499: {
    wineData: {
      id: 505174,
      article: 623499,
      name: 'Вино WINE SPAIN Pueblo Viejo Rioja Reserva красное сухое, 0,75 л',
      description: 'Вино WINE SPAIN Pueblo Viejo Rioja Reserva, красное сухое, 0,75 л создан из сорта темпранильо, поэтому обладает насыщенным гранатовым оттенком с нежными лиловыми переливами на свету. Алкогольный напиток производится из урожая Риохи, подвергается ферментации в стальных резервуарах при температуре 28°C. Выдержка занимает год в дубовых барриках, после чего следует бутилирование. В стойком аромате преобладают ноты спелых ягод, ежевичного и смородинового варенья на фоне древесных интонаций. Элегантный вкус развивается легкой сладостью и умеренной терпкостью, отдает пряными специями и нюансами дубовой коры. Вино подается при комнатной температуре к праздничному или обеденному столу. Оно отлично сочетается с легкими закусками, мясом говядины, бараниной, запеченной телятиной или птицей, приготовленной на гриле. Алкогольный напиток сопровождает говяжий стейк, кострец ягненка, пайар на гриле, спагетти с болоньезе, пиццу с острыми приправами, каннеллони, гуляш по-венски. Алкоголь разливается в высокие фужеры на тонкой ножке, которые заполняются всего на треть для максимальной аэрации. Приобрести вино WINE SPAIN Pueblo Viejo Rioja Reserva, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_492387001001_01.png?w=200'
      ],
      stock: {
        value: 243,
        text: 'Товара мало'
      },
      prices: {
        price: 1089,
        type: 'old_price',
        old_price: 1299,
        source: 'movie',
        offline: {
          price: 1089,
          type: 'old_price',
          old_price: 1299
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 3
  },
  623501: {
    wineData: {
      id: 504918,
      article: 623501,
      name: 'Вино WINE SPAIN Pueblo Viejo Crianza красное сухое, 0,75 л',
      description: 'Вино WINE SPAIN Pueblo Viejo Crianza, красное сухое, 0,75 л из сорта темпранильо обладает исключительными характеристиками и сохраняет испанский дух аристократизма. Алкогольный напиток разливается в бокалы на длинной ножке, отражается насыщенным гранатовым цветом с алыми переливами на свету. Урожай для вина собирается вручную, проходит качественную сортировку ягод и помещается в стальной резервуар для дальнейшего процесса ферментации при температуре 27-28°C. Содержимое дубовых бочек на протяжение года продолжает созревать, отчего приобретает чувственный аромат ягод, насыщенный фруктовый вкус и приятное продолжительное послевкусие. В аромате улавливаются ноты ванили и древесной коры. Это вино станет отличным дополнением к мясным блюдам и закускам, мраморному стейку, сырной тарелке, овощному сету. Напиток подается при температуре 16°C в сопровождение сочного тушеного мяса, копченых изделий, баранины или мягкой телятины, запеченной в духовом шкафу. Алкоголь хорошо сочетается с холодными салатами, мясом на гриле, куриными крылышками и ребрышками барбекю, дополняет ароматы итальянской и грузинской кухонь, шашлыка с дымком и пресной выпечки. Приобрести вино WINE SPAIN Pueblo Viejo Crianza, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_492388001001_01.png?w=200'
      ],
      stock: {
        value: 192,
        text: 'Товара мало'
      },
      prices: {
        price: 589,
        type: 'old_price',
        old_price: 699,
        source: 'movie',
        offline: {
          price: 589,
          type: 'old_price',
          old_price: 699
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5866',
          name: 'Сорт винограда',
          text: 'Темпранильо',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '14',
          name: 'Крепость (‰)',
          text: '14',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Риоха',
          name: 'Регион',
          text: 'Риоха',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '31790',
          name: 'Сочетание с продуктами',
          text: 'красное мясо. итальянские и восточные блюда',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Темпранильо 100%, консервант/антиокислитель диоксид серы',
          name: 'Состав',
          text: 'Темпранильо 100%, консервант/антиокислитель диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '96',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '96',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '15-18',
          name: 'Температура подачи,',
          text: '15-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  623506: {
    wineData: {
      id: 495558,
      article: 623506,
      name: 'Вино TERRE DEGLI EREMI красное, сухое 0,75 л',
      description: 'Вино TERRE DEGLI EREMI, красное сухое, 0,75 л - итальянский напиток, изготавливаемый из винограда сорта Монтепульчано., выращиваемого на плантациях вблизи местечка Абруццо. Урожай собирается в пору оптимальной спелости, далее проводится тщательная сортировка, мацерация и ферментация. Напиток хранится при контролируемой температуре, дозревание происходит в дубовых бочках при оптимальных условиях температуры и влажности, без доступа солнечного света, негативно влияющего на качество итогового продукта. Напиток темно-вишневого цвета, с приятным, утонченным ароматом, в котором собраны тона спелых фруктов, специй, ванили, лимона. В объемном вкусе смешиваются нюансы ягод древесины, сменяющимися продолжительным и приятным послевкусием. Напиток подается охлажденным, прекрасно сочетается в гастрономическом плане с твердыми сырами, сырокопчеными колбасами, блюдами из красного и белого мяса. Рекомендуемая температура подачи – 15 градусов. Приобрести вино TERRE DEGLI EREMI, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_493958001001_01.png?w=200'
      ],
      stock: {
        value: 1054,
        text: 'Товара много'
      },
      prices: {
        price: 539,
        type: 'old_price',
        old_price: 639,
        source: 'movie',
        offline: {
          price: 539,
          type: 'old_price',
          old_price: 639
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '6021',
          name: 'Сорт винограда',
          text: 'Монтепульчано',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '13',
          name: 'Крепость (‰)',
          text: '13',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Абруццо',
          name: 'Регион',
          text: 'Абруццо',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '25810',
          name: 'Сочетание с продуктами',
          text: 'блюда из мяса. паста. сыры',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Монтепульчано 100%, консервант/антиокислитель диоксид серы',
          name: 'Состав',
          text: 'Монтепульчано 100%, консервант/антиокислитель диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '89',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '89',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '5',
          name: 'Углеводы, гр',
          text: '5',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '15-18',
          name: 'Температура подачи,',
          text: '15-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  623867: {
    wineData: {
      id: 492130,
      article: 623867,
      name: 'Вино SOUTHBANK SAUVIGNON BLANC белое сухое 0,75 л',
      description: 'Вино SOUTHBANK Sauvignon Blanc, белое сухое 0,75 л выполнено из винограда сорта «совиньон блан». Напиток изготавливается по классической технологии, что обеспечивает насыщенный вкус и аромат. Алкоголь ферментируется при контролируемой температуре в емкости из стали, после чего выдерживается в дубовых бочках. Напиток бледного соломенного цвета, при искусственном и естественном освещении переливается золотистыми бликами в бокале. В аромате ощущаются ноты специй: шалфея, орегано, имбиря, также присутствуют нюансы грейпфрута и ананаса. Вкус элегантный и насыщенный, послевкусие бодрящее, с солеными нотками. Алкоголь можно подавать в качестве аперитива. Гармонично сочетается с закусками, блюдами из морепродуктов и белого мяса, овощами, приготовленными на гриле, и салатами. К столу подавать охлажденным до 10-12 градусов. Перед подачей вину необходимо «подышать». Приобрести вино SOUTHBANK Sauvignon Blanc, белое сухое 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_494552001001_01.png?w=200'
      ],
      stock: {
        value: 113,
        text: 'Заканчивается'
      },
      prices: {
        price: 1049,
        type: 'discount_levels',
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 891.65
          }
        ],
        offline: {
          price: 1049,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '872',
          name: 'Страна',
          text: 'Новая Зеландия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5883',
          name: 'Сорт винограда',
          text: 'Совиньон Блан',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12,5',
          name: 'Крепость (‰)',
          text: '12,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Мальборо',
          name: 'Регион',
          text: 'Мальборо',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '28010',
          name: 'Сочетание с продуктами',
          text: 'летние салаты. фрукты. десерты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Совиньон Блан 100%, консервант - диоксид серы',
          name: 'Состав',
          text: 'Совиньон Блан 100%, консервант - диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '70',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '70',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  626401: {
    wineData: {
      id: 493938,
      article: 626401,
      name: 'Вино ALTE ROCCHE BIANCHE Gavi белое сухое, 0,75 л',
      description: 'Вино ALTE ROCCHE BIANCHE GAVI, белое сухое, 0,75 л производится из винограда сорта Кортезе, выращенного под жарким солнцем Италии в известном далеко за пределами страны винодельческом регионе Пьемонт. Сбор урожая производится только по достижении ягодами полной зрелости. Плоды подвергаются винификации при контролируемой температуре в резервуарах из нержавеющей стали. Для созревания напиток отправляется в глубокие погреба, где хранится без доступа солнечного света, отрицательно влияющего на качество продукта. Благодаря изобретательности и профессионализму сотрудников, предприятие из небольшой винодельни очень быстро выросло в крупную международную компанию. Вино отличается нежным светло-соломенным цветом, демонстрирует чистый, легкий, освежающий вкус с оттенками фруктов и цветом, легкой кислинкой в мягком послевкусии. В аромате особенно привлекает неподражаемая свежесть, сотканная из нюансов зеленого яблока, белых цветов. Вино подается к столу охлажденным в качестве аперитива или в сочетании с морепродуктами и легкими закусками. Рекомендуется сервировать охлажденным до температуры 10-12°C. Приобрести вино ALTE ROCCHE BIANCHE GAVI, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_500148001001_01.png?w=200'
      ],
      stock: {
        value: 43,
        text: 'Заканчивается'
      },
      prices: {
        price: 839.2,
        type: 'discount_levels',
        old_price: 1049,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 891.65
          }
        ],
        offline: {
          price: 1049,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5991',
          name: 'Сорт винограда',
          text: 'Кортезе',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12,5',
          name: 'Крепость (‰)',
          text: '12,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Пьемонт',
          name: 'Регион',
          text: 'Пьемонт',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Кортезе 100%, консервант антиокислитель диоксид серы',
          name: 'Состав',
          text: 'Кортезе 100%, консервант антиокислитель диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '106',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '106',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,15',
          name: 'Углеводы, гр',
          text: '0,15',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: 'дек.14',
          name: 'Температура подачи,',
          text: 'дек.14',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  627020: {
    wineData: {
      id: 494491,
      article: 627020,
      name: 'Вино CERRO DE LA CRUZ белое сухое 1л',
      description: 'Вино CERRO DE LA CRUZ Sauvignon Blanc, белое сухое, 1 л создается из отборного винограда сорта совиньон бланк. Он собирается с лоз, выращенных в оптимально адаптированных для данного сорта условиях. После бережного отжима и ферментации напиток приобретает соломенно-желтый цвет, на свету играющий легкими бликами зеленоватого оттенка. Вкус вина богатый и сбалансированный, в нем раскрываются фруктово-ягодные ноты, оттеняющиеся пикантностью цитрусовых. Послевкусие с умеренной кислотностью выраженное и стойкое, его обеспечивает длительная выдержка перед розливом в бутылки. В аромате звучит необычный микс из садовых ягод, цитрусовых, листовой зелени и болгарского перца. Ощутить все нюансы букета легче всего, если предварительно охладить вино. Температурный режим подачи варьируется от 10 до 12 градусов. Также желательно не сервировать напиток сразу после открытия. Он должен насытиться кислородом, что сделает вкус более естественным. Можно подавать вино как аперитив. Оно хорошо утоляет жажду и возбуждает аппетит. В качестве закусок его могут сопровождать блюда из рыбы, морепродукты, сырная нарезка, овощные блюда. Приобрести вино CERRO DE LA CRUZ Sauvignon Blanc, белое сухое, 1 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_500689001001_01.png?w=200'
      ],
      stock: {
        value: 152,
        text: 'Заканчивается'
      },
      prices: {
        price: 269,
        type: 'old_price',
        old_price: 319,
        source: 'movie',
        offline: {
          price: 269,
          type: 'old_price',
          old_price: 319
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 4
  },
  634207: {
    wineData: {
      id: 503978,
      article: 634207,
      name: "Вино CA'ERNESTO белое сухое 0,75 л",
      description: 'Вино CAERNESTO Pinot Grigio, белое сухое, 0,75 л – моносортовой напиток с содержанием алкоголя 12,5% Продукт родом из Италии придется по вкусу тем, кто отдает предпочтение легкости и свежести букета. Для его изготовления используют виноград сорта пино гриджио. Вкус у напитка освежающий, с приятной фруктовой кислинкой на финише. Вино можно подавать в качестве аперитива. Также оно гармонично сочетается со многими блюдами итальянской кухни, подойдет к кушаньям из рыбы, супам и салатам из овощей, пасте и барбекю. Кальмары, мидии, осьминоги, креветки и другие морепродукты оттенят приятный и изысканный вкус алкогольного напитка. Перед подачей белого сухого вина рекомендуется охладить до температуры 8-10 градусов. Разливать напиток принято в тюльпановидные бокалы на тонкой ножке. Перед подачей на стол желательно дать вину «подышать». Упаковкой для вина служит стеклянная бутылка. Хранить белое сухое до употребления рекомендуется в прохладном месте. При этом нежелательно воздействие прямых солнечных лучей, а бутылка должна иметь горизонтальное положение. Приобрести вино CAERNESTO Pinot Grigio, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_504923001001_01.png?w=200'
      ],
      stock: {
        value: 1081,
        text: 'Товара много'
      },
      prices: {
        price: 339,
        type: 'old_price',
        old_price: 429,
        source: 'movie',
        offline: {
          price: 339,
          type: 'old_price',
          old_price: 429
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5897',
          name: 'Сорт винограда',
          text: 'Пино Гриджо',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '11,5',
          name: 'Крепость (‰)',
          text: '11,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Венето',
          name: 'Регион',
          text: 'Венето',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '32892',
          name: 'Сочетание с продуктами',
          text: 'первые блюда. рыба. аперитив',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Пино Гриджо, консервант (антиокислитель) диоксид серы',
          name: 'Состав',
          text: 'Пино Гриджо, консервант (антиокислитель) диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '66',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '66',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,3',
          name: 'Углеводы, гр',
          text: '0,3',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  645452: {
    wineData: {
      id: 519373,
      article: 645452,
      name: 'Вино WINE ITALY Chianti Predella красное сухое, 1,5 л',
      description: 'Вино PREDELLA Chianti, красное сухое, 1,5 л производится из винограда сорта «кьянти». Урожай растет на виноградниках, собирается при достижении оптимальной зрелости. Сбор ягод происходит вручную, после чего виноград перебирается и прессуется. Напиток производится по классической резервуарной технологии, ферментация происходит при контролируемой температуре в стальных емкостях. После чего вино выдерживается 6 месяцев в дубовых бочках. Алкоголь гармонично дополняет стейки из говядины или другого красного мяса, барбекю, шашлыка, овощей, приготовленных на гриле, салаты, мясные закуски. Допускается сервировать сырной тарелкой, состоящей из пикантных видов сыра, деликатесными колбасами, копченостями. В вине ощущаются ноты сочных фруктов и ягод, присутствует обволакивающее послевкусие, которое постепенно затухает. Танинное послевкусие сбалансировано легкой кислотностью. В букете аромата присутствует сочность и терпкость. Напиток будет уместен при любых обстоятельствах: на семейном застолье, деловой встрече или романтическом ужине. Подавать к столу игристое вино следует охлажденным до 16-18 градусов, температуру можно поддерживать при помощи ведерка со льдом. Приобрести вино PREDELLA Chianti, красное сухое, 1,5 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_538528001001_01.png?w=200'
      ],
      stock: {
        value: 510,
        text: 'Товара много'
      },
      prices: {
        price: 839,
        type: 'old_price',
        old_price: 999,
        source: 'movie',
        offline: {
          price: 839,
          type: 'old_price',
          old_price: 999
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '23755',
          name: 'Сорт винограда',
          text: 'Санджовезе. Канайоло. Чильеджоло',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '1,5',
          name: 'Объем, л',
          text: '1,5',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Тоскана',
          name: 'Регион',
          text: 'Тоскана',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Санджовезе 85%, Канайоло 10%, Чильеджоло 5%, консервант/антиокислитель диоксид серы',
          name: 'Состав',
          text: 'Санджовезе 85%, Канайоло 10%, Чильеджоло 5%, консервант/антиокислитель диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '75',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '75',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '18-20',
          name: 'Температура подачи,',
          text: '18-20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  645453: {
    wineData: {
      id: 519677,
      article: 645453,
      name: 'Вино PREDELLA CHIANTI красное, сухое 0,75 л',
      description: 'Вино PREDELLA Chianti, красное сухое, 0,75 л производится из винограда сорта «кьянти». Урожай растет на виноградниках, собирается при достижении оптимальной зрелости. Сбор ягод происходит вручную, после чего виноград перебирается и прессуется. Напиток производится по классической резервуарной технологии, ферментация происходит при контролируемой температуре в стальных емкостях. После чего вино выдерживается 6 месяцев в дубовых бочках. Алкоголь гармонично дополняет стейки из говядины или другого красного мяса, барбекю, шашлыка, овощей, приготовленных на гриле, салаты, мясные закуски. Допускается сервировать сырной тарелкой, состоящей из пикантных видов сыра, деликатесными колбасами, копченостями. В вине ощущаются ноты сочных фруктов и ягод, присутствует обволакивающее послевкусие, которое постепенно затухает. Танинное послевкусие сбалансировано легкой кислотностью. В букете аромата присутствует сочность и терпкость. Напиток будет уместен при любых обстоятельствах: на семейном застолье, деловой встрече или романтическом ужине. Подавать к столу игристое вино следует охлажденным до 16-18 градусов, температуру можно поддерживать при помощи ведерка со льдом. Приобрести вино PREDELLA Chianti, красное сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_538526001001_01.png?w=200'
      ],
      stock: {
        value: 333,
        text: 'Товара достаточно'
      },
      prices: {
        price: 439.2,
        type: 'discount_levels',
        old_price: 549,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 466.65
          }
        ],
        offline: {
          price: 549,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '852',
          name: 'Страна',
          text: 'Италия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '23755',
          name: 'Сорт винограда',
          text: 'Санджовезе. Канайоло. Чильеджоло',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Тоскана',
          name: 'Регион',
          text: 'Тоскана',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Санджовезе 85%, Канайоло 10%, Чильеджоло 5%, консервант/антиокислитель диоксид серы',
          name: 'Состав',
          text: 'Санджовезе 85%, Канайоло 10%, Чильеджоло 5%, консервант/антиокислитель диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '75',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '75',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '18-20',
          name: 'Температура подачи,',
          text: '18-20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  645708: {
    wineData: {
      id: 519329,
      article: 645708,
      name: 'Вино BATUTA Rosado Розовое сухое 12%, 3л',
      description: 'Вино BATUTA Rosado, розовое сухое 0,75 л обладает нежным розовым оттенком и красиво отблескивает в бокале. Пикантный, слегка терпкий вкус привлекает сложным и насыщенным букетом, в котором ощущаются спелая малина и клубничное суфле, а в долгоиграющем послевкусии проступают нотки грейпфрута. Аромат напитка наполнен оттенками красных ягод и леденцов в окружении зеленых растительных мотивов. Алкоголь лучше всего дегустировать охлажденным до 10-13 градусов – в таком состоянии он полностью раскрывает вкусовые характеристики. Вино является универсальным, поэтому гармонично дополнит вкус практически любого блюда. Напиток отлично сочетается с блюдами из белого мяса, домашней птицей, ягненком и кроликом. Он будет уместен с устрицами, кальмарами, креветками и другими морепродуктами. К вину подойдут нарезка твердых сыров и мягкий козий сыр, холодные мясные закуски, овощное рагу и летние салаты. Фрукты, несладкая выпечка, ризотто, красная рыба и мясо, приготовленное на решетке гриль, хорошо поддержат легкое розовое вино. Приобрести вино BATUTA Rosado, розовое сухое 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_538794001001_01.png?w=200'
      ],
      stock: {
        value: 74,
        text: 'Заканчивается'
      },
      prices: {
        price: 1069,
        type: 'old_price',
        old_price: 1269,
        source: 'movie',
        offline: {
          price: 1069,
          type: 'old_price',
          old_price: 1269
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '843',
          name: 'Тип',
          text: 'розовое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5866',
          name: 'Сорт винограда',
          text: 'Темпранильо',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '3',
          name: 'Объем, л',
          text: '3',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Кастилия',
          name: 'Регион',
          text: 'Кастилия',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '31152',
          name: 'Сочетание с продуктами',
          text: 'морепродукты. рыба. салаты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Темпранильо 100%',
          name: 'Состав',
          text: 'Темпранильо 100%',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  645711: {
    wineData: {
      id: 519480,
      article: 645711,
      name: 'Вино BATUTA Airen белое сухое 12%, 3л',
      description: 'Вино BATUTA Airen, белое сухое, 0,75 л изготовлено из винограда сорта «айрен», благодаря чему получилось свежим и ароматным, с ненавязчивой кислинкой и освежающими цитрусовыми мотивами. Напиток привлекает освежающим и слегка сладковатым вкусом, в котором угадываются нотки сена, спелых фруктов и карамели, перетекающие в долгоиграющее послевкусие. Деликатный, приятный аромат привлекает интонациями сладостей, яблока, белой сливы и летних фруктов. Вино обладает бледно-лимонным цветом с едва заметным блеском и красиво искрится в бокале. Алкоголь рекомендуется употреблять охлажденным до 8-12 градусов — при такой температуре он полностью раскрывает свой сбалансированный и гармоничный букет. К вину можно подать овощные салаты, тарелку сырного ассорти, профитроли с нежным паштетом, хрустящие крокеты с икрой и другие холодные закуски. Горячее сырное фондю идеально дополнит белое сухое вино. Также напиток отлично сочетается с мидиями, креветками, устрицами и другими дарами моря. Приобрести вино BATUTA Airen, белое сухое, 0,75 л можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_538762001001_01.png?w=200'
      ],
      stock: {
        value: 47,
        text: 'Заканчивается'
      },
      prices: {
        price: 1069,
        type: 'old_price',
        old_price: 1269,
        source: 'movie',
        offline: {
          price: 1069,
          type: 'old_price',
          old_price: 1269
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '855',
          name: 'Страна',
          text: 'Испания',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '6098',
          name: 'Сорт винограда',
          text: 'Айрен',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '3',
          name: 'Объем, л',
          text: '3',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Тьерра де Кастилья',
          name: 'Регион',
          text: 'Тьерра де Кастилья',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '21886',
          name: 'Сочетание с продуктами',
          text: 'блюда из рыбы',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Айрен 100%, антиокислитель диоксид серы (Е220)',
          name: 'Состав',
          text: 'Айрен 100%, антиокислитель диоксид серы (Е220)',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '70',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '70',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  663168: {
    wineData: {
      id: 548672,
      article: 663168,
      name: 'Вино WINE FRANCE Jean Dellac Merlot красное сухое, 0,75 л',
      description: ' Вино WINE FRANCE, Jean, Merlot, красное, сухое, 0,75 л  увидело свет в утонченной и изысканной Франции. Это моносортовое вино, изготовленное из отборных ягод сорта Мерло. Вермут откроется внимательному и неспешному дегустатору тремя своими прекрасными гранями. Первая – эстетика: из элегантной бутылки льется в бокал ярко-красная с драгоценными рубиновыми переливами жидкость. Интенсивный аромат чарует сочностью и спелостью фруктов и сладостью ягод. А яркий и выразительный вкус, вторящий аромату, соблазняет фруктовыми вкусами, идеальным балансом кислотности и оставляет приятное и длительное послевкусие. Традиционно это вино прекрасно дополнит блюда из красного и белого мяса, птицу и оригинальную сырную тарелку. Рекомендуется подавать напиток к столу, предварительно слегка охладив – до 16-18С. Крепость напитка составляет 12,5%. Приобрести  вино WINE FRANCE, Jean Dellac, Merlot, красное, сухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_559777001001_01.png?w=200'
      ],
      stock: {
        value: 591,
        text: 'Товара много'
      },
      prices: {
        price: 423.19,
        type: 'discount_levels',
        old_price: 529,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 449.65
          }
        ],
        offline: {
          price: 529,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '851',
          name: 'Страна',
          text: 'Франция',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5838',
          name: 'Сорт винограда',
          text: 'Мерло',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12,5',
          name: 'Крепость (‰)',
          text: '12,5',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Лангедок',
          name: 'Регион',
          text: 'Лангедок',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '28119',
          name: 'Сочетание с продуктами',
          text: 'мясо. блюда на углях. жареная птица. итальянская кухня. сыры',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Мерло 100%, антиокислитель - диоксид серы',
          name: 'Состав',
          text: 'Мерло 100%, антиокислитель - диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '75',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '75',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '16',
          name: 'Температура подачи,',
          text: '16',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  663169: {
    wineData: {
      id: 548696,
      article: 663169,
      name: 'Вино WINE FRANCE Colombard-Sauvignon красное сухое, 0,75 л',
      description: ' Вино J. P. CHENET, Colombard-Sauvignon, Vin de France, белое, сухое, 0,75 л  увидело свет в утонченной и изысканной Франции. Это восхитительный купаж, изготовленный из отборных ягод сортов Каберне Совиньон и Коломбар. Мерло. Благородный напиток откроется внимательному и неспешному дегустатору тремя своими прекрасными гранями. Первая – эстетика: из элегантной бутылки бокал начнет наполнять светло-желтая с драгоценными золотыми и изумрудными переливами жидкость. Интенсивный аромат чарует сочностью и спелостью фруктов. А чистый и свежий вкус, вторящий аромату, соблазняет своей фруктовостью и идеальным балансом кислотности, оставляя приятное и длительное послевкусие. Традиционно это вино прекрасно дополнит блюда из нежирной рыбы и морепродуктов, оригинальную сырную тарелку с мягкими сырами. Рекомендуется подавать напиток к столу, предварительно как следует охладив – до 10-12С. Крепость напитка составляет 11%. Приобрести  вино J. P. CHENET, Colombard-Sauvignon, Vin de France, белое, сухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_559776001001_01.png?w=200'
      ],
      stock: {
        value: 952,
        text: 'Товара много'
      },
      prices: {
        price: 423.19,
        type: 'discount_levels',
        old_price: 529,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 449.65
          }
        ],
        offline: {
          price: 529,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '841',
          name: 'Тип',
          text: 'красное',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '851',
          name: 'Страна',
          text: 'Франция',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5853',
          name: 'Сорт винограда',
          text: 'Каберне Совиньон',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '13',
          name: 'Крепость (‰)',
          text: '13',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Лангедок',
          name: 'Регион',
          text: 'Лангедок',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '6156',
          name: 'Категория вина',
          text: 'столовое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '14498',
          name: 'Сочетание с продуктами',
          text: 'блюда из мяса и дичи. выдержанные сыры',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Каберне Совиньон',
          name: 'Состав',
          text: 'Каберне Совиньон',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '75',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '75',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '16-18',
          name: 'Температура подачи,',
          text: '16-18',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8500,
          value_id: 'менее 3',
          name: 'Сахар, г/дм',
          text: 'менее 3',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  663170: {
    wineData: {
      id: 548701,
      article: 663170,
      name: 'Вино WINE FRANCE Jean Dellac Chardonnay белое сухое, 0,75 л',
      description: ' Вино WINE FRANCE Jean Dellac Chardonnay, белое, сухое, 0,75 л  увидело свет в утонченной и изысканной Франции. Это моносортовое вино, изготовленное из отборных ягод сорта Шардоне. Благородный напиток откроет внимательному и неспешному дегустатору не только вкус, но сразу три свои прекрасные грани. Первая – эстетика: элегантная бутылка украсит стол, а жизнерадостного соломенного цвета вино наполнит бокал драгоценными золотыми и изумрудными переливами. Вторая – чистый и освежающий аромат чарует сочностью и спелостью фруктов. А третья – прекрасный вкус, вторящий аромату, соблазняет своей фруктовостью и идеальным балансом кислотности, оставляя приятное и длительное послевкусие. Традиционно это вино прекрасно дополнит блюда из нежирной рыбы и морепродуктов, оригинальную сырную тарелку с мягкими сырами. Рекомендуется подавать напиток к столу, предварительно как следует охладив – до 10-12С. Крепость напитка составляет 12,5%. Приобрести  вино WINE FRANCE Jean Dellac Chardonnay, белое, сухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_559779001001_01.png?w=200'
      ],
      stock: {
        value: 533,
        text: 'Товара много'
      },
      prices: {
        price: 423.19,
        type: 'discount_levels',
        old_price: 529,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 449.65
          }
        ],
        offline: {
          price: 529,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '851',
          name: 'Страна',
          text: 'Франция',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5840',
          name: 'Сорт винограда',
          text: 'Шардоне',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '13',
          name: 'Крепость (‰)',
          text: '13',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Лангедок',
          name: 'Регион',
          text: 'Лангедок',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '28120',
          name: 'Сочетание с продуктами',
          text: 'рыба. морепродукты. фрукты. сливочные сыры. маслины. сладости',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Шардоне, консервант диоксид серы',
          name: 'Состав',
          text: 'Шардоне, консервант диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '75',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '75',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,2',
          name: 'Углеводы, гр',
          text: '0,2',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 4
  },
  663171: {
    wineData: {
      id: 548699,
      article: 663171,
      name: 'Вино WINE FRANCE Sauvignon Blanc белое сухое 0,75л',
      description: 'Вино WINE FRANCE Jean Dellac, Sauvignon Blanc, белое, сухое, 0,75 л  увидело свет в утонченной и изысканной Франции. Это восхитительный купаж, составленный из отборных ягод сортов Каберне Совиньон, Мерло, Сира, Шардодне. Благородный напиток откроет внимательному и неспешному дегустатору не только вкус, но сразу три свои прекрасные грани. Первая – эстетика: элегантная бутылка украсит стол, а вино жизнерадостного соломенного цвета наполнит бокал драгоценными золотыми и изумрудными переливами. Вторая – чарующий аромат, который напомнит о спелых фруктах и нежных цветах. А третья – покоряет безупречным вкусом, вторящим аромату, соблазняет своей фруктовостью и идеальным балансом кислотности, оставляя приятное и длительное послевкусие. Традиционно это вино прекрасно дополнит блюда из нежирной рыбы и морепродуктов, оригинальную сырную тарелку с мягкими сырами. Рекомендуется подавать вино к столу предварительно как следует охладив – до 14-16С. Крепость напитка составляет 12%. Приобрести  вино WINE FRANCE Jean Dellac, Sauvignon Blanc, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_559778001001_01.png?w=200'
      ],
      stock: {
        value: 378,
        text: 'Товара достаточно'
      },
      prices: {
        price: 423.19,
        type: 'discount_levels',
        old_price: 529,
        source: 'movie',
        levels: [
          {
            count: 6,
            price: 449.65
          }
        ],
        offline: {
          price: 529,
          type: 'discount_levels'
        },
        is_promo: false
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '851',
          name: 'Страна',
          text: 'Франция',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5883',
          name: 'Сорт винограда',
          text: 'Совиньон Блан',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '874',
          name: 'Содержание сахара',
          text: 'сухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Лангедок',
          name: 'Регион',
          text: 'Лангедок',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '18024',
          name: 'Сочетание с продуктами',
          text: 'рыба. морепродукты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: 'Совиньон Блан 100%, консервант диоксид серы',
          name: 'Состав',
          text: 'Совиньон Блан 100%, консервант диоксид серы',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4980,
          value_id: '64',
          name: 'Энергетическая ценность, ккал/100 гр',
          text: '64',
          category_id: 412338,
          sort_order: '12',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4981,
          value_id: '0',
          name: 'Белки, гр',
          text: '0',
          category_id: 412338,
          sort_order: '13',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4982,
          value_id: '0',
          name: 'Жиры, гр',
          text: '0',
          category_id: 412338,
          sort_order: '14',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4983,
          value_id: '0,1',
          name: 'Углеводы, гр',
          text: '0,1',
          category_id: 412338,
          sort_order: '15',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '08.окт',
          name: 'Температура подачи,',
          text: '08.окт',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  },
  666535: {
    wineData: {
      id: 551773,
      article: 666535,
      name: 'Вино CAMINO DE CASTILLA Rueda белое сухое, 0,75 л',
      description: ' Вино AVELINO VEGAS S.A. Camino De Castilla Verdejo Rueda, белое сухое, 0,75 л  - это моносортовой испанский напиток, который станет прекрасным дополнением к летней вечеринке, пикнику или семейному застолью. Он характеризуется крепостью 12,5% и приятной кислотностью. Для его изготовления используется виноград автохтонного сорта вердехо. Он отличается оригинальной ароматикой, сочетающей в себе фенхель, орехи и травы. Виноградники компании разбиты в живописном регионе Руэда. Благоприятный климат этой местности, а также плодородные почвы с особым составом позволяют виноделам получить сочные и душистые плоды, которые наилучшим образом раскрывают все сортовые качества. После сбора урожай отправляется на винодельню, где проходит классическую процедуру винификации. В результате получается вино изысканного желтого цвета с выразительной ароматической палитрой, в которой переплетены ноты тропических фруктов, звучание груш, цитрусовых и ананасов, изящные травяные штрихи. Вкусовой ансамбль привлекает своей свежестью, оттенками апельсина и лимонной цедры, небольшой горчинкой и притягательным продолжительным послевкусием. Алкоголь создаст гармоничную гастрономическую пару с блюдами из белого мяса, птицей, рыбой, морепродуктами, а также разнообразными сырами. Перед сервировкой его рекомендуется охладить. Приобрести  вино AVELINO VEGAS S.A. Camino De Castilla Verdejo Rueda, белое сухое, 0,75 л  можно в Москве в торговом центре METRO.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_563002001001_01.png?w=200'
      ],
      stock: {
        value: 349,
        text: 'Товара достаточно'
      },
      prices: {
        price: 449,
        type: 'old_price',
        old_price: 499,
        source: 'movie',
        offline: {
          price: 449,
          type: 'old_price',
          old_price: 499
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 4
  },
  666544: {
    wineData: {
      id: 552181,
      article: 666544,
      name: 'Вино CERRO DE LA CRUZ Tinto Seco красное сухое, 5 л',
      description: ' Вино CERRО DE LA CRUZ Tinto Seco, красное сухое, 5 л  - классический моносортовой напиток родом из Испании. Он поможет разнообразить повседневный ужин или станет прекрасным дополнением к праздничному застолью. Его характеризуют крепость 11% и мягкая структура. Для его изготовления используется автохтонный сорт винограда темпранильо, который отличается выразительным фруктовым звучанием. Виноградники бренда разбиты на живописных плантациях Испании, где обилие солнца, оптимальная влажность и плодородные почвы создают уникальный терруар. Особые технологии виноделия позволяют получить плоды, которые в полной мере отражают сортовые свойства. После сбора урожай сортируется, обрабатывается и подвергается процедуре винификации. Каждый этап этого процесса проходит под строгим контролем и руководством ведущих энологов и технологов компании. В результате получается вино насыщенного гранатового цвета с оригинальным букетом. В нем переплетаются ноты цветов и фруктовые мотивы. Его вкусовой ансамбль демонстрирует выразительные фруктовые оттенки и приятное продолжительное послевкусие. Алкоголь создаст интересные гастрономические сочетания с блюдами из мяса, птицы и с сырами различной выдержки. Перед сервировкой его рекомендуется охладить. Приобрести  вино CERRО DE LA CRUZ Tinto Seco, красное сухое, 5 л  можно в Москве в торговом центре METRO.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_561905001001_01.png?w=200'
      ],
      stock: {
        value: 102,
        text: 'Заканчивается'
      },
      prices: {
        price: 1429,
        type: 'old_price',
        old_price: 1999,
        source: 'movie',
        offline: {
          price: 1429,
          type: 'old_price',
          old_price: 1999
        },
        is_promo: true
      },
      attributes: [],
      embeds: []
    },
    count: 3
  },
  667076: {
    wineData: {
      id: 552800,
      article: 667076,
      name: 'Вино Riesling белое полусухое PFAFFL, 0,75 л',
      description: 'Вино PFAFFL Riesling, белое полусухое, 0,75 л  создано из отборного винограда сорта рислинг и обладает блестящим светло-желтым цветом. Напиток красиво искрится и мерцает в тонком высоком бокале, переливаясь золотистыми бликами. Спелые, отборные ягоды собраны исключительно вручную с лоз, произрастающих на песчаных грунтах с большим количеством камней. Переработанный сок вызревает на протяжении следующих шести месяцев в чанах из нержавеющей стали, а затем бутылируется. За счет этого вино приобретает сбалансированный, гармоничный букет с выраженной минеральностью и плодовыми интонациями. Мощный, живой и щедрый вкус привлекает сочными фруктами и умеренной кислотностью, плавно переходящими в долгоиграющее, стойкое послевкусие с деликатными лимонными полутонами. Свежий, приятный аромат раскрывается аккордом, состоящим из ноток персика и абрикосы в обрамлении минеральных мотивов. Чтобы полноценно оценить дегустационные свойства, вино рекомендуется дегустировать охлажденным до температуры 8-10 градусов. Алкоголь послужит отличным аперитивом – он усилит аппетит, улучшит выработку желудочного сока и подготовит вкусовые рецепторы к правильному восприятию пищи. К белому полусухому хорошо подойдут устрицы, крабы, креветки и другие моллюски, а из десертов можно предложить запеканку, яблочный крабл, мороженое, щербет и суфле. Напиток составит выгодный тандем с легкими холодными мясными закусками, блюдами из нежирной рыбы, запеченной курицей и паштетом. Его уместно подать к вегетарианским блюдам, овощным салатам, сырной нарезке и фондю. Нераспечатанную бутылку следует хранить в сухом и темном месте вдали от длительного воздействия прямых солнечных лучей. Оптимальные условия присутствуют в винном шкафу, погребе, подвале, на специальной полке холодильника. Приобрести вино PFAFFL Riesling, белое полусухое, 0,75 л  можно в Москве в торговом центре METRO. Меры предосторожности: алкоголь противопоказан детям и подросткам до восемнадцати лет, беременным и кормящим женщинам, лицам с заболеваниями центральной нервной системы, почек, печени и других органов пищеварения. Чрезмерное употребление алкоголя вредит вашему здоровью.',
      images: [
        'https://cdn.metro-cc.ru/ru/ru_pim_562933001001_01.png?w=200'
      ],
      stock: {
        value: 916,
        text: 'Товара много'
      },
      prices: {
        price: 639,
        type: 'old_price',
        old_price: 799,
        source: 'movie',
        offline: {
          price: 639,
          type: 'old_price',
          old_price: 799
        },
        is_promo: true
      },
      attributes: [
        {
          id: 308,
          value_id: '842',
          name: 'Тип',
          text: 'белое',
          category_id: 412338,
          sort_order: '1',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 309,
          value_id: '862',
          name: 'Страна',
          text: 'Австрия',
          category_id: 412338,
          sort_order: '2',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 310,
          value_id: '5904',
          name: 'Сорт винограда',
          text: 'Рислинг',
          category_id: 412338,
          sort_order: '5',
          is_range: 0,
          is_main: 1,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 311,
          value_id: '873',
          name: 'Содержание сахара',
          text: 'полусухое',
          category_id: 412338,
          sort_order: '4',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 313,
          value_id: '12',
          name: 'Крепость (‰)',
          text: '12',
          category_id: 412338,
          sort_order: '3',
          is_range: 1,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 1702,
          value_id: '0,75',
          name: 'Объем, л',
          text: '0,75',
          category_id: 412335,
          sort_order: '1',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4973,
          value_id: 'Нижняя Австрия',
          name: 'Регион',
          text: 'Нижняя Австрия',
          category_id: 412338,
          sort_order: '6',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4975,
          value_id: '14497',
          name: 'Категория вина',
          text: 'тихое',
          category_id: 412338,
          sort_order: '7',
          is_range: 0,
          is_main: 1,
          is_filter: 1,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4977,
          value_id: '14499',
          name: 'Сочетание с продуктами',
          text: 'морепродукты. легкие овощные салаты',
          category_id: 412338,
          sort_order: '9',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 4979,
          value_id: '100% Рислинг',
          name: 'Состав',
          text: '100% Рислинг',
          category_id: 412338,
          sort_order: '11',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4984,
          value_id: 'не ограничен',
          name: 'Срок годности, мес',
          text: 'не ограничен',
          category_id: 412338,
          sort_order: '16',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 4987,
          value_id: '6169',
          name: 'Тип упаковки',
          text: 'стекло',
          category_id: 412338,
          sort_order: '19',
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 1,
          display_title: 1,
          values: []
        },
        {
          id: 8004,
          value_id: '10-12',
          name: 'Температура подачи,',
          text: '10-12',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8005,
          value_id: '5',
          name: 'Минимальная температура хранения,',
          text: '5',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        },
        {
          id: 8006,
          value_id: '20',
          name: 'Максимальная температура хранения,',
          text: '20',
          category_id: 412338,
          sort_order: null,
          is_range: 0,
          is_main: 0,
          is_filter: 0,
          is_list: 0,
          display_title: 1,
          values: []
        }
      ],
      embeds: []
    },
    count: 3
  }
}
export default {
  components: {
    Hero: () => import('../components/layouts/Hero'),
    WineCartList: () => import('../components/layouts/WineCartList'),
    WIneConstructor: () => import('../components/layouts/WIneConstructor'),
    Button: () => import('../components/form/Button')
  },
  data () {
    return {
      selectedWines: []
      // selectedWines: Object.values(mock)
    }
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
    openFeedBackModal () {
      this.$openModal('FeedbackManadger')
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    toggleList (item) {
      if (this.selectedWines.includes(item)) {
        const index = this.selectedWines.findIndex(i => (i.wineData.article === item.wineData.article))
        this.selectedWines.splice(index, 1)
      } else {
        this.selectedWines.push(item)
      }
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
      display: inline-block;
      @include FontStyle('Acrom', normal, #000000, 47px, 56px);
      margin-bottom: 40px;
      position: relative;
    }
    .wine-cart-main__title:hover{
      .popup.wine-cart-main__popup{
        display: block;
        left: calc(100% + 34px);
        top: 50%;
        transform: translate(0, -50%);
      }
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
