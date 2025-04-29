import config from '../config';

import Home from '../pages/Home';
import Demo from '../pages/Demo';
import SupportUs from '../pages/SupportUs/SupportUs';

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
        path: config.routes.supportus,
        component: SupportUs,
    }
];

export { publicRoutes }