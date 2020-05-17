import React from 'react';
import '../styles/Doctors.scss';


const Doctors = (props) => {
  const doctors = ['J. Anderson', 'E. Demers', 'B. Davis', 'A. Rockefeller'];
  return (
    <div className="doctors">
      <div className="doctors-header"><div>Name</div><div>Specialty Codes</div></div>
      {doctors.map((doctor) => <div className="doctor"><div>{doctor}</div><div>4, 2, 10</div></div>)}
    </div>
  );
};

export default Doctors;
