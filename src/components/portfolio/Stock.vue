<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: US$ {{ Number.parseFloat(this.stock.price).toFixed(2)}} | Qty Owned: {{ stock.quantity}} | 
            Value: {{ Number.parseFloat(portValue).toFixed(2) }})</small>
          </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{nosale: insufficientQuantity}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
            >{{ insufficientQuantity ? 'Nope' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      },
      portValue() {
        return this.stock.quantity * this.stock.price
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>
  .nosale {
    border: 1px solid red;
  }
</style>