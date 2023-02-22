import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthorizationPage from './pages/Authorization';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
