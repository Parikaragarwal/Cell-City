import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMobiles } from '../../Appwrite/service'; // Adjust path if needed
import MobileProductCard from './MobileProductCard';
import Loader from '../Loader'; // Adjust path if needed

const MobileList = () => {
  // useQuery handles fetching, caching, loading states, and errors for you.
  const { data: mobiles, isLoading, isError, error } = useQuery({
    queryKey: ['mobiles'], // A unique key to identify this data
    queryFn: getMobiles    // The function that will fetch the data
  });

  // 1. Handle the loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader text="Fetching Mobiles..." />
      </div>
    );
  }

  // 2. Handle the error state
  if (isError) {
    return (
      <div className="text-center text-red-400 p-8 bg-red-900/20 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Error Fetching Data</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // 3. Display the data
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {mobiles.map((mobile) => (
        <MobileProductCard key={mobile.id} product={mobile} />
      ))}
    </div>
  );
};

export default MobileList;