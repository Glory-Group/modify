import request from "../util/request"

//展示身份数据

export let getTabList=(url:string)=>{
    return request.get(url)
}

export let addList=(url:string,params:any)=>{
  return request.post(url,params)
}