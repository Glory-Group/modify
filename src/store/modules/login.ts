import {observable, action} from 'mobx'
import {loginInfo,getUserInfo} from '../../service/index'
import {setToken,removeToken} from "../../util/saveToken"
let account={};

if(window.localStorage.getItem('account')){
    account=JSON.parse(window.localStorage.getItem('account')+'');
}


class Login{
    
    @observable isLogin: boolean = false;
    @observable account:any=account;
    @action async login(form: any): Promise<any>{
        let result: any = await loginInfo(form);
        if(result.code===1){
            //1判断是否记住用户名和密码
            if(form.remember){
                  window.localStorage.setItem('account',JSON.stringify(form))
            }else{
                 window.localStorage.removeItem('account')
            }
           //2.判断是否七天免登陆
            if(form.autoLogin){
               setToken(result.token);
            }
        }
        return result;
    }
    //退出登录

    @action async loginOut():Promise<any>{
        removeToken();
    }
     //获取用户信息
   @action async getUserInfoAction(){     
    let result = await getUserInfo()
    return result;
 }
}

export default Login;