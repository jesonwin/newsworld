const router = require('koa-router')()
const commentsService = require('./../services/newsworldCommentsService')


router.get('/list', async (ctx, next) => {
  let result = await commentsService.list()
  ctx.body = result
})

router.get('/findById/:id',async(ctx, next) => {
  let result = await commentsService.findById(ctx.params.id)
  ctx.body = result
})


module.exports = router