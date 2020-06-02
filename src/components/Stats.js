import React from 'react';
import '../styles/Doctors.scss';


const Stats = (props) => {
  const { data } = props;
  if (!data || !data.people || !data.people.patients || !data.people.doctors) {
    return <div />;
  }
  const waitingPatients = data.people.patients.filter((patient) => patient.WardID === null).length;
  const totalPatients = data.people.patients.length;
  const covidPatients = data.people.patients.filter((patient) => patient.COVIDPositive === 1).length;
  const totalDoctors = data.people.doctors.length;
  const covidDoctors = data.people.doctors.filter((patient) => patient.COVIDPositive === 1).length;
  return (
    <div className="stats">
      <div>
        <p>Total Patients: {totalPatients}</p>
        <p>Waiting Patients: {waitingPatients}</p>
        <p>COVID-Positive Patients: {covidPatients}</p>
      </div>
      <div>
        <p>Total Doctors: {totalDoctors}</p>
        <p>COVID-Positive Doctors: {covidDoctors}</p>
      </div>
    </div>
  );
};

export default Stats;
