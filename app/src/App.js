import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import UserService from './services/user';

import './App.css';

function App() {
  const loadProfile = async () => {
    await UserService.getProfile();
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default App;
