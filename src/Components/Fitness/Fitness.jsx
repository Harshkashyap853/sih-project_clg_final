import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
const AgeForm = () => {
  const [age, setAge] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const navigate = useNavigate();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ageGroup === "Mental Health Yoga") {
      navigate("/mentalyoga");
    }
    else if (ageGroup === "Fitness Yoga") {
      navigate("/fitnessyoga");
    } else {
      alert("Please select an age group.");
    }
  };

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center mt-20 h-[400px] w-[1200px] justify-centre ml-[250px] ">
      <h1 className="text-3xl font-bold mb-6">Age Group Form</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div> */}
        <div className="mb-6">
          <h3 className="text-gray-700 text-sm font-bold mb-2">Select Age Group:</h3>
          <div className="space-y-2">
            
            <label className="block">
              <input
                type="radio"
                value="Mental Health Yoga"
                checked={ageGroup === "Mental Health Yoga"}
                onChange={handleAgeGroupChange}
                className="mr-2"
              />
              Mental Health Yoga
            </label>
            <label className="block">
              <input
                type="radio"
                value="Fitness Yoga"
                checked={ageGroup === "Fitness Yoga"}
                onChange={handleAgeGroupChange}
                className="mr-2"
              />
              Fitness Yoga
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
    </>
    
  );
};

export default AgeForm;
