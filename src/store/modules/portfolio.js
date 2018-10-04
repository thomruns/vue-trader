const state = {
  funds: 10000,
  stocks_p: []
}

const mutations = {
  'BUY_STOCK' (state, { stockID, quantity, stockPrice }) {
    const record = state.stocks_p.find(element => element.id == stockID)
    if(record) {
      record.quantity += quantity
    } else {
      state.stocks_p.push({
        id: stockID,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK' (state, { stockID, quantity, stockPrice }) {
    const record = state.stocks_p.find(element => element.id == stockID)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks_p.splice(state.stocks_p.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks_p.map(stock => {
      const record = getters.stocks.find(element => element.id ==stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}