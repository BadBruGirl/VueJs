<template>
  <div id="app">
    <ProductDateils />
  </div>
</template>

<script>
import ProductDateils from './components/ProductDateils.vue'

export default {
  name: 'App',
  components: {
    ProductDateils
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
