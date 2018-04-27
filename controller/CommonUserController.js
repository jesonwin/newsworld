let router = require('koa-router')()
let userService = require('./../services/commonUserService')


router.get('/list', async (ctx, next) => {
  let result = await userService.list()
  ctx.body = result
})

router.get('/findById/:id',async(ctx, next) => {
  let result = await userService.findById(ctx.params.id)
  ctx.body = result
})


module.exports = router