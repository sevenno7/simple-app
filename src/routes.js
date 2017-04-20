import { getAsyncInjectors } from './utils/asyncInjectors';
import asyncComponent from './utils/asyncComponent';

import { HOME_PAGE, ABOUT_PAGE } from './constants';

export default function createRoutes(store) {
    return [
        {
            path: HOME_PAGE,
            exact: true,
            component: asyncComponent(() => import('./Views/Home/Home/HomeContainer').then(module => module.default))
        },
        {
            path: ABOUT_PAGE,
            exact: true,
            component: asyncComponent(() => import('./Views/About/About/AboutContainer').then(module => module.default))
        },
        {
            path: '/*',
            exact: true,
            shouldRedirectTo: '/404'
        }
    ];
}