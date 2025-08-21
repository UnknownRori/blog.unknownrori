import {
    createBrowserRouter
} from 'react-router';

import Home from '../pages/Home';
import Series from '@/pages/Series';
import DetailPost from '@/pages/DetailPost';
import NotFound from '@/pages/NotFound';

import BaseLayout from '@/layouts/BaseLayout';

import Login from '@/pages/Auth/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import DashboardLayout from '@/layouts/DashboardLayout';
import AuthLayout from '@/layouts/AuthLayout';

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
    },

    {
        path: '/_admin/',
        Component: AuthLayout,

        children: [
            { path: '__login', Component: Login },
        ]
    },

    {
        path: '/_admin/',
        Component: DashboardLayout,

        children: [
            { index: true, Component: Dashboard },
        ]
    }
])
