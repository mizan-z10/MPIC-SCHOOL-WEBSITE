import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import VerifyCertificate from "./verify_certificate";

const InputVerify = () => {

  const [rollNo, setRollNo] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit Function
  const onSubmit = (formData) => {

    console.log(formData);

    setRollNo(formData.roll_number);

    reset();
  };

  return (

    <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4 gap-6 h-200vh">

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 text-white p-6 text-center">

          <h1 className="text-3xl font-bold">
            Student Result Verification
          </h1>

          <p className="text-blue-100 mt-2">
            Enter Roll Number to Verify Result
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6"
        >

          <div className="flex flex-col sm:flex-row gap-4">

            {/* Input */}
            <div className="relative flex-1">

              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
                size={18}
              />

              <input
                type="number"
                placeholder="Enter Roll Number"
                className="w-full border-2 border-blue-200 focus:border-blue-500 rounded-2xl py-3 pl-12 pr-4 outline-none text-lg"

                {...register("roll_number", {
                  required: "Roll Number is required",
                })}
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
            >

              <FaSearch />

              Search

            </button>

          </div>

          {/* Error */}
          {errors.roll_number && (

            <p className="text-red-500 mt-3 font-medium">

              {errors.roll_number.message}

            </p>

          )}

        </form>

      </div>

      {/* Verify Certificate Component */}
      {rollNo?.length > 0 && (

        <div className="w-full">

          <VerifyCertificate rollNo={rollNo} />

        </div>

      )}

    </div>

  );
};

export default InputVerify;