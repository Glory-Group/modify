import {observable, action} from 'mobx'
import {getQuestion} from '../../service/index'

class Question{
    @observable dataList:object={};
    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any>{
      
        let result: any = await getQuestion(params);
        const {code,data,msg}=result
        if(code===1){
           return result
        }
        
    }
    //获取课程
    // @action async getSubject(params:any)
}

export default Question;