let dateTime = require('./../utils/DateTimeUtil') 
/**
 * @authors yuxin
 * @date    2018-04-28 00:59:27
 * @version V0.0.1
 */
class BaseModel{
    constructor(createUser,updateUser){
       this.create_time = dateTime.getNowDatetime()
       this.create_user = createUser
       this.update_time = dateTime.getNowDatetime()
       this.update_user = updateUser
       this.deleted = 0
    }
}

module.exports = BaseModel