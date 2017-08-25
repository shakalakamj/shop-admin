/**
 * Created by hasee on 2017/8/23.
 */
import  {baseUrl,fetchData} from  './config'

//获取商品数据方法的模块
const Product = {
  getList:(params)=>fetchData.get(`${baseUrl}/product/getList`,params),
  add:(params)=>fetchData.post(`${baseUrl}/product/add`,params,{
    headers:{

    }
  }).catch(err=>{throw err})
};

const ImageUpload = (params)=>fetchData.post(`${baseUrl}/ImageUpload`,params,{
  headers:{

  }
}).catch(err=>{throw err})

const Home = {
  getHotList:(params)=>fetchData.get(`${baseUrl}/home/getHotList`,params),
  getStatus:(params)=>fetchData.post(`${baseUrl}/home/getStatus`,params),
  getSl:(params)=>fetchData.post(`${baseUrl}/home/getSl`,params)
};


export  { Product,ImageUpload,Home }
