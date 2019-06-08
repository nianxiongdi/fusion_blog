'use strict';

const {
    ERROR,
    SUCCESS,
} = require('../util/util')

const Service = require('egg').Service;
const md5 = require('js-md5');

class BlogService extends Service {

    /*
        { title: 'title',
            summary: 'summary',
            content: '# content',
            tags: 'test',
            catalog_id: 2,
            user_id: 1 }

            id           
            title       
            summary      
            content      
            readSize     
            commentSize  
            tags         
            created_at   
            updated_at   
            user_id   
            catalog_id    
    */
    async create(blog) {
   
       try{
            const blogDB = await this.app.mysql.insert('blogs', {
                title: blog.title,
                summary: blog.summary, 
                content: blog.content, 
                tags: blog.tags, 
                readSize: 0,
                commentSize: 0,
                tags: blog.tags,
                created_at: new Date(),
                updated_at: new Date(),
                user_id: blog.user_id,
                catalog_id: blog.catalog_id,
            })
            if(blogDB.affectedRows === 1) {
                return Object.assign(SUCCESS, {
                    status: 200,
                    msg: 'publish success',
                });
            }
       }catch(e){
        console.log(e);
       }

    }

    // admin查询所以博客列表
    async adminList(params) {
        //{ offset: '0', limit: '5', order: 'DESC' }
        // console.log(params)
        const blogList = await this.app.mysql.query("select SQL_CALC_FOUND_ROWS blogs.id,blogs.user_id, blogs.title,blogs.tags,  blogs.commentSize, blogs.summary ,blogs.created_at, catalogs.name  " + 
        " from blogs join catalogs on blogs.catalog_id = catalogs.id " + 
       ` order by blogs.created_at ${params.order} limit  ${parseInt(params['limit'])} offset ${parseInt(params['offset'])}` );
    //    console.log(blogList)
       
       // 总记录数
       const count = await this.app.mysql.query(" select found_rows() as count");
       console.log(count);
        return Object.assign(SUCCESS, {
            data: {
                count: count[0].count,
                rows: blogList,
            },
            status: 200
        });
    }

    /**
     * 删除某一个博客
     *  用户id
     *  博客id
     * */
    async deleteById(user_id, id ) {
        // console.log(user_id, id);
        
        //查询博客
        const blog = await this.app.mysql.get("blogs", {
            id: id
        });
   
        if(blog.user_id != user_id) {
            return Object.assign(ERROR, {
                msg: "don`t belong to you, don`t delect this is blog."
            })
        }

        
        const result = await this.app.mysql.delete("blogs", {
            id: id
        });

        if( result.affectedRows === 1) {
            return Object.assign(SUCCESS, {
                msg: "delete success~"
            })
        }else {
            return Object.assign(ERROR, {
                msg: "delete failure!"
            })
        }
    }

    /**
     * 根据博客id查找 
     * */
    async find(id ) {
        // console.log(id)
        // 查询博客信息
        const blog = await this.app.mysql.get("blogs", {
            id: id
        });


        // 查找评论信息
        /**
         * select comments.id, comments.content, users.username 
         *      from comments 
         *      join users 
         *          on comments.user_id = users.id
         *          where blog_id="16" 
         **/
        // console.log(blog);
        
        const comments = await this.app.mysql.query(`select comments.id, comments.content, comments.created_at, users.username \
            from comments \
                join users \
            on comments.user_id = users.id \
            where blog_id=${id} `)
        console.log(comments)
        
        if(blog) {
            return Object.assign(SUCCESS, {
                data: {
                    blog,
                    comments
                },
                msg: 'success'
            }); 
        }
    }

    /**
     * 根据博客id查找 
     * */
    async findById(id) {
        const blog = await this.app.mysql.get("blogs", {
            id: id
        });

        return Object.assign(SUCCESS, {
            data: {
                blog
            },
            msg: 'success'
        }); 
    }


    




}


module.exports =  BlogService;
 

