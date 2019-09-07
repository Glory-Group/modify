// 引入子模块
import Login from './modules/login';
import Question from "./modules/question";
import User from "./modules/user";
import ClassType from "./modules/class";
import Text from "./modules/text"
import Mark from './modules/mark';
// 实例化模块
const login = new Login();
const question=new Question();
const user=new User();
const classType=new ClassType();
const text =new Text()
const mark=new Mark()
export default {
    login,
    question,
    user,
    classType,
    text,
    mark
}