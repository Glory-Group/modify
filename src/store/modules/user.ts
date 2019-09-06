import {observable, action} from 'mobx'
import {getIdentity} from '../../service/index'
import {getTabList} from "../../service/user"
class User{
   @action async getIdentity(form:any):Promise<any>{
       let result:any=await getIdentity(form)
       console.log(result)
   }
   @action async getTabAction(url:string){
    let result:any=await getTabList(url)
    console.log(result,"llllllllpppppppp")
    if(result.code===1){
        return result;
        
    }
    
}
}
export default User;

