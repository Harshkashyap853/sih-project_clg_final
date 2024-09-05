import React from 'react';
import Header from '../Header';
import falt from "../../Assets/dietimage (1).jpg";
import corr from "../../Assets/exerciseimage.jpg";

const Adult = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10 bg-white w-[1200px] ml-[245px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] max-w-5xl bg-white">
        {/* Exercise Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={corr} // Replace with your image URL
            alt="Exercises"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Exercises</h3>
            <p className="text-gray-600">Stay fit with effective exercises!</p>
            <a
              href="/adultexercise" // Link to your exercises page
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Diet Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={falt} // Replace with your image URL
            alt="Diet"
            className="w-full h-[200px] w-[200px]"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Diet</h3>
            <p className="text-gray-600">Healthy eating is the key to staying energized.</p>
            <a
              href="/adultdiet" // Link to your diet page
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Adult;
