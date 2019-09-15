import request from "@/util/request"


export let loginInfo=(params:any)=>{
   return request.post("/user/login",params)
}
//获取用户信息
export let getUserInfo=()=>{
    return request.get("/user/userInfo")
}