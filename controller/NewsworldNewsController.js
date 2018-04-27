const router = require('koa-router')()
const newsService = require('./../services/newsworldNewsService')


router.get('/list', async (ctx, next) => {
  let result = await newsService.list()
  ctx.body = result
})

router.get('/findById/:id',async(ctx, next) => {
  let result = await newsService.findById(ctx.params.id)
  ctx.body = result
})


module.exports = router