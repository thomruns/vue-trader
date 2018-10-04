<template>
  <div>
    <app-stock v-for="(stock, id) in stocks" v-bind:key="id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 79 },
          { id: 2, name: 'Google', price: 200 },
          { id: 3, name: 'Apple', price: 231 },
          { id: 4, name: 'Twitter', price: 29 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
