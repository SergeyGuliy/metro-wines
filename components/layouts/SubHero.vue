<template>
  <div class="sub-hero">
    <div class="container">
      <div class="sub-hero__row">
        <SubHeroColumn
          v-for="(text, index) in subHeroItems"
          :key="index"
          :column="{
            text,
            number: index + 1
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHero',
  components: {
    SubHeroColumn: () => import('./SubHeroColumn')
  },
  props: {
    subHeroItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang='scss'>
  @import "@/assets/styles/mixins.scss";

  .sub-hero {
    height: 297px;
    background-color: #3C0A0A;
    .sub-hero__small{
      display: none;
    }
    .sub-hero__row{
      padding: 70px 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .sub-hero__col{
      width: 33%;
      position: relative;
    }
    .sub-hero__number{
      position: absolute;
      top: -69px;
      @include FontStyle('Acrom', normal, #ffffff, 247px, 296px);
      opacity: 0.28;
    }
    .sub-hero__text{
      position: absolute;
      top: 23px;
      left: 111px;
      @include FontStyle('Acrom', normal, #ffffff, 26px, 31px);
    }

    @media (max-width: 1080px) {
      height: 240px;
      .container{
        height: 100%;
      }
      .sub-hero__col{
        height: 100%;
      }
      .sub-hero__number{
        top: -77px;
        left: -13px;
        @include FontStyle('Acrom', normal, #ffffff, 150px, 180px);
      }
      .sub-hero__text{
        position: static;
        margin-bottom: 0;
        margin-top: 25px !important;
        @include FontStyle('Acrom', normal, #ffffff, 18px, 22px);
      }
    }
    @media (max-width: 767px) {
      height: 242px;
      .sub-hero__big{
        display: none;
      }
      .sub-hero__small{
        display: block;
        max-width: 257px;
      }
      .sub-hero__row{
        height: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 20px 0 40px;
      }
      .sub-hero__col{
        width: 100%;
        height: 51px;
        margin-bottom: 25px;
      }
      .sub-hero__col-1{
        .sub-hero__number{
          left: -18px;
        }
      }
      .sub-hero__number{
        top: -5px;
        left: -25px;
        @include FontStyle('Acrom', normal, #ffffff, 50px, 60px);
      }
      .sub-hero__text{
        margin-top: 0 !important;
        @include FontStyle('Acrom', normal, #ffffff, 14px, 17px);
      }
    }
  }
</style>
