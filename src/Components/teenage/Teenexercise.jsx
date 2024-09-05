import React, { useState } from 'react';
import Header from '../Header';
import { exercises } from "./exercises";
import FitQuestContainer from "../FitQuestContainer";
import Modal from '../Modal';

function Teenexercise() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-12 w-[1200px]">
        <h2 className="text-3xl font-bold mb-12 text-center">Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openModal(
                <div>
                  <img
                    src={exercise.image}
                    alt={`Image for ${exercise.title}`}
                    className="w-full max-w-md mx-auto object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-4 mb-2 text-center">{exercise.title}</h3>
                  <p className="text-gray-700 text-center">{exercise.description}</p>
                  
                </div>
              )}
            >
              <img
                src={exercise.image}
                alt={`Image for ${exercise.title}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
              
            </div>
          ))}
        </div>
      </div>
      <FitQuestContainer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
      />
    </>
  );
}

export default Teenexercise;
