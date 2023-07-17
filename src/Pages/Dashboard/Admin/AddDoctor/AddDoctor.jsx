import React from "react";
import { useForm } from "react-hook-form";
import img from "../../../../assets/Doctor/gallery 1.png";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const categories = [
    {
      label: `Teeth Orthodontics`,
    },
    {
      label: `Cosmetic Dentistry`,
    },
    {
      label: `Teeth Cleaning`,
    },
    {
      label: `Cavity Protection`,
    },
    {
      label: `Pediatric Dental`,
    },
    {
      label: `Oral Surgery`,
    },
  ];
  return (
    <div>
      <div className="px-16 min-h-screen">
        <div className="flex flex-col max-w-md rounded-md sm:p-10 p-0 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold">Add a New Doctor</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-4 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="Name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
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
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
              {/* <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  {...register("image")}
                />
              </div> */}
              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <h5 className="mb-2">Upload Your Photo</h5>
                      <img className="mx-auto mb-2" src={img} alt="" />

                      <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full px-2 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#3A4256] w-full rounded-md py-3 text-white"
              >
                Continue
                {/* {loading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
