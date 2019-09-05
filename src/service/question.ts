import request from '../util/request';

// 获取试题
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}

//获取课程
export let getSubject= (params:object)=>{
    return request.get("/exam/subject",{params});
}

//获取考试类型
export let examType = (params:object)=>{
    return request.get("/exam/examType",{params})
}

//获取试题类型
export let getQuestionType = (params:object)=>{
    return request.get("/exam/getQuestionsType",{params})
}

//按条件获取试题
export let getCondition =(params:object)=>{
    return request.get("/exam/questions/condition",{params})
}
