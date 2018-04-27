let router = require('koa-router')()
let friendService = require('./../services/UserFriendService')


router.get('/list', async (ctx, next) => {
  let result = await friendService.list()
  ctx.body = result
})

router.get('/findById/:id',async(ctx, next) => {
  let result = await friendService.findById(ctx.params.id)
  ctx.body = result
})


module.exports = router