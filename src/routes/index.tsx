import { createBrowserRouter, redirect } from 'react-router-dom'
import { Home, Login } from '@/pages'
import { auth } from '@/firebase'

const checkAuth = async (u: boolean) => {
  const user = await new Promise((resolve) => {
    auth.onAuthStateChanged((user) => resolve(user))
  })
  if (u) {
    return user ? null : redirect('/')
  }
  return user ? redirect('/home') : null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    loader: () => checkAuth(false),
  },
  {
    path: '/home',
    element: <Home />,
    loader: () => checkAuth(true),
  },
])

export default router