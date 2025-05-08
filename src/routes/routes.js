import config from '../config';

import Home from '../pages/Home';
import Demo from '../pages/Demo';
import Prerelease from '../pages/Prerelease';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.demo,
        component: Demo,
    },
    {
        path: config.routes.prerelease,
        component: Prerelease,
    },
];

export { publicRoutes };
