import { Application } from 'express';
import UsersNetwork from './user'
import Routes from '../utils/constants/routes.json';

function routes(server: Application){
    server.use(Routes.users, UsersNetwork)

}

export default routes;