/**
 * Created by hasee on 2017/8/23.
 */
import axios from 'axios'
import qs from 'qs'

const mock = false //是否使用模拟数据
const serverUrl = 'http://alimam.duapp.com'
const mockUrl = 'localhost:8080/static/mock'
const baseUrl = mock?mockUrl:serverUrl
//http://alimam.duapp.com/product/getList?linenumber=5&pageNum=0
const fetchData = {
  get(url,params={},options={}) {
    return axios.get(url+'?'+qs.stringify(params),options).catch(err=>{throw err})
  },
  post(url,params={},options={}){
    return axios.post(url,qs.stringify(params),options).catch(err=>{throw err})
  },
  axios
}

export {baseUrl,fetchData}
export default  {baseUrl}
