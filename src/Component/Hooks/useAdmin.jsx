import React from "react";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`users/admin/${user?.email}`);
      // console.log(response.data.admin);
      localStorage.setItem('admin', JSON.stringify(user?.email));
      return response.data.admin
    },
  });
  return [isAdmin, isAdminLoading]
};

export default useAdmin;
