'use strict'

const Controller = require('egg').Controller

class BlogController extends Controller {
    async create() {
        
        const { ctx } = this;
        const body = ctx.request.body;
        ctx.body = await this.service.blog.create(body);

    }

    /**
     *  查询博客列表
     **/
    async adminList() {
        const {
            ctx
        } = this;
        console.log('-----------');
        console.log(this.ctx.query)
        const blogList = await this.service.blog.adminList(this.ctx.query)
        ctx.body = blogList;

    } 

    /**
     *  根据博客id删除博客  get获取参数this.ctx.params
     **/
    async deleteById() {
        const {
            ctx
        } = this;
        // { user_id: '1', id: '16' } 
        const { user_id, id } = this.ctx.params;
        console.log(user_id, id);
        console.log('-delete-')

        ctx.body = await this.service.blog.deleteById(user_id, id);
    }

    /** 
     * 根据id查找博客
     *      查看博客
     *      查找评论
     *      tag 这里未添加
    */
   async find() {
        const {
            ctx
        } = this;
        const id = ctx.params.id;
        ctx.body = await this.service.blog.find(id);
   }

   /**
    * 根据id查找博客
    **/
   async findById() {
        const {
            ctx
        } = this;
        const id = ctx.params.id;
        console.log(id);
        ctx.body = await this.service.blog.findById(id);
   }
}


module.exports = BlogController;
