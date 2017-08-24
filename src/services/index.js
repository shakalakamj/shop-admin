/**
 * Created by hasee on 2017/8/23.
 */
import  {baseUrl,fetchData} from  './config'


const Product = {
  getList:(params)=>fetchData.get(`${baseUrl}/product/getList`,params).catch(err=>{throw err}),
  add:(params)=>fetchData.post(`${baseUrl}/ImageUpload`,params,{
    headers:{

    }
  }).catch(err=>{throw err})
};

const ImageUpload = (params)=>fetchData.post(`${baseUrl}/ImageUpload`,params,{
  headers:{

  }
}).catch(err=>{throw err})

const Home = {
  getHotList:(params)=>fetchData.get(`${baseUrl}/home/getHotList`,params).catch(err=>{throw err}),
  getStatus:(params)=>fetchData.post(`${baseUrl}/home/getStatus`,params).catch(err=>{throw err}),
  getSl:(params)=>fetchData.post(`${baseUrl}/home/getSl`,params).catch(err=>{throw err})
};
export  { Product,ImageUpload,Home }
