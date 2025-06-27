import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms'; // путь зависит от структуры проекта
import RoomDetailsPage from './pages/RoomDetailsPage';



const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetailsPage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
