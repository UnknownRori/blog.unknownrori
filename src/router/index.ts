import {
    createBrowserRouter
} from 'react-router';

import Home from '../pages/Home';
import Series from '@/pages/Series';
import DetailPost from '@/pages/DetailPost';
import NotFound from '@/pages/NotFound';
import BaseLayout from '@/layouts/BaseLayout';

export default createBrowserRouter([
    {
        path: '/',
        Component: BaseLayout,

        children: [
            { index: true, Component: Home },
            { path: 'series', Component: Series },
            { path: '/posts/:slug', Component: DetailPost },
            { path: '*', Component: NotFound }
        ]
    }
])
