/* mongodb数据库 */
const mongoose = require('mongoose')
// 加载环境变量
require('dotenv').config({
    path:
        process.env.NODE_ENV === 'production'
            ? '.env.production'
            : '.env.development',
})

//数据库连接地址
const DBURL = process.env.MONGODB_URL
//连接数据库
mongoose
    .connect(DBURL, {
        // 设置为 false 可以禁用所有日志
        autoIndex: false,
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch((err) => {
        throw new Error('MongoDB Error: ' + err)
    })

module.exports = mongoose
