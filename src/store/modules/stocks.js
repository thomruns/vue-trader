import stocks from '../../data/stocks_db'

const state = {
  stocks: []
}

//in what way will stocks change
const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = stock.price * (1 + Math.random() - 0.5) // create dummy random new daily stock prices
    })
  }
}

//what will we do with our stocks
const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

//get the state of our stocks
const getters = {
  stocks: state => { 
    return state.stocks
  }
}

// export the module
export default {
  state,
  mutations,
  actions,
  getters
}