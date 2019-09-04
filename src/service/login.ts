import request from "../util/request"


export let loginInfo=(params:any)=>{
   return request.post("/user/login",{user_name:params.username,user_pwd:params.password})
}