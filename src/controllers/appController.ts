import {Router, Request, Response, NextFunction} from 'express'
import {HttpNotFoundError} from '../exceptions/httpException'

let router: Router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    next(new HttpNotFoundError('数据不存在'))
})

export default router
