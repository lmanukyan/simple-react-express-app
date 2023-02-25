import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { setUser } from './store/userSlice';
import { getStoredUser } from './helpers/utils';
import { appRouter } from './router';
import './index.css';

const user = getStoredUser();
if (user.id) {
  store.dispatch(setUser(user))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
