import Vue from 'vue'
import Vuex from 'vuex'
import En from './i18n/en.js'
import Es from './i18n/es.js'
Vue.use(Vuex)

const state = {
  lang: 0
}

const mutations = {
  defaultLang (state, lang) {
    state.lang = lang
    console.log(state.lang)
  },
  changeLang (state, newLang) {
    state.lang = newLang
  }
}

const actions = {
  defaultLang: ({commit}, lang) => {
    commit('defaultLang', lang)
  },
  changeLang: ({commit}, newLang) => {
    commit('changeLang', newLang)
  }
}

const getters = {
  getLang: state => {
    if (state.lang === 'es') {
      return Es
    } else {
      return En
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
