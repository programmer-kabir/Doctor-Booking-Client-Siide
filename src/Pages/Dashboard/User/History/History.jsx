import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Component/Hooks/useAxiosSecure";
import useAuth from "../../../../Component/Hooks/UseAuth";
const History = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [], refetch } = useQuery(["payments"], async () => {
    const res = await axiosSecure(`/payment?email=${user?.email}`);
    console.log(res.data);
    return res.data;
  });
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        My Payments History : {payments.length}
      </h2>
      <div>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                #
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              TrxID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {payments.map((payment, index) => (
              <tr key={payment._id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                    {index +1}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {payment._id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {payment.transitionID}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {payment.serviceName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {payment.service.time}
                    </div>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
