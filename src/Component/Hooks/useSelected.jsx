import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './UseAuth';

const useSelected = () => {
  // const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    const {refetch, data: appointmentData = []} = useQuery({
        queryKey: ["appointmentsData", user?.email],
        enabled:!loading,
        queryFn:async()=>{
          const res = await axiosSecure(`/selected?email=${user?.email}`);
          // console.log('res from axios', res);
          return res.data;
        }
      })
      return [appointmentData,refetch]
};

export default useSelected;
