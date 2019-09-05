import {observable, action} from 'mobx'
import {getIdentity} from '../../service/index'
import {getUserList} from "../../service/user"
class User{
   @action async getIdentity(form:any):Promise<any>{
       let result:any=await getIdentity(form)
       console.log(result)
   }
   @action async getUserAction(){
    let result:any=await getUserList()
 
    if(result.code===1){
        return result;
        
    }
    
}
}
export default User;

