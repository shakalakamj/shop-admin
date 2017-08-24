/**
 * Created by hasee on 2017/8/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'

import product from "./modules/product"

//使用vuex插件
Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    product
  }
});


export default store

