import appController from './controllers/appController'
import {Router} from 'express'

let routers: Array<Router> = [appController];

export default routers
