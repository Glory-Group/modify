import {observable,action} from "mobx"
import {getUserList} from "../../service/user"
class User{
    
    @action async getUserAction(){
        let result:any=await getUserList()
     
        if(result.code===1){
            return result;
            
        }
        
    }
}
export default User