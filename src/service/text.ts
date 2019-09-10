import request from "../util/request"

export let createText=(params:any)=>{
    return request.post("/exam/exam",params)
}
export let getExamList=()=>{
    return request.get("/exam/exam")
}
export let createPaper=(params:any,id:any)=>{
    return request.put(`/exam/exam/${id}`,params)
}