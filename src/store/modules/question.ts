import {observable, action} from 'mobx'
import {getQuestion,getSubject,examType,getQuestionType,getCondition} from '../../service/index'

class Question{
    @observable dataList:object={};
   
   @observable questionTypeList: Array<object> = []
    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any>{
      
        let result: any = await getQuestion(params);
        const {code,data,msg}=result
        if(code===1){
           return data
        }
        
    }
    //获取课程
     @action async getSubject(params:any):Promise<any>{
         let result:any = await getSubject(params);
         const {code,data,msg}=result;
         if(code===1){
             return data
         }
     }

     //获取考试类型
     @action async getType(params:any):Promise<any>{
        let result:any = await examType(params);
        const {code,data,msg}=result;
        if(code===1){
            return data
        }
    }

    //获取试题类型
    @action async questionType(params:any):Promise<any>{
        let result:any = await getQuestionType(params);
        const {code,data,msg}=result;
        if(code===1){
            return data
        }
    }
    //按条件获取试题
    @action async condition(params:any):Promise<any>{
        let result:any = await getCondition(params);
        const {code,data,msg}=result;
        if(code===1){
            return data
        }
    }

}




export default Question;