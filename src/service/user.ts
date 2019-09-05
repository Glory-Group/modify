import request from "../util/request"

export let getUserList=()=>{
    return request.get("/user/user")
}