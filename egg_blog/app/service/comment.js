'use strict';

const {
    ERROR,
    SUCCESS,
} = require('../util/util')

const Service = require('egg').Service;
const md5 = require('js-md5');

class UserService extends Service {


    async create(comment) {
        const { ctx } = this;
        //{ blog_id: '9', user_id: '1', content: 'a', username: 'admin' }
        const {blog_id, user_id, content} = comment;
        if(!blog_id || !user_id || !content) {
            return Object.assign(ERROR,{
                msg: 'server error!'
            })
        }
        const res = await this.app.mysql.insert('comments',{
            blog_id: comment.blog_id,
            user_id: comment.user_id,
            content: comment.content,
            created_at: new Date(),
            updated_at: new Date(),
        })
        console.log(res);
        console.log('33331');

        // 判断是否插入成功
        if(res.affectedRows) {

            // 还需要对blog增加评论数
            /*
            select commentSize from blogs 
                where id = 3;
            update blogs set commentSize = '' 
                where id = ''
            */
           console.log(blog_id);
           console.log("++++")
           const blog = await this.app.mysql.get('blogs', {
               id: blog_id
           })

           const { commentSize } = blog;
           const result = await this.app.mysql.update('blogs', {
            commentSize: commentSize + 1,
           },{
            where: {
                id: blog_id
            }
           })

           if(result.affectedRows){
            return Object.assign(SUCCESS,{
                data: {id: res.insertId, ...comment,},
                msg: 'success',
                status: 201,
            })
           }

        }
    }
 
}


module.exports =  UserService;
 

