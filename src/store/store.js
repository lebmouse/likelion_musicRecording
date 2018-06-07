import Vue from 'vue'
import Vuex from 'vuex'
import test from './test.json'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: test.data
    }
})