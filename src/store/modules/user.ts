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

 //添加信息
  @action async addTypeAction(url:string,params:any){
    let result:any=await addUserType(url,params)
    return result
  }

  //设置信息
  @action async setTypeAction(url:string,params:any){
    let result:any=await setUserType(url,params)
    return result
  }

  //获取用户信息
  @action async getUserInfo():Promise<any>{
    let userInfo:any = await getUserIn()
    this.userInfo=userInfo.data
    this.getViewAuthority()
  }

  //获取用户权限
  @action async getViewAuthority():Promise<any>{
    let viewAuthority:any=await getViewAuthority();
    this.viewAuthority=viewAuthority.data;
  }

}
export default User;

