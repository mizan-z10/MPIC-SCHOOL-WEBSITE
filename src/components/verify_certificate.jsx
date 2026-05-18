import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { supabase_client } from "./utils/supabase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const VerifyCertificate = ({ rollNo }) => {

  const [student, setStudent] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // Fetch Result Automatically
  useEffect(() => {

    if (rollNo) {
      verifyResult();
    }

  }, [rollNo]);

  // Verify Function
  const verifyResult = async () => {

    try {

      setLoading(true);

      setErrorMessage("");

      setStudent(null);

      const { data, error } = await supabase_client
        .from("results")
        .select("*")
        .eq("roll_number", rollNo);

      console.log("Supabase Data:", data);
      console.log("Supabase Error:", error);

      // Check Error or Empty Data
      if (error || !data || data.length === 0) {

        setErrorMessage("Result Not Found");

      } else {

        // Store First Student Object
        setStudent(data[0]);

      }

    } catch (error) {

      console.log(error);

      setErrorMessage("Something Went Wrong");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="w-full bg-gray-100 p-2 sm:p-4">

      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white p-4 sm:p-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <div>

              <h1 className="text-2xl sm:text-3xl font-bold">
                Student Computer Course Results
              </h1>

              <p className="text-sm sm:text-base text-gray-200 mt-1">
                Verified Student Result Table
              </p>

            </div>

            {/* Verified Badge */}
            <div className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full shadow-md">

              <MdVerified size={24} />

              <span className="font-semibold">
                Verified
              </span>

            </div>

          </div>

        </div>

        {/* Loading */}
        {loading && (

          <div className="p-6 text-center text-blue-600 font-semibold flex gap-5 justify-center items-center">
            <AiOutlineLoading3Quarters
  className="animate-spin"
  size={40}
/>
            Loading Result...
          </div>

        )}

        {/* Error */}
        {errorMessage && (

          <div className="p-6 text-center text-red-500 font-semibold">
            {errorMessage}
          </div>

        )}

        {/* Table */}
        {student && (

          <div className="overflow-x-auto px-2 py-5">

            <table className="w-full min-w-800px border-collapse">

              <thead className="bg-gray-100">

                <tr className="text-gray-700">

                  <th className="border p-3 text-left whitespace-nowrap">
                    Roll No.
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    Student Name
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    Father Name
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    DOB
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    Course
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    Percentage
                  </th>

                  <th className="border p-3 text-left whitespace-nowrap">
                    Grade
                  </th>

                  <th className="border p-3 text-center whitespace-nowrap">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="hover:bg-blue-50 transition duration-200">

                  <td className="border p-3 font-medium">
                    {student.roll_number}
                  </td>

                  <td className="border p-3 font-medium">
                    {student.student_name}
                  </td>

                  <td className="border p-3">
                    {student.father_name}
                  </td>

                  <td className="border p-3">
                    {student.dob}
                  </td>

                  <td className="border p-3">
                    {student.course}
                  </td>

                  <td className="border p-3 font-bold text-blue-600">
                    {student.percentage}%
                  </td>

                  <td className="border p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        student.grade === "A"
                          ? "bg-green-100 text-green-700"
                          : student.grade === "B"
                          ? "bg-blue-100 text-blue-700"
                          : student.grade === "C"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.grade}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="border p-3 text-center">

                    <div className="flex items-center justify-center gap-1 text-green-600 font-semibold">

                      <MdVerified size={20} />

                      Verified

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>

  );
};

export default VerifyCertificate;