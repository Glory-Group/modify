import request from '../util/request';

// 获取试题
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}
//获取所有的试题类型
export let getQuestionsType=()=>{
    return request.get("/exam/getQuestionsType")
}
//添加试题类型
export let addType=(params:any)=>{
    return request.get("/exam/insertQuestionsType",{params})
}
//获取所有考试类型
export let getExamType=()=>{
    return request.get("/exam/examType")
}
//获取所有课程类型

export let getSubject=()=>{
    return request.get("/exam/subject")
}
