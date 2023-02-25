import { createBrowserRouter } from 'react-router-dom';
import withGuestRoute from './hooks/withGuestRoute';
import withPrivateRoute from './hooks/withPrivateRoute';
import AccountPage from './pages/Account';
import PeoplePage from './pages/People';
import AuthorizationPage from './pages/Authorization';

const PrivatePeoplePage = withPrivateRoute(PeoplePage);
const PrivateAccountPage = withPrivateRoute(AccountPage);
const GuestAuthorizationPage = withGuestRoute(AuthorizationPage);

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <GuestAuthorizationPage />,
  },
  {
    path: '/people',
    element: <PrivatePeoplePage />,
  },
  {
    path: '/account',
    element: <PrivateAccountPage />,
  }
]);