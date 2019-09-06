import request from "../util/request"

export let getClassList=(url:string)=>{
    return request.get(url)
}
export let addClassList=(url:string,params:any)=>{
    console.log(url,params)
    return request.post(url,params)
}