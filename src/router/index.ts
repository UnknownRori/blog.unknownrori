import {
    createBrowserRouter
} from 'react-router';

import Home from '../pages/Home';
import BaseLayout from '@/layouts/BaseLayout';

export default createBrowserRouter([
    {
        path: '/',
        Component: BaseLayout,
        children: [
            { index: true, Component: Home },
        ]
    }
])
