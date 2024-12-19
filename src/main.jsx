import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Calender from './pages/Calender.jsx';
import Search from './pages/Search.jsx';
import Suggestions from './pages/Suggestions.jsx';
import About from './pages/About.jsx';

// subjects

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },

      {
        path: '/Calender',
        element: <Calender />,
      },

      {
        path: '/Search',
        element: <Search />,
      },

      {
        path: '/Suggestions',
        element: <Suggestions />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);