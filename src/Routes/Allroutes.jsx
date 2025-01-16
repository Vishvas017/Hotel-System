import React from 'react';
import PrivateRoute from '../Components/PrivateRoute';
import ReservationForm from '../Components/ReservationForm';
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PrivateRoute" element={ <PrivateRoute/>} />
        <Route path="/ReservationForm" element={<ReservationForm/>} />
        
      </Routes>
    </div>
  );
}

export default Allroutes;
