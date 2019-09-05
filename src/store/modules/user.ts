import {observable, action} from 'mobx'
import {getIdentity} from '../../service/index'

class User{
   @action async getIdentity(form:any):Promise<any>{
       let result:any=await getIdentity(form)
       console.log(result)
   }
}
export default User;