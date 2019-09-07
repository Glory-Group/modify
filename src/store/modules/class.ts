import { observable, action } from "mobx"
import { getClassList, addClassList, getGradeList, getRoomList, getStudentInfo, delStudent, delGrade, delRoom,updateGrade } from "../../service/index"

class ClassType {
    //获取班级号，教室号
    @action async getTabAction(url: string): Promise<any> {
        let result: any = await getClassList(url)
        if (result.code === 1) {
            return result
        }

    }
    @action async addListAction(url: string, params: any): Promise<any> {
        let result: any = await addClassList(url, params)
        if (result.code === 1) {
            return result
        }

    }
    //获取班级名
    @action async getGradeListAction() {
        let result: any = await getGradeList()
        if (result.code === 1) {
            return result
        }

    }
    //获取教室名
    @action async getRoomListAction() {
        let result: any = await getRoomList()
        if (result.code === 1) {
            return result
        }
    }
    //获取学生信息
    @action async getStudentInfoAction() {
        let result: any = await getStudentInfo()

        if (result.code === 1) {
            return result
        }
    }
    //删除学生信息
    @action async delStudentAction(params: any) {
        let result: any = await delStudent(params)
        console.log(result, "lllllllll")
        if (result.code === 1) {
            return result
        }

    }
    //删除班级
    @action async delGradeAction(params: any) {
        let result: any = await delGrade(params)
        console.log(result, "lllllllll")
        if (result.code === 1) {
            return result
        }

    }
    //更新班级
    @action async updateGradeAction(params:any){
        let result: any = await updateGrade(params)
        console.log(result, "qqqqqqqqqq")
        if (result.code === 1) {
            return result
        }
    }
    //删除教室
    @action async delRoomAction(params: any) {
        let result: any = await delRoom(params)
        console.log(result, "rrrrrrrrrrrrrr")
        if (result.code === 1) {
            return result
        }

    }

}
export default ClassType