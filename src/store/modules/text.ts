import { observable, action } from "mobx"
import {message} from "antd"
import service from '@/service/index'
const { createText,getExamList,createPaper} = service


class Text {
    @observable questions:any=[]
    @observable exam_exam_id:any=""
    @action async createTextAction(params: any) {
        let result: any = await createText(params)
        if (result.code === 1) {          
            this.questions=result.data.questions
            this.exam_exam_id=result.data.exam_exam_id
            return result
        }else{
            message.error(result.msg)
        }

    }
    @action async getExamListAction(){
        let result: any = await getExamList()
        return result
    }
    @action async createPaperAction(params:any){
        let id=this.exam_exam_id
        let result:any=await createPaper(params,id)
        return result
    }
  
}
export default Text