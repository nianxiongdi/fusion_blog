'use strict'

const Controller = require('egg').Controller

class CatalogController extends Controller {

    async list() {

        const { ctx } = this;
        ctx.body = await this.service.catalog.list()
    }

}


module.exports = CatalogController;