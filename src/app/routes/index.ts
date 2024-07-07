import express from 'express';

import { AuthRoutes } from '../modules/auth/auth.route';
import { QuizRoutes } from '../modules/quiz/quiz.route';
import { UserRoutes } from '../modules/users/user.route';






const router = express.Router();

const moduleRoutes = [

    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/quiz',
        route: QuizRoutes
    },
    {
        path: '/user',
        route: UserRoutes
    },




]
moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;

