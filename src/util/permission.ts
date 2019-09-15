import { getToken } from './saveToken'
import store from "../store/index"

function guard(history: any) {
    beforeEach(history)
    //监听页面的变化
    const unListen = history.listen((location: any) => {
        beforeEach(history)
    })
};
function beforeEach(history: any) {
    if (getToken()) {
        const userInfo: any = store.user.userInfo;
        if (!Object.keys(userInfo).length) {
            //获取身份信息 根据身份信息 分发页面权限
            store.user.getUserInfo()        
        }
    } else {
        //跳转到登录页面
        history.replace("/login")
    }
}
//根据用户的身份信息 筛选出有权限的页面
/**
 * 根据用户的身份id 得到所有的页面权限id 
从路由列表中筛选出该身份对应的权限列表进行渲染页面 并将没有权限的页面的路径设置为403/404
 * @param originRoutes 路由列表,相应页面会对应view_id
 * @param viewAutority 获取的用户权限信息
 * 例如 登录页面对应的 view_id: "login", 
 * 0: {view_authority_id: "r50r9t-1p1kbm", view_authority_text: "登录", view_id: "login"}
1: {view_authority_id: "8olznh-943zt", view_authority_text: "主界面", view_id: "main"}
2: {view_authority_id: "4pvvb3-h5kzg", view_authority_text: "添加试题", view_id: "main-addQuestions"}
3: {view_authority_id: "vnpojq-tisgu", view_authority_text: "试题分类", view_id: "main-questionsType"}

 */
export function filterView(originRoutes: object[], viewAutority: object[]): object[] {
    //用来保存没有权限的页面
    const forbiddenView: object[] = [];
    
    function func(originRoutes: object[], viewAutority: object[]): object[] {
        let routes: object[]  = [];
        originRoutes.forEach(({ ...item }: any) => {
            if (item.children) {
                item.children = func(item.children, viewAutority)
            }
            if (item.view_id) {//筛选出对应身份可访问的页面
                if (viewAutority.findIndex((value: any) => value.view_id === item.view_id) !== -1) {
                    routes.push(item)
                   
                } else {//将此身份不能访问的页面跳转的403页面
                  
                    forbiddenView.push({ from: item.path, to: "/403" });
                  
                }
             
              
            } else {//公共页面
                routes.push(item);
            }
        })
        return routes;
    }
    let route = func(originRoutes, viewAutority);
    console.log(route)
    return forbiddenView.concat(route)
}
export default guard;
