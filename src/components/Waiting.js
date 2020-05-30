import React from 'react';
import '../styles/Doctors.scss';


const Waiting = (props) => {
  console.log('waiting patients');
  console.log(props.patients);
  return (
    <div className="waiting">
      {props.patients.map((patient) => {
        return (
          <p className="doctor" style={{ color: 'black' }}>{patient.FirstName} {patient.LastName}</p>
        );
      })}
    </div>
  );
};

export default Waiting;
