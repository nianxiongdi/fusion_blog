'use strict';

const Controller = require('egg').Controller;


class UserController extends Controller {

    // 注册
    async create() {
        const { ctx } = this;

        // ctx.request.body 获取post的参数
        ctx.body = await this.service.user.create(ctx.request.body);
        
    }

    // 登录
    async login() {
        const { ctx } = this;

        // ctx.request.body 获取post的参数
        ctx.body = await this.service.user.login(ctx.request.body);
        
    }


}
module.exports = UserController;
