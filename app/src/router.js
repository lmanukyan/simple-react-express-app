import { createBrowserRouter } from 'react-router-dom';
import withGuestRoute from './hooks/withGuestRoute';
import withPrivateRoute from './hooks/withPrivateRoute';
import AccountPage from './pages/Account';
import AuthorizationPage from './pages/Authorization';

const PrivateAccountPage = withPrivateRoute(AccountPage);
const GuestAuthorizationPage = withGuestRoute(AuthorizationPage);

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <GuestAuthorizationPage />,
  },
  {
    path: '/account',
    element: <PrivateAccountPage />,
  }
]);