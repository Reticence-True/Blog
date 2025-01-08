// 注册别名
require('module-alias/register')

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// 自定义中间件
const responseMiddleware = require('@middleware/responseMiddleware')
// 路由
const apiRouter = require('@routes/api')

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

// 中间件
app.use(responseMiddleware)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// 路由
app.use('/api', apiRouter)

// 页面不存在
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        status: 'error',
        message: '页面不存在',
    })
})

app.listen(port, host, () => {
    console.log('Express running, listen port ' + port)
})
