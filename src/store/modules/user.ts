import {observable, action} from 'mobx'

import {getTabList,addList,addUserType,setUserType,getUserIn,getViewAuthority} from "../../service/user"
class User{
     
   @observable userInfo:any={};
   @observable viewAuthority:object[]=[];

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

  @action async getUserInfo():Promise<any>{
    let userInfo:any = await getUserIn()
    this.userInfo=userInfo.data
    this.getViewAuthority()
   
   
  }

  @action async getViewAuthority():Promise<any>{
    let viewAuthority:any=await getViewAuthority();
    this.viewAuthority=viewAuthority.data;
  }

}
export default User;

