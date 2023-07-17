import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Component/Hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const adminUser = JSON.parse(localStorage.getItem('admin'));
  // console.log(adminUser);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users');
    // console.log(res.data);
    return res.data;

  });
  const handleMakeAdmin =user =>{
    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/users/admin/${user?._id}`,{
      method:'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.modifiedCount){
        refetch()
        // toast.success(`${user.name} is an admin now`)
      }
    })
  }
  return <div>
    <h2>All Users : {users.length}</h2>
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Job
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={user.photo}
                      alt="image"
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{user.name}</div>
                    <div className="text-gray-400">{user.email}</div>
                  </div>
                </th>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button onClick={()=>handleMakeAdmin(user)} disabled={adminUser  === user?.email } className=" secondary-btn">
                     {
                      user.role ==='admin' ? 'admin':<>Make Admin</>
                     }
                    </button>
                    
                  </div>
                </td>

                <td className="px-6 py-4">
               <button className="secondary-btn">
               Remove User
               </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>;
};

export default AllUser;
