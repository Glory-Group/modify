import request from "../util/request"

//展示身份数据
export let getIdentity= (params:any)=>{
    return request.get("/user/identity",{params})
}
export let getUserList=()=>{
    return request.get("/user/user")
}