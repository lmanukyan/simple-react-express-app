import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthCheck = (Component) => {
  return (props) => {
    const user = useSelector((state) => state.user)

    if (! user.data.id) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />
  };
};

export default withAuthCheck;
