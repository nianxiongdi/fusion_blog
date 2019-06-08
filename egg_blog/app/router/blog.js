
'use strict'

module.exports = app => {

    app.get('/api/blog', 'blog.adminList');
    app.post('/api/blog', 'blog.create');
    app.del('/api/users/:user_id/blog/:id', 'blog.deleteById');
    app.get('/api/blog/:id', 'blog.find'); // 根据id查找博客
    app.get('/api/blog/edit/:id', 'blog.findById'); // 编辑博客

}
