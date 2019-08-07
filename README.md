



# 1. 介绍


关于Fusion Design + React-router + redux + eggjs 构建个人博客.


这里分为三部分:
* blog的展示
* 管理博客的项目
* eggjs的后端代码

## 1.1 Fusion Design
[Alibaba Fusion Design System](https://fusion.design/) 是一套旨在`全面提升设计`、`开发效率`的工作方式。通过`协助企业构建设计系统`，提供`系统化工具`协助设计师、前端使用设计系统，提供一站式设计项目协助平台，打通互联网产品从设计到开发的工作流。

## 1.2 eggjs
基于koa开发的nodejs后端框架,特性如下:
* 提供基于 Egg 定制上层框架的能力
* 高度可扩展的插件机制
* 内置多进程管理
* 基于 Koa 开发，性能优异
* 框架稳定，测试覆盖率高
* 渐进式开发


## 1.3 其他
在项目中使用React-router,redux,MySQL等,构建的博客.



# 2. 设计

## 2.1 表设计
博客系统,主要是以写博客为了,表的设计如下:

`users` - 用户表
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190607113401121.png)

 `blogs` - 博客表
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190607113552641.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwNjM4ODMx,size_16,color_FFFFFF,t_70)


`catalog` -  目录表 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190607113649357.png)


`collects` - 收藏表 - 收藏一些链接
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190607113743374.png)

`comments` - 评论
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190607120836963.png)
## 2.2 前端页面设计
前端分为两个项目,一个是博客展示,一个是博客管理

### 2.2.1 博客展示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190628223543898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwNjM4ODMx,size_16,color_FFFFFF,t_70)
对于博客展示主要功能如下:
* 登录与注册
* 查看博客/评论
*  查看收藏
* 其他


已经完成功能:
*   [**√**] 登录
*  [**√**] 查看博客和详情

### 2.2.２ 博客管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190628223820336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwNjM4ODMx,size_16,color_FFFFFF,t_70)
对于博客管理主要功能如下:
* 登录与注册
* 创建博客
*  创建分类
* 创建标签
* 其他

已经完成功能:
*   [**√**] 登录
*  [**√**] 创建博客
* [**√**] 删除和编辑博客



## 2.３ 后端页面设计
主要只用eggjs去搭建一个博客系统，可以参照官网进行操作．请点击[这里](https://eggjs.org/en/intro/index.html)


## 3 实现
实现代码我已经放到github,请点击[这里](https://github.com/nianxiongdi/fusion_blog)，关于博客的发布，查看删除功能已经实现，大家可以参考参考，这会持续的更新～～～











