import { observable, action } from 'mobx'

import { getTabList, addList, addUserType, setUserType, getUserIn, getViewAuthority,updateUserInfo, getIdentityView } from "../../service/user"
class User {

  @observable userInfo: any = {};
  @observable viewAuthority: object[] = [];
  @observable userName: any = ""
  @observable identityViews: any = []
  @observable identity_text: string = ""
  @observable nowIndetityViews: object[] = []
  @observable avatar:string=''
  @action async getTabAction(url: string) {
    let result: any = await getTabList(url)
    if (result.code === 1) {
      return result;
    }

  }

  @action async addListAction(url: string, params: any) {
    let result: any = await addList(url, params)
    return result;

  }

  //添加信息
  @action async addTypeAction(url: string, params: any) {
    let result: any = await addUserType(url, params)
    return result
  }

  //设置信息
  @action async setTypeAction(url: string, params: any) {
    let result: any = await setUserType(url, params)
    return result
  }

  //获取用户信息
  @action async getUserInfo():Promise<any>{
    let userInfo:any = await getUserIn()
    this.userInfo=userInfo.data
    this.avatar = userInfo.data.avatar;
    this.userName = userInfo.data.user_name
    this.identity_text = userInfo.data.identity_text
    this.getIdentityViewAction()
    this.getViewAuthority()
  }
    // console.log(userInfo,"kkkkkkkkkkkkk")
  // @action async getUserInfo(): Promise<any> {
  //   let userInfo: any = await getUserIn()
  //   this.userInfo = userInfo.data
  //   //console.log(userInfo,"kkkkkkkkkkkkk",userInfo.data)
  //   this.userName = userInfo.data.user_name
  //   this.identity_text = userInfo.data.identity_text
  //   this.getViewAuthority()
  //   //  //获取相应身份对应的权限页面
  //   this.getIdentityViewAction()
  // }

  //获取用户权限
  @action async getViewAuthority(): Promise<any> {
    let viewAuthority: any = await getViewAuthority();
    this.viewAuthority = viewAuthority.data;
  }
  //更改用户信息 
  @action async changeAvatar(avatar:string):Promise<any>{
      this.avatar=avatar
  }
  //更新用户信息
  @action async updateUserInfoAction(params:any):Promise<any>{
    let result=await updateUserInfo(params)
    return result
  }
  @action async getIdentityViewAction() {
    let result = await getIdentityView()
    //this.identityViews = result.data
    let arr:any=[]
     result.data.forEach((item: any) => {
      if (item.identity_text == this.identity_text) {
      
        arr.push({ view_id: item.view_id })
      //  console.log(this.nowIndetityViews)
      }
    })
    this.nowIndetityViews=arr
    console.log("aaaaaaaaaaaa",result)
    return result;
  }
}
export default User;

