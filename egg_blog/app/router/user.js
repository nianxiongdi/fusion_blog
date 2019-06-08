
'use strict'

module.exports = app => {
    app.post('/api/users', 'user.create');
    app.post('/api/users/login', 'user.login');

} 









