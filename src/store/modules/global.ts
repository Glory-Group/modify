import {observable,action} from "mobx"

class Intl{
    @observable locale:string="zh"

    //按条件获取试题
    @action changeLocale(locale:string):void{

        this.locale=locale
    }
}

export default Intl;