import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSessionThunk } from '../Store/authSlice';

const SessionManager = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchSessionThunk());
  }, [dispatch]);

  return null;
};

export default SessionManager;
