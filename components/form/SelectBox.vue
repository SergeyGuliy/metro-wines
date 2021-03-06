<template>
  <div
    v-click-outside="hide"
    class="custom-input-box noselect"
    :class="{'custom-input-box--open-mobile':isOpen}"
    @click.stop="isOpen = true"
  >
    <div class="custom-input-box__outer">
      <component :is="data.icon" class="custom-input-box__icon" />
      <span class="custom-input-box__outer-text">{{ data.title }}</span>
      <Arrow v-if="!value.length" class="custom-input-box__arrow" />
      <Delete v-else @click.stop="$emit('input', [])" />
    </div>
    <div v-if="isOpen" class="custom-input-box__inner-box select-box">
      <div class="custom-input-box__inner-box--scrollable">
        <pre>{{ value }}</pre>
        <div
          v-for="(item, index) in value"
          :key="index"
          class="select-box__item"
          :class="{' select-box__item--active active': localValue.includes(item)}"
          @click="toggleItem(item)"
        >
          <template v-if="item.value">
            <span class="select-box__item-title">{{ item.value.toLocaleLowerCase() }}</span>
            <span v-if="!localValue.includes(item)" class="select-box__item-count" />
            <!--        <span v-if="index !== 0" class="select-box__item-count">{{ item.count }}</span>-->
          </template>
          <template v-else-if="item">
            <span class="select-box__item-title">{{ item.toLocaleLowerCase() }}</span>
            <span v-if="!localValue.includes(item)" class="select-box__item-count" />
            <!--        <span v-if="index !== 0" class="select-box__item-count">{{ item.count }}</span>-->
          </template>
          <Close v-else />
        </div>
        <template v-for="(item, index) in items">
          <template v-if="!value.includes(item)">
            <template v-if="item.value">
              <div
                :key="`key-${index}`"
                class="select-box__item"
                :class="{' select-box__item--active active': localValue.includes(item)}"
                @click="toggleItem(item)"
              >
                <span class="select-box__item-title">{{ item.value.toLocaleLowerCase() }}</span>
                <span v-if="!localValue.includes(item)" class="select-box__item-count" />
                <!--        <span v-if="index !== 0" class="select-box__item-count">{{ item.count }}</span>-->
                <Close v-else />
              </div>
            </template>
          </template>
        </template>
        <div class="custom-input-box__devider" />
        <div class="custom-input-box__select-all" @click="toogleAll">
          <div class="checkbox" :class="{'checkbox--active': isAllSelected}">
            <Ok class="svg-ok" />
          </div>
          <span class="custom-input-box__item-title">{{ isAllSelected? 'Отменить все': 'Выбрать все' }}</span>
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
    Color: () => import('assets/icons/color.svg'),
    Bucket: () => import('assets/icons/bucket.svg'),
    Sort: () => import('assets/icons/sort.svg'),
    Map: () => import('assets/icons/map.svg'),
    Sugar: () => import('assets/icons/sugar.svg'),
    Arrow: () => import('assets/icons/arrow-2.svg'),
    Close: () => import('assets/icons/close-2.svg'),
    Delete: () => import('assets/icons/delete.svg'),
    Ok: () => import('assets/icons/ok.svg')
  },
  props: {
    value: {
      required: true
    },
    items: {
    },
    data: {
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    isAllSelected () {
      const searchedItems = [...this.items].sort((a, b) => {
        return a.value_id - b.value_id
      })
      const selectedItems = [...this.localValue].sort((a, b) => {
        return a.value_id - b.value_id
      })
      return JSON.stringify(searchedItems) === JSON.stringify(selectedItems)
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
    toogleAll () {
      if (this.isAllSelected) {
        this.localValue = []
      } else {
        this.items.forEach((item) => {
          if (!this.localValue.includes(item)) {
            this.localValue.push(item)
          }
        })
      }
    },
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

  .select-box{
    cursor: default;
    .select-box__item{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
      padding: 10px;
    }
    .select-box__item:hover{
      background: rgba(229, 229, 229, 0.5);
      border-radius: 5px;
      .select-box__item-title{
        @include FontStyle('Acrom', normal, #710000, 16px, 19px);

      }
      .select-box__item-count{
        @include FontStyle('Acrom', bold, #be9191, 14px, 17px);
      }
    }
    .select-box__item-title{
      text-transform: capitalize !important;
      @include FontStyle('Acrom', normal, #000000, 16px, 19px);
    }
    .select-box__item-count{
      @include FontStyle('Acrom', bold, #999999, 14px, 17px);
    }
    .select-box__item--active.active{
      background: #710000;
      border-radius: 10px;
      .select-box__item-title{
        @include FontStyle('Acrom', normal, #FFFFFF, 16px, 19px);
      }
      .select-box__item-count{
        @include FontStyle('Acrom', bold, #FFFFFF, 14px, 17px);
      }
    }
  }
</style>
