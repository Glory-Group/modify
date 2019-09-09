import { observable, action } from "mobx"
import { createText,getExamList,createPaper} from "../../service/index"
import {message} from "antd"

class Text {
    @observable questions:any=[]
    @observable exam_exam_id:any=""
    @action async createTextAction(params: any) {
        let result: any = await createText(params)
        console.log(result,"nknknk")
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
        // console.log(result)
        return result
    }
}
export default Text