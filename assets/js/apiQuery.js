/**
 * Метод для получения списка товаров с различными фильтрами:
 *
 * preview_mode         : boolean - Режим предпросмотра для "виртуальных каталогов".
 *                        Используется для просмотра каталога перед публикацией, при переходе из админки.
 * category_id          : array[integer] - По ID категории товара
 * compilation_id       : integer - По ID подборки товара из Подарочного каталога
 * manufacturer_id      : array[integer] - По ID производителя (бренда)
 * price_min            : numeric - Фильтрация по цене. Указывается нижний предел для фильтрации диапазона.
 *                        Используется совместно с price_max.
 * price_max            : numeric - Фильтрация по цене. Указывается верхний пределя для фильтрации диапазона.
 *                        Используется совместно с price_min.
 * in_stock             : integer - Фильтрация по наличию товара в ТЦ.
 * articles             : array[integer] - Массив для фильтрации товаров по МСС Артикулу (основной)
 * mgb_articles         : array[integer] - Массив для фильтрации товаров по VGB Артикулу (дополнительный)
 * attributes           : array[array,] - Массив для фильтрации по характеристикам товара.
 *                        Если значение характеристики необходимо указать как диапазон используется специальный символ для
 *                        определения границ предела :: (может быть изменен)
 * ean                  : digits:13 - Возможность фильтровать товары по штрих-коду (для тех у кого он есть)
 * action_id            : integer
 * action_category_id   : array[integer] - Фильтрация по ID категории ВК
 * shoppinglist_id      : integer - Фильтрация по наличию товара в конкретном шоппинг-листе
 * basket_id            : integer - Фильтрация по наличию товара в конкретной корзине
 * eshop_order          : boolean - Фильтрация по доступности товара к заказу в Интернет-магазине (Instamart)
 * slug                 : alpha_dash|max:249 - Поиск конкретного товара по его slug.
 *
 *
 * order_by             : string - Первый вариант сортировки, выбор поля(['name','price','stock','popularity'])
 * order_direction      : string - Первый вариант сортировки, выбор направления (['asc','desc','ASC','DESC'])
 *
 * order                : string - Второй вариант сортировки, одно из (['name_asc','name_desc','price_asc','price_desc',
 *                        'stock_asc','stock_desc','popularity_asc','popularity_desc',])
 *
 * limit/offest         : Возможность указывать диапазон массива товаров из выборки (доступно не для всех слоев)
 * paginate             : Генерация пагинации для массива товаров из выборки (используется по умолчанию)
 *
 * price_levels         : Фильтр по наличию у товара трехуровневого ценника
 *
 * is_action            : Показать только те товары которые привязаны к какой либо акции
 *
 * preview_mode         : Включить режим предпросмотра для ВК котораые ещё не включенны на сайте
 *
 * @param                   $storeId
 * @param ApiProductsFilter $request
 *
 * @return $this
 * @throws ValidatorException
 */
