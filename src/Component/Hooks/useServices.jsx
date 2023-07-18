import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useServices = () => {
    const {refetch, data: services = [], isLoading:loading} = useQuery({
        queryKey: ["services"],
        queryFn:async()=>{
          const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/services`);
          return res.json(
          );
        }
      })
      return [services,loading,refetch]
};

export default useServices;