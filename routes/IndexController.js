let router = require('koa-router')()

let users = require('./../controller/commonUserController')
let admin = require('./../controller/commonAdminController')
let comments = require('./../controller/newsworldCommentsController')
let news = require('./../controller/newsworldNewsController')
let friend = require('./../controller/userFriendController')
/**
 * 总路由配置
 */
router.use('/user', users.routes(), users.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/comments', comments.routes(), comments.allowedMethods())
router.use('/news', news.routes(), news.allowedMethods())
router.use('/friend', users.routes(), friend.allowedMethods())

module.exports = router