import AuthRouter from './auth.routes.js'
import UserRouter from './user.routes.js'

const _apiRoutes = [
  ['auth', AuthRouter],
  ['test', UserRouter],
]

export const routes = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  _apiRoutes.forEach((route) => {
    const [url, router] = route
    app.use(`/api/${url}`, router)
  })
}
