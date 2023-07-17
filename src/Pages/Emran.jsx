import React from "react";

const Emran = () => {
  return (
    <div className="mt-16 border-2 bg-gray-400 rounded-2xl border-black space-y-5 max-w-2xl mx-auto ">
        <div className="p-3 space-y-10">
            <h2 className="font-semibold">Cavity Protection</h2>
            <h5 className="font-medium">April 30, 2020</h5>
            <h5 className="font-medium">10:05 am - 11:30 am</h5>
        </div>
      <div className="p-3 space-y-3">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
        />
      </div>
      <button className="w-full text-white rounded px-3 py-1 transition-colors duration-500 bg-[#3A4256]">submit</button>
      </div>
    </div>
  );
};

export default Emran;
