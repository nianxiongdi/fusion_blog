'use strict';

const {
    ERROR,
    SUCCESS,
} = require('../util/util')

const Service = require('egg').Service;
const md5 = require('js-md5');

class UserService extends Service {


    async create(user) {
        //{ username: 'root', password: '123456', authority_id: '2' }

        const { ctx } = this;
        try {
            const pattern = /^[0-9a-zA-Z]{3,10}$/i;
            //https://blog.csdn.net/qq_30100043/article/details/80092012
            if (!pattern.test(user.username) || !pattern.test(user.password)) {
                // ctx.status = 400; 这里设置400 前端会抛异常 会执行catch里面的代码
                //这里不需要加  若加 测return的代码 将无法打印出来，因为下面这段代码是在 try里面执行的
                return Object.assign(ERROR, {
                    msg:  `expected an object with username, password but got: ${JSON.stringify(user)}`,
                })
            }
    
            const passwordMd5 = md5(user.username);
            //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            // 替换password
            user = Object.assign(user, {password: passwordMd5})
            
            //查询 username是否存在 若存在返回对象，不存在则返回null
            const userDB = await this.app.mysql.get('users', {
                username: user.username
            })
            
            //若不存在
            if(!userDB) {
                const res = await this.app.mysql.insert('users',{
                    username: user.username,
                    password: user.password,
                    created_at: new Date(),
                    updated_at: new Date(),
                    authority_id: 2 , //2 普通用户 1 管理员
                })
                ctx.status = 201;
                return Object.assign(SUCCESS, {
                    data: res,
                });
            }

            // 若存在
            return Object.assign(ERROR, {
              status: 406,
              msg: 'username already exists',
            });          
        }catch (error) {
            throw (error);
        }
    }


    // api/users/login
    async login(user) {
        const { ctx } = this;
        try {
            const userDB = await ctx.app.mysql.get("users",{
                username: user.username
            })

            if(userDB.username !== user.username) {
                return Object.assign(ERROR, {
                    status: 406,
                    msg: '用户名不存在～',
                });
            }

            // 还可以验证 用户名和密码是否一直  省略

            if(userDB.username === user.username && userDB.password === md5(user.password)) {


                const hash = md5.hex(user.password);
                ctx.cookies.set('token', hash, { // token
                    httpOnly: false,
                    signed: false,
                    maxAge: 3600 * 1000,
                    path: '/',
                  });
                  ctx.cookies.set('user_id', userDB.id, { // 
                    httpOnly: false,
                    signed: false,
                    maxAge: 3600 * 1000,
                    path: '/',
                  });

                return Object.assign(SUCCESS, {
                    data: userDB,
                    status: 200,
                });
            }


         

        } catch(e) {
            throw (e);
        }
    }



}


module.exports =  UserService;
 

