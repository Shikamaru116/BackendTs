import { Application } from 'express';
import userNetwork from '../network/user'
import Routes from '../utils/constants/routes.json'

function routes(app:Application) {
    app.use(Routes.userV1, userNetwork)
}

export default routes;