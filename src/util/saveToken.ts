import * as Cookie from 'js-cookie';

const key = 'authorization';
//取token
export let getToken: ()=>any = ()=>{
    return Cookie.get(key);
};

//存token 并且设置7天免登陆
export let setToken: (val: string)=>void = (val)=>{
    Cookie.set(key, val, { expires: 7 });
};

//移除token
export let removeToken: ()=>void = ()=>{
    Cookie.remove(key);
};