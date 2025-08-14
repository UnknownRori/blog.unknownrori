import {
    createBrowserRouter
} from 'react-router';

import Home from '../pages/Home';
import Series from '@/pages/Series';
import NotFound from '@/pages/NotFound';
import BaseLayout from '@/layouts/BaseLayout';

export default createBrowserRouter([
    {
        path: '/',
        Component: BaseLayout,
        errorElement: NotFound(),
        children: [
            { index: true, Component: Home },
            { path: 'series', Component: Series },
        ]
    }
])
