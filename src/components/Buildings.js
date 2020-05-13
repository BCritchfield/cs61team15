import React from 'react';
import '../styles/Buildings.scss';


const Sidebar = (props) => {
  const hospitals = ['Smith Ward', 'Inpatient Building 3', 'ICU Ward #1', 'CNT Building', 'COVID Temporary Ward'];
  return (
    <div className="buildings">
      {hospitals.map((hospital) => <div className="building">{hospital}</div>)}
    </div>
  );
};

export default Sidebar;
