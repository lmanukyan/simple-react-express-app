import { createBrowserRouter } from 'react-router-dom';
import withGuestCheck from './helpers/withGuestCheck';
import withAuthCheck from './helpers/withAuthCheck';
import AccountPage from './pages/Account';
import PeoplePage from './pages/People';
import AuthorizationPage from './pages/Authorization';

const PrivatePeoplePage = withAuthCheck(PeoplePage);
const PrivateAccountPage = withAuthCheck(AccountPage);
const GuestAuthorizationPage = withGuestCheck(AuthorizationPage);

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