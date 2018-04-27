/**
 * 管理员业务操作
 */

let validator = require('validator')
let adminModel = require('./../dao/CommonAdminDao')
let dataTime = require('./../utils/DateTimeUtil')
let md5 = require('./../utils/MD5')
let admin = require('./../models/Admin')

let adminDao = {

  /**
   * 管理员信息列表
   */
  async list() {
    let result = await adminModel.list()
    return result
  },


  async findById(id) {
    let result = await adminModel.findById(id)
    return result
  }, 
  /**
   * 创建管理员
   */
  async create(req) {
    let code=200
    let account=req.body.account
    let password=await md5.crymd5(req.body.password,'yuxin')
    let admin1 = new admin(account,password,1);
    let result = await adminModel.create(admin1)
    if (result.insertId) {
        return code
    }else{
        code=400
    }
    return code
  },

  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getExistOne( formData ) {
    let resultData = await adminModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    })
    return resultData
  },

  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await adminModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.userName})
    return resultData
  },


  /**
   * 根据用户名查找用户业务操作
   * @param  {string} userName 用户名
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {
    
    let resultData = await adminModel.getUserInfoByUserName( userName ) || {}
    let userInfo = {
      // id: resultData.id,
      email: resultData.email,
      userName: resultData.name,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    }
    return userInfo
  },


  /**
   * 检验用户注册数据
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }

    // if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
    //   result.message = userCode.ERROR_USER_NAME
    //   return result
    // }
    // if ( !validator.isEmail( userInfo.email ) ) {
    //   result.message = userCode.ERROR_EMAIL
    //   return result
    // }
    // if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
    //   result.message = userCode.ERROR_PASSWORD
    //   return result
    // }
    // if ( userInfo.password !== userInfo.confirmPassword ) {
    //   result.message = userCode.ERROR_PASSWORD_CONFORM
    //   return result
    // }

    result.success = true

    return result
  }

}

module.exports = adminDao
