import {observable, action} from 'mobx'

import {getTabList,addList,addUserType,setUserType} from "../../service/user"
class User{
  
   @action async getTabAction(url:string){
    let result:any=await getTabList(url)
    if(result.code===1){
        return result;
        
    }
    
  }

  @action async addListAction(url:string,params:any){
      let result:any=await addList(url,params)
          return result;
      
  }

  @action async addTypeAction(url:string,params:any){
    let result:any=await addUserType(url,params)
    return result
  }

  @action async setTypeAction(url:string,params:any){
    let result:any=await setUserType(url,params)
    return result
  }
}
export default User;

