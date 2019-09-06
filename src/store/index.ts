// 引入子模块
import Login from './modules/login';
import Question from "./modules/question";
import User from "./modules/user";
import Text from "./modules/text"
// 实例化模块
const login = new Login();
const question=new Question();
const user=new User();
const text =new Text()
export default {
    login,
    question,
    user,
    text
}