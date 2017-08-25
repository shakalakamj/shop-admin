/**
 * Created by hasee on 2017/8/24.
 */
/**
 * Created by hasee on 2017/8/8.
 */

import { Product } from '@/services';
import maizuo from '@/services/maizuo';
export  default  {
  namespaced:true,
  state:{
    tabData:[]
  },
  //给组件提供的数据
  getters: {
    tabData:state=>state.tabData
  },
  mutations : {
    INIT_TAB_DATA(state,{tabData}){
      //修改数据
      state.tabData = tabData
    }
  },
  //给组件提供的方法
  actions:{
    getList({commit},{linenumber,pageNum}){
      //获取数据
      Product.getList({linenumber,pageNum}).then(res=>{
        //提交数据给mutation
        commit("INIT_TAB_DATA",{tabData:res.data.resultsArr})
      })

    }
  }

}
