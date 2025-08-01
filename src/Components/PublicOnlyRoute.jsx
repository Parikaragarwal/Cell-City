import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicOnlyRoute = ({ children }) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return isAdmin ? <Navigate to="/" replace/> : children;
};

export default PublicOnlyRoute;
