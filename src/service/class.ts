import request from "../util/request"

export let getClassList=(url:string)=>{
    return request.get(url)
}
export let addClassList=(url:string,params:any)=>{
    console.log(url,params)
    return request.post(url,params)
}
//获取班级列表
export let getGradeList=()=>{
    return request.get("/manger/grade")
}
///manger/room 获取教室列表
export let getRoomList=()=>{
    return request.get("/manger/room")
}
///student/info 获取学生信息
export let getStudentInfo=()=>{
    return request.get("/manger/student")
}
//删除学生信息
export let delStudent=(params:any)=>{
    return request.delete(`/manger/student/${params}`)
}