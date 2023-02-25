import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withGuestCheck = (Component) => {
  return (props) => {
    const user = useSelector((state) => state.user)
    
    if (user.data.id) {
      return <Navigate to="/people" />;
    }

    return <Component {...props} />
  };
};

export default withGuestCheck;
