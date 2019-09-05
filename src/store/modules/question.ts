import { observable, action } from 'mobx'
import { getQuestion, getQuestionsType, addType, getExamType,getSubject } from '../../service/index'


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
   //获取试题分类
   @action async getQuestionsTypes() {
      let result: any = await getQuestionsType();
      if (result.code === 1) {
         return result
      }

   }
   //添加试题类型
   @action async addTypeAction(params: any) {
      let result = await addType(params)
      return result
   }
   //获取所有的考试类型
   @action async getExamTypeAction() {
      let result = await getExamType()     
      return result;

   }
   //获取所有的课程类型
   @ action async getSubjectAction(){
      let result = await getSubject()
  
      return result;
   }
  
}

export default Question;