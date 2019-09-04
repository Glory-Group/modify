import request from "../util/request"


export let loginInfo=(params:any)=>{
   return request.post("/user/login",params)
}