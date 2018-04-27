let baseModel = require('./BaseModel')

class Admin extends baseModel{
    constructor(account,password,used) {
        super("","")
        this.account = account
        this.password = password
        this.used = used
    }
    async getAccount(){
        return account
    }
    async setAccount(account){
        this.account = account
    }
    async getPassword(){
        return password
    }
    async setPassword(password){
        this.password = password
    }
    async getUsed(){
        return used
    }
    async setUsed(used){
        this.used = used
    }
    async getRes(){
        return {'account':this.account,'password':this.password};
    }
}

module.exports = Admin
