let router = require('koa-router')()
let adminService = require('./../services/CommonAdminService')
let baseResult = require('./../models/BaseResult')

router.get('/list', async (ctx, next) => {
  let result = await adminService.list()
  if (result) {
    baseResult.SUCCESS.setData(result)
    result = baseResult.SUCCESS
  }else{
    baseResult.FAILED.setData(null)
    result = baseResult.FAILED
  }
  ctx.body = result
})


router.get('/findById/:id',async(ctx, next) => {
  let result = await adminService.findById(ctx.params.id)
  if (result) {
    baseResult.SUCCESS.setData(result)
    result = baseResult.SUCCESS
  }else{
    baseResult.FAILED.setData(null)
    result = baseResult.FAILED
  }
  ctx.body = result
})

router.post('/addAdmin',async(ctx,next) => {
   let result = null
   let req = ctx.request
   let code = await adminService.create(req);
   if(code === 200){
    baseResult.SUCCESS.setData("success")
    result = baseResult.SUCCESS
    ctx.body = ({
        result
    });
   }else{
    baseResult.FAILED.setData("failed")
    result = baseResult.FAILED
    ctx.body = ({
        result
    });  
   }
})

module.exports = router