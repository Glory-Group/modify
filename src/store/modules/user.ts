import {observable, action} from 'mobx'
import {loginInfo} from '../../service/index'
import { setToken, removeToken } from 'src/utils';

// import {HttpInfo, HttpType, LoginForm} from '../../types/index'

interface LoginForm{
    user_name: string,
    user_pwd: string
}
let account ={};
if(window.localStorage.getItem('account')){
    account=JSON.parse(window.localStorage.getItem('account')+"")
   
}

class User{
    @observable isLogin: boolean = false;
    @observable account:any=account

    @action async login(form: any): Promise<any>{
        let result: any = await loginInfo(form);
       
        if(result.code===1){
            //1.判断是否记住用户名和密码
            if(form.remember){
                window.localStorage.setItem('account',JSON.stringify(form))

            }else{
                window.localStorage.removeItem('account')
            }
           
            //2.判断是否7天免登陆
            if(form.autoLogin){
                // console.log(result.token,"mmmmmmmmmmmmmm")
                // console.log(setToken(result.token),"ppppppppppp")
                setToken(result.token)
            }
        }
        return result;
    }
    @action async logout():Promise<any>{
        removeToken()
    }
}

export default User;