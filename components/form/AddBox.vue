<template>
  <div class="add-box">
    <button class="add-box__minus" @click="decrement">
      -
    </button>
    <span class="add-box__count">{{ count }} шт</span>
    <button class="add-box__plus" @click="increment">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddBox',
  components: {},
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count = this.count + 1
    },
    decrement () {
      if (this.count > 0) {
        this.count = this.count - 1
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .add-box {
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 137px;
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      width: 38px;
      @include FontStyle('Acrom', bold, #000000, 26px, 31px);
    }
    .add-box__count{
      @include FontStyle('Acrom', bold, #000000, 14px, 17px);
    }
  }
</style>
