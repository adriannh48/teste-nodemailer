import express from 'express';
import IndexController from '../controllers/IndexController'

class IndexRouter{

    constructor(express: express.Application){
        this.routes(express);
    }

    private routes(express: express.Application){

        express
        .route('/api/send-email')
        .post(
            IndexController.test
        );
    }

} export default IndexRouter;