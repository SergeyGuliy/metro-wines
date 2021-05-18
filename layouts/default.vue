<template>
  <div class="layout-default">
    <Header />
    <div class="layout__inner">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../components/layouts/Header'),
    Footer: () => import('../components/layouts/Footer')
  }
}
</script>

<style lang="scss">
.layout-default{
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .layout__inner{
    flex: 1 1 auto;
  }
}
</style>
