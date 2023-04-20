import Router from 'koa-router'
import getHealth from './health/health'
import user from './users/users'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/users/:name', user.getUsersName) //Obtiene todos los users que contengan ese nombre
router.post('/api/users', user.searchUser) //Añade productos mediante el formato utilizado

export default router
