import React from 'react';
import '../styles/Doctors.scss';


const Stats = (props) => {
  return (
    <div className="stats">
      <div>
        <p>Total Capacity: 1500</p>
        <p>Totals Beds Filled: 1430</p>
        <p>Available Beds: 70</p>
      </div>
      <div>
        <p>Avg Doctor/Patient Ratio: 3.6</p>
        <p>Total COVID Patients: 450</p>
      </div>
    </div>
  );
};

export default Stats;
