<template>
  <div
    v-click-outside="hide"
    class="custom-input-box noselect"
    :class="{'custom-input-box--open-mobile':isOpen}"
    @click="isOpen = true"
  >
    <div class="custom-input-box__outer">
      <component :is="data.icon" class="custom-input-box__icon" />
      <span class="custom-input-box__outer-text">{{ data.title }}</span>
      <Arrow v-if="!value.length" class="custom-input-box__arrow" />
      <Delete v-else @click.stop="$emit('input', [])" />
    </div>
    <div v-if="isOpen" class="custom-input-box__inner-box search-select-box">
      <InputBox
        v-model="inputField"
        placeholder="Поиск"
        class="filter-box__cubic"
        :search="true"
      />
      <div class="custom-input-box__inner-box--scrollable">
        <div
          v-for="(item, index) in searchedItems"
          :key="index"
          class="search-select-box__item"
          :class="{' search-select-box__item--active active': localValue.includes(item)}"
          @click="toggleItem(item)"
        >
          <div class="checkbox" :class="{'checkbox--active':localValue.includes(item)}">
            <Ok class="svg-ok" />
          </div>
          <span class="search-select-box__item-title">{{ item.value.toLocaleLowerCase() }}</span>
          <!--        <span class="search-select-box__item-count">{{ item.count }}</span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SelectBox',
  directives: {
    ClickOutside
  },
  components: {
    Country: () => import('assets/icons/mark-on-map.svg'),
    Bucket: () => import('assets/icons/bucket.svg'),
    Arrow: () => import('assets/icons/arrow-2.svg'),
    Close: () => import('assets/icons/close-2.svg'),
    Sort: () => import('assets/icons/sort.svg'),
    Ok: () => import('assets/icons/ok.svg'),
    InputBox: () => import('./InputBox'),
    Delete: () => import('assets/icons/delete.svg')

  },
  props: {
    value: {
      required: true
    },
    items: {
      required: true
    },
    data: {
      required: true
    }
  },
  data () {
    return {
      inputField: '',
      isOpen: false
    }
  },
  computed: {
    searchedItems () {
      if (this.inputField) {
        return this.items.filter(i => i.value.toUpperCase().includes(this.inputField.toUpperCase()))
      } else {
        return this.items
      }
    },
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    this.$bus.on('clickEnter', () => {
      this.isOpen = false
    })
  },
  beforeDestroy () {
    this.$bus.off('clickEnter', () => {
      this.isOpen = false
    })
  },
  methods: {
    hide () {
      this.isOpen = false
    },
    toggleItem (item) {
      if (this.localValue.includes(item)) {
        const index = this.localValue.findIndex(i => i.value === item.value)
        this.localValue.splice(index, 1)
      } else {
        this.localValue.push(item)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";
  .search-select-box{
    cursor: default;
    padding-left: 10px !important;
    padding-right: 10px !important;
    .search-select-box__item{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
      padding: 10px;
    }
    .filter-box__cubic{
      min-height: 38px;
    }
    .input-box{
      height: 38px;
      padding: 0 10px;
      margin-bottom: 10px;
      .input-field{
        padding: 0 8px 0 41px;
        @include FontStyle('Acrom', normal, #000000, 16px, 19px);
      }
      .input-field::placeholder{
        @include FontStyle('Acrom', normal, #999999, 16px, 19px);
      }
      .input-box__search{
        left: 18px;
        opacity: 0.4;
      }
    }
    .search-select-box__item:hover{
      background: rgba(229, 229, 229, 0.5);
      border-radius: 5px;
      .search-select-box__item-title{
        @include FontStyle('Acrom', normal, #710000, 16px, 19px);

      }
      .search-select-box__item-count{
        @include FontStyle('Acrom', bold, #be9191, 14px, 17px);
      }
    }
    .search-select-box__item-title{
      text-transform: capitalize;
      margin-right: auto;
      margin-left: 7px;
      @include FontStyle('Acrom', normal, #000000, 16px, 19px);
    }
    .search-select-box__item-count{
      @include FontStyle('Acrom', bold, #999999, 14px, 17px);
    }
    .search-select-box__item--active.active{
      .checkbox{
        border: 1px solid #710000;
        .svg-ok{
          display: block;
          path{
            stroke: #710000;
          }
        }
      }
      .search-select-box__item-title{
        @include FontStyle('Acrom', normal, #710000, 16px, 19px);
      }
      .search-select-box__item-count{
        @include FontStyle('Acrom', bold, #be9191, 14px, 17px);
      }
    }
  }
</style>
