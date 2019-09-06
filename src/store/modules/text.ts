import { observable, action } from "mobx"
import { createText,getExamList } from "../../service/index"
import {message} from "antd"

class Text {
    @action async createTextAction(params: any) {
        let result: any = await createText(params)
        
        if (result.code === 1) {          
            message.info(result.msg)
            return result
        }else{
            message.error(result.msg)
        }

    }
    @action async getExamListAction(){
        let result: any = await getExamList()
        console.log(result,"llll")
        return result
    }
}
export default Text