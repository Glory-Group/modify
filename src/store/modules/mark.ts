import {observable,action} from "mobx";
import {getMarkList} from "../../service/index"
class Mark{
   @action async getMarkListAction(url:string,params:object){
       let result:any=await getMarkList(url,params)
       return result
   }
}
export default Mark