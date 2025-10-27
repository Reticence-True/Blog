// 注册别名
require('module-alias/register');

import type { Request, Response } from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// 自定义中间件
const responseMiddleware = require('@middleware/responseMiddleware');
// 路由
const registerRouter = require('@routes/register');
const loginRouter = require('@routes/login');
const roleRouter = require('@routes/role');
const userRouter = require('@routes/user');

const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// 中间件
app.use(responseMiddleware);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 路由
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/role', roleRouter);
app.use('/user', userRouter);

// 页面不存在
app.use((_: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    status: 'error',
    message: '页面不存在',
  });
});

app.listen(port, host, () => {
  console.log(`Express running, listen port ${port}`);
});
