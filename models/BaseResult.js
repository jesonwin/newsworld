/**
 * @authors yuxin
 * @date    2018-04-28 00:59:27
 * @version V0.0.1
 */

class BaseResult{
    constructor(code,msg,data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    async setCode(code){
        this.code = code;
    }
    async getCode(){
        return this.code;
    }
    async setMsg(msg){
        this.msg = msg;
    }
    async getMsg(){
        return this.msg;
    }
    async setData(data){
        this.data = data;
    }
    async getData(){
        return this.data;
    }
    async getRes(){
        return {'code':this.code,'msg':this.msg,'data':this.data};
    }
}
module.exports = {
    SUCCESS                 :       new BaseResult(200,'success',{}),
    FAILED                  :       new BaseResult(400,'faild',{}),
    USER_PASSWORD_ERROR     :       new BaseResult(101,'faild',{}),
    USER_CAPTCHA_ERROR      :       new BaseResult(102,'faild',{})
}