import React from 'react';
import '../styles/Doctors.scss';


const Doctors = (props) => {
  const doctors = ['J. Anderson', 'E. Demers', 'B. Davis', 'A. Rockefeller'];
  return (
    <div className="doctors">
      {doctors.map((doctor) => <div className="doctor">{doctor}</div>)}
    </div>
  );
};

export default Doctors;
