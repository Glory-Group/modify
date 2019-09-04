import request from '../utils/request';

// 登陆
export let loginInfo = (params: object)=>{
    return request.post('/user/login', params);
}