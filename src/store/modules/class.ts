import {observable,action} from "mobx"
import {getClassList,addClassList} from "../../service/index"

class ClassType{
     @action async getTabAction(url:string):Promise<any>{
         let result:any=await getClassList(url)
     
             return result
         
     }
     @action async addListAction(url:string,params:any):Promise<any>{
         let result:any=await addClassList(url,params)
         console.log(result)
         
             return result
         
     }
}
export default ClassType