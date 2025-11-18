## 基于 VUE3 + VITE + TS 的个人博客

### 写在前边的一些碎碎念

> &emsp;&emsp;本博客预计为我的个人博客，基本介绍从大学到以后工作的所有历程，也算是对我学习的一个衡量。我本人是不怎么喜欢记录的，但是也是出于对**前端工作的喜爱**，总觉得学了点东西不用一下真的会忘得很快hhh，所以打算从这开始使用这三个前端技术进行博客搭建。

> &emsp;&emsp;虽然博客的教程很多，但是我并不喜欢看这些东西，就像是玩一款剧情解密游戏，结局都告诉你了，还有什么意思呢？这个博客我会更致力于自己去实现写写东西，不受那些框架的约束和限制，写起来也更有成就感。

> &emsp;&emsp; 希望能坚持到博客上线，加油！Come On！

> 2024.5.6 记

---

### 技术栈
前端：[Vue3](https://cn.vuejs.org/ "VUE3中文官网"), [Vite](https://vitejs.cn/ "VITE中文官网"), [TypeScript](https://www.tslang.cn/ "TS中文官网"), [Element-Plus](https://element-plus.org/zh-CN/ "Element-Plus中文官网"), [Pinia](https://pinia.web3doc.top/ "Pinia中文文档")

后端：[Node.js](https://nodejs.org/en "node英文官网"), [Express](https://www.expressjs.com.cn/ "Express中文网"), [Redis](https://redis.io/ "Redis英文官网")

> 不太考虑去使用Java + SpringBoot去做后端，但是目前只学了Express框架，后期有了好的后端框架还会去重新学习和使用，目前打算使用Express作为后端服务器支撑

数据库：[MongoDB](https://www.mongodb.com/zh-cn/docs/ "MongoDB文档")

---
> 2024.5.29 记
> 
> 2025.1.4 fix: 新增Redis技术, 将数据库技术从 MySQL 改为 MongoDB, 去掉 Pinia 持久化插件

### 功能

1. 登录/注册：页面完成（2024.6.29）
2. 主页：介绍 + 花里胡哨的功能
3. 帖子：生活记录、学习记录、工作记录
4. 友链：其他人博客（项目）链接
5. 留言板：注册用户留言
6. 关于：博客介绍 [、个人介绍]

### 前端方案
1. 设计稿标准大小：1920*1080
2. 适配方案转型(2025.11.18)：rem + @media -> vw/vh + clamp