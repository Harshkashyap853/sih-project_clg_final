import React, { useState } from 'react';
import Header from '../Header';
import { diet } from "./Aexercises";
import FitQuestContainer from "../FitQuestContainer";
import Modal from '../Modal';

function Adultdiet() {
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
        <h2 className="text-3xl font-bold mb-12 text-center">Fitness Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diet.map((diet) => (
            <div
              key={diet.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openModal(
                <div>
                  <img
                    src={diet.image}
                    alt={`Image for ${diet.title}`}
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-4 mb-2 text-center">{diet.title}</h3>
                  <p className="text-gray-700 text-center">{diet.description}</p>
                </div>
              )}
            >
              <img
                src={diet.image}
                alt={`Image for ${diet.title}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{diet.title}</h3>
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

export default Adultdiet;
