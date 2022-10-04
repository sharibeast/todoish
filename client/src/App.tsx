import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from './components/SideBar';
import Completed from './pages/Completed';
import Today from './pages/Today';




function App() {

  return (
    <div className="bg-[#1F1F1F] text-white " >
      <div className='flex h-screen'>
        <SideBar />
        <div className='flex-1  max-w-3xl mx-auto'>
          <Routes>
            <Route path='/today' element={<Today />} />
            <Route path='/completed' element={<Completed />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}




export default App;
