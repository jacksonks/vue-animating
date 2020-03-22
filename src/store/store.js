import Vue from 'vue'
import Vuex from 'vuex'
import exemplo from './modules/exemplo'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {exemplo},
    state: {},
    mutations: {},
    actions: {},
    getters: {}

});