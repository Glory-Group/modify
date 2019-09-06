import { observable, action } from 'mobx'
import { getQuestion, getSubject, examType, getQuestionType, getCondition, addType, addQuestions } from '../../service/index'

class Question {
    @observable dataList: object = {};

    @observable questionTypeList: Array<object> = []
    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {

        let result: any = await getQuestion(params);
        const { code, data, msg } = result
        if (code === 1) {
            return result
        }

    }
    //获取课程
    @action async getSubject(params: any): Promise<any> {
        let result: any = await getSubject(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }
    }

    //获取考试类型
    @action async getType(params: any): Promise<any> {
        let result: any = await examType(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }
    }

    //获取试题类型
    @action async questionType(params: any): Promise<any> {
        let result: any = await getQuestionType(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }
    }
    //按条件获取试题
    @action async condition(params: any): Promise<any> {
        let result: any = await getCondition(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }
    }

    //添加试题类型
    @action async addTypeAction(params: any) {
        let result = await addType(params)
        return result
    }

    //添加试题接口
    @action async addQuestionsAction(params:any){
        let result=await addQuestions(params)
        console.log(result,"lllllll")
        return result
    }

}




export default Question;