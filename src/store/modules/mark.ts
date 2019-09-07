import {observable,action} from "mobx";
import {getMarkList} from "../../service/index"
class Mark{
   @action async getMarkListAction(url:string){
       let result:any=await getMarkList(url)
       return result
   }
}
export default Mark