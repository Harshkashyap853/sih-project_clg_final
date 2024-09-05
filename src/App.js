import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./Components/Homepage";
import Bodybuilding from './Components/Bodybuiding/Bodybuilding';
import Education from './Components/Education';
import BlogDetail from './Components/education/[id]/Blog';
import BMICALCULATE from './Components/Calculator';
import Teenage from './Components/adult/Adult';
import Teenexercises from './Components/teenage/Teenexercise';
import Teendiet from './Components/teenage/Teendiet';
import Fitness from './Components/Fitness/Fitness';
import Adult from './Components/adult/Adult';
import Adultexercises from './Components/adult/Adultexercise';
import Adultdiet from './Components/adult/Adultdiet';
import Older from './Components/older/Older';
import Olderexercise from './Components/older/Olderexercise';
import Olderdiet from './Components/older/Olderdiet';
import Mentalyoga from './Components/Fitness/Mentalyoga';
import Physicalyoga from './Components/Fitness/Physicalyoga';
import Diet from './Components/Diet';
import DietDetail from './Components/diet/[id]/Diett';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bodybuilding" element={<Bodybuilding />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path='/Education' element={<Education />} />
          <Route path="/education/:id" element={<BlogDetail />} />
          <Route path="/calculator" element={<BMICALCULATE />} />
          {/* bodybuilding */}
          <Route path="/teenager" element={<Teenage />} />
          <Route path="/teenexercise" element={<Teenexercises />} />
          <Route path="/teendiet" element={<Teendiet />} />
          <Route path="/adult" element={<Adult />} />
          <Route path="/adultexercise" element={<Adultexercises />} />
          <Route path="/adultdiet" element={<Adultdiet />} />
          <Route path="/older" element={<Older />} />
          <Route path="/olderexercise" element={<Olderexercise />} />
          <Route path="/olderdiet" element={<Olderdiet/>}/>
          {/* fitness */}
          <Route path="/mentalyoga" element={<Mentalyoga/>}/>
          <Route path="/fitnessyoga" element={<Physicalyoga/>}/>

          
          <Route path="/Diet" element={<Diet />}/>
          <Route path="/diet/:id" element={<DietDetail />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
