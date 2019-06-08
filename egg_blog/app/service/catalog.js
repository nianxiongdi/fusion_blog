'use strict';

const {
    ERROR,
    SUCCESS,
} = require('../util/util')

const Service = require('egg').Service;
const md5 = require('js-md5');

class CatalogService extends Service {

    async list() {
        const catalogsList = await this.app.mysql.select('catalogs');
        const count = await this.app.mysql.query(" select found_rows() as count");

        return Object.assign(SUCCESS, {
            data: {
                count: count[0].count,
                rows:catalogsList,
            },
            status: 200,
        });
    }

}

module.exports =  CatalogService;
 