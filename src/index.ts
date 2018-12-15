import {AppServer} from './server'
import routers from './routers'
import bodyParser from 'body-parser'
import {Request, Response, NextFunction} from 'express'

let appServer = new AppServer((socket) => {
    console.log(socket)
});
let app = appServer.getApp();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routers);
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    const statusCode = error.statusCode || 500
    return res.status(statusCode).json({status: -1, message: error.message})
})
export {app}
