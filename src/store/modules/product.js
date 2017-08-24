/**
 * Created by hasee on 2017/8/24.
 */
/**
 * Created by hasee on 2017/8/8.
 */

import { Product } from '@/services';

export  default  {
  namespaced:true,
  state:{
    tabData:[]
  },
  //给组件提供的数据
  getters:{
    tabData:state=>state.tabData
  },
  mutations:{
    INIT_TAB_DATA(state,{tabData}){
      state.tabData = tabData
    }
  },
  //给组件提供的方法
  actions:{
    getList({commit},{linenumber,pageNum}){
      Product.getList({linenumber,pageNum}).then(res=>{
        commit("INIT_TAB_DATA",{tabData:res.data.resultsArr})
      })
    }
  }

}
