import { getToken } from './saveToken'
import store from "../store/index"

function guard(history:any){
    beforeEach(history)
    //监听页面的变化
  const unListen= history.listen((location:any)=>{
    beforeEach(history)
     })
};

function  beforeEach (history:any){
    if(getToken()){
         const userInfo:any= store.user.userInfo;
         if(!Object.keys(userInfo).length){
             //获取身份信息
             store.user.getUserInfo()
         }
    }else{
        //跳转到登录页面
        history.replace("/login")
    }
}

export function filterView(originRoutes:object[],viewAutority:object[]): object[]{
   const forbiddenView:object[]=[];
   function func(originRoutes:object[],viewAutority:object[]):object[]{
     const routes:object[]=[];
     originRoutes.forEach(({...item}:any)=>{
         if(item.children){
             item.children=func(item.children,viewAutority)
         }

         if(item.view_id){//筛选出对应身份可访问的页面
             if(viewAutority.findIndex((value:any)=>value.view_id===item.view_id)!==-1){
                 routes.push(item)
             }else{//将此身份不能访问的页面跳转的403页面
                 forbiddenView.push({from:item.path,to:"/403"});
             }
         }else{//公共页面
             routes.push(item);
         }
     })
     return routes;
   }
   let routes=func(originRoutes,viewAutority);
   return forbiddenView.concat(routes)
}

export default guard;