import request from "../../util/request"

//展示身份数据

export let getTabList=(url:string)=>{
    return request.get(url)
}

export let addList=(url:string,params:any)=>{
  return request.post(url,params)
}

export let addUserType=(url:string,params:any)=>{
  return request.get(url,{params})
}

export let setUserType=(url:string,params:any)=>{
   return request.post(url,params)
}

//获取用户信息
export let getUserIn=()=>{
    return request.get("/user/userInfo")
}

//获取用户权限
export let getViewAuthority=()=>{
  return request.get("/user/view_authority")
}
//更改用户信息
export let updateUserInfo=(params:any)=>{
  return request.put("/user/user",params)
}
//展示身份和视图权限关系/user/identity_view_authority_relation
export let getIdentityView=()=>{
  return request.get("/user/identity_view_authority_relation")
}
//获取用户列表
export let getUserList=()=>{
  return request.get("/user/user")
}