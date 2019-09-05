// 引入子模块
import Login from './modules/login';
import Question from "./modules/question";
// 实例化模块
const login = new Login();
const question=new Question();

export default {
    login,
    question
}