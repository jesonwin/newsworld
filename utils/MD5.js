let crypto = require('crypto') 

let md5 = {
/** 
  *@param   str 字符串 
   @param   key 秘钥 
  */
 async crymd5(str,key){
    let decipher = crypto.createHash('md5',key)
    // if(key){  
    //   return decipher.update(str).digest()  
    // }
    let result =  decipher.update(str).digest('hex')
    return result
}
}
module.exports = md5