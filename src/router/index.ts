import {
    createBrowserRouter
} from 'react-router';

import Home from '../pages/Home';

export default createBrowserRouter([
    {
        path: '/',
        Component: Home,
    }
])
