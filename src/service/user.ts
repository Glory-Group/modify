import request from "../util/request"

//展示身份数据
export let getIdentity= (params:any)=>{
    return request.get("/user/identity",{params})
}