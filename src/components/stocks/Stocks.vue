<template>
  <div>
    <app-stock v-for="(stock, id) in stocks" v-bind:key="id" :stock="stock"></app-stock>
    <p>After EACH purchase, choose Save Data.</p>
    <p>To finish the trading day, choose End Day.</p>
    <p>To load saved data, choose Load Data.</p>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>
