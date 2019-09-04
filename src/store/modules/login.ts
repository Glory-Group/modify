import {observable, action} from 'mobx'
import {loginInfo} from '../../service/index'


interface LoginForm{
    user_name: string,
    user_pwd: string
}

class Login{
    
    @observable isLogin: boolean = false;

    @action async login(form: LoginForm): Promise<any>{
        let result: any = await loginInfo(form);
        console.log('result...', result);
        return result.code;

    }
}

export default Login;