import React, { useState } from "react";
import useSelected from "../../../../Component/Hooks/useSelected";

const UserAppoinment = () => {
  const [appointmentData] = useSelected();
  

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        My Appointments : {appointmentData.length}
      </h2>
      <div>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                NAME
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                DATE
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                TIME
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                TREATMENT
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Sites
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                PAYMENT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {appointmentData.map((appointment) => (
              <tr key={appointment._id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {appointment.name}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {appointment.date}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {appointment.time}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {appointment.serviceName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {appointment.quantity}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      <button className="secondary-btn">Pay</button>
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

export default UserAppoinment;
