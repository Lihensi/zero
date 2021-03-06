const express=require('express')
const router=express.Router()
// const userHandler=require('../router_handler/user')

const expressjoi=require('@escook/express-joi')
const {reg_login_schema}=require('../schema/user')
const user_handler=require('../router_handler/user')
// 注册新用户
// 3. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理
// 注册新用户
router.post('/reguser',expressjoi(reg_login_schema),user_handler.regUser )

// 登录
router.post('/login', expressjoi(reg_login_schema),user_handler.login)
module.exports=router