import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Detail from './components/Detail.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CreateBlog from './components/CreateBlog.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import { AuthProvider } from './components/auth/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "categoryPage",
        element: <CategoryPage />,
      },
      {
        path: "createBlog",
        element: <CreateBlog />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/login",
        element: <Login />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>

);
