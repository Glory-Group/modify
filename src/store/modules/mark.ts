import {observable,action} from "mobx";
import service from '@/service/index'
const  {getMarkList} = service

class Mark{
   @action async getMarkListAction(url:string,params:object){
       let result:any=await getMarkList(url,params)
       return result
   }
}
export default Mark