import React from 'react';
import ReactModal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/Doctors.scss';


const DoctorModal = (props) => {
  if (!props.doctor) {
    return <div />;
  }
  return (
    <ReactModal
      isOpen={props.open}
      shouldCloseOnOverlayClick
      style={
        {
          content: {
            position: 'fixed',
            left: 'calc(50vw - 200px)',
            height: '280px',
            overflow: 'display',
            width: '400px',
            padding: '10px',
            paddingTop: '20px',
            borderRadius: '10px',
            border: '1px solid lightgrey',


            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

            flexDirection: 'column',
          },
        }
      }
    >
      <div className="doctor-info">
        <div style={{ display: 'flex', lineHeight: '0', justifyContent: 'space-between' }}>
          <p>{props.doctor.FirstName} {props.doctor.LastName}</p>
          <button type="submit" onClick={props.onRequestClose}>x</button>
        </div>

        <p>Section Assignment: Smith Ward</p>
        <p>COVID Status: {props.doctor.COVIDPositive === 0 ? 'Negative' : 'Postive'}</p>
      </div>
      <div className="doctor-actions">
        <div className="change-section">
          <p>Change Section Assignment</p>

        </div>
        <div className="doctor-delete">
          <p>Delete</p>
        </div>
      </div>
      <Dropdown style={{ margin: '20px' }} options={['option 1', 'option 2', 'option3']} placeholder="Select new section" />

    </ReactModal>
  );
};

export default DoctorModal;
