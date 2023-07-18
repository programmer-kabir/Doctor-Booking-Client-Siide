import React, { useState } from "react";
import useSelected from "../../../../Component/Hooks/useSelected";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Component/Hooks/UseAuth";
import useServices from "../../../../Component/Hooks/useServices";
import { useParams } from "react-router-dom";

const UserAppoinment = () => {
  const [appointmentData] = useSelected();
  const [services] = useServices()
  const { user } = useAuth();
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 9999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "400px",
      width: "90%",
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const selectedAppointment = appointmentData.find(appointment => appointment._id !== appointment.serviceId);
    let selectedServiceId = null;
    if (selectedAppointment) {
      selectedServiceId = selectedAppointment.serviceId;
    }
    data.serviceId = selectedServiceId

    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/payment`,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      window.location.replace(data.url)
      console.log(data);
    })
  };

 
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
                      <button onClick={openModal} className="secondary-btn">
                        Pay
                      </button>
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                      >
                        <div className="flex justify-between mb-4">
                          <h2 className="text-xl font-bold">.name</h2>
                          <button
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-800"
                          >
                            <div className="bg-[#3A4256] p-1 rounded-full">
                              <FaTimes className="w-5 h-5" />
                            </div>
                          </button>
                        </div>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          noValidate=""
                          action=""
                          className="space-y-6 ng-untouched ng-pristine ng-valid"
                        >
                          <div className="space-y-4 grid grid-cols-2 items-center gap-5">
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={user?.displayName || ""}
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                              {errors.name && (
                                <span className="text-red-600 font-medium">
                                  This Name is required
                                </span>
                              )}
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm">
                                Email address
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                value={appointment?.email || ""}
                                {...register("email", { required: true })}
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                              {errors.email && (
                                <span className="text-red-600 font-medium">
                                  This Email is required
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor="code"
                                className="block mb-2 text-sm"
                              >
                                Post Code
                              </label>
                              <input
                                type="number"
                                name="code"
                                id="code"
                                {...register("code", { required: true })}
                                placeholder="Post Code"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                              {errors.code && (
                                <span className="text-red-600 font-medium">
                                  Post Code is required
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor="address"
                                className="block mb-2 text-sm"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                {...register("address", { required: true })}
                                placeholder="Your Address Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                              {errors.code && (
                                <span className="text-red-600 font-medium">
                                  Address is required
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor="code"
                                className="block mb-2 text-sm"
                              >
                                Phone Number
                              </label>
                              <input
                                type="number"
                                name="number"
                                id="number"
                                value={appointment?.phone || ""}
                                {...register("number", { required: true })}
                                placeholder="Your Phone Number"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                              {errors.number && (
                                <span className="text-red-600 font-medium">
                                  Phone Number is required
                                </span>
                              )}
                            </div>
                            <div>
                              <div className="inline-block relative">
                                <label
                                  htmlFor="code"
                                  className="block mb-2 text-sm"
                                >
                                  Currency
                                </label>
                                <select
                                  {...register("currency", { required: true })}
                                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                >
                                  <option>BDT</option>
                                  <option>USD</option>
                                  <option>RMB</option>
                                  <option>EURO</option>
                                </select>
                                {errors.number && (
                                  <span className="text-red-600 font-medium">
                                    Currency is required
                                  </span>
                                )}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit" 
                              className="bg-rose-500 w-full rounded-md py-3 text-white"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </Modal>
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
