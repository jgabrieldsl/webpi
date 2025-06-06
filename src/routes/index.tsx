import { createBrowserRouter } from 'react-router-dom'
import { Home, Login } from '@/pages'

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/',
        element: <Login />,
    },
])

export default router