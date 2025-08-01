import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from './Loader';

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;  // Show spinner until real backend result comes.
  }

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
