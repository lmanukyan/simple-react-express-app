import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withGuestRoute = (Component) => {
  return (props) => {
    const user = useSelector((state) => state.user)
    
    if (user.data.id) {
      return <Navigate to="/account" />;
    }

    return <Component {...props} />
  };
};

export default withGuestRoute;
