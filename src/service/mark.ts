import request from "../util/request"

//获取学生试卷列表
export let getMarkList=(url:string,params:object)=>{
    return request.get(url,{params})
}