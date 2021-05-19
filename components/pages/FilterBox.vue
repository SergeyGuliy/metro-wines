<template>
  <div class="filter-box">
    <div class="box-title">
      ФИЛЬТРЫ
    </div>
    <div class="filter-box__row">
      <InputBox v-model="searchField" :depresed="true" placeholder="Поиск по названию" class="filter-box__cubic" :search="true" />
      <Button :bold="true" class="filter-box__cubic" :depresed="true">
        ИСКАТЬ
      </Button>
    </div>

    <div class="filter-box__filters">
      <SelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Категория вина',
          icon: 'Bucket',
        }"
      />
      <SearchSelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Страна',
          icon: 'Country',
        }"
      />
      <SelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Цвет',
          icon: 'Color',
        }"
      />
      <SelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Сорт винограда',
          icon: 'Sort',
        }"
      />
      <SelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Регион',
          icon: 'Map',
        }"
      />
      <SelectBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Сахар',
          icon: 'Sugar',
        }"
      />
      <DiapazoneBox
        v-model="isPremium"
        :items="winesTypes"
        :data="{
          title: 'Стоимость',
          icon: '',
        }"
      />
      <RadioBox v-model="isPremium" />
    </div>

    <Button
      :filled="true"
      class="filter-box__show"
    >
      ПОКАЗАТЬ
    </Button>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  components: {
    InputBox: () => import('../form/InputBox'),
    Button: () => import('../form/Button'),
    RadioBox: () => import('../form/RadioBox'),
    SelectBox: () => import('../form/SelectBox'),
    SearchSelectBox: () => import('../form/SearchSelectBox'),
    DiapazoneBox: () => import('../form/DiapazoneBox')
  },
  data () {
    return {
      searchField: '',
      isPremium: false,
      winesTypes: [
        {
          title: 'Белое',
          count: 12
        },
        {
          title: 'Красное',
          count: 12
        },
        {
          title: 'Розовое',
          count: 12
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .filter-box {
    margin-bottom: 110px;
    .filter-box__row{
      background: #FFFFFF;
      border-radius: 5px;
      display: flex;
      height: 70px;
      margin-bottom: 20px;
      filter: drop-shadow(0px 16px 32px rgba(48, 49, 51, 0.24));
      .button__text{
        font-weight: bold;
      }
    }
    .filter-box__cubic{
      border-radius: 0px;
    }
    .filter-box__filters{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    .filter-box__show{
      display: block;
      height: 68px;
      margin: 12px auto 0 auto;
      padding: 0 108px;
      .button__text{
        @include FontStyle('Acrom', normal, #ffffff, 20px, 24px);
      }
    }
  }
</style>
