'use strict';

const Controller = require('egg').Controller;


class CommentController extends Controller {

    // 添加评论
    async create() {
        
        // console.log('add')
        const { ctx } = this;
        const body = ctx.request.body;
        console.log(body)      
        ctx.body = await ctx.service.comment.create(body);
    
    }

    

}
module.exports = CommentController;
