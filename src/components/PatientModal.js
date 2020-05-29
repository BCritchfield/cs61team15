import React from 'react';

import ReactModal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/Doctors.scss';


const PatientModal = (props) => {
  return (!props.patient ? <div />
    : (
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
            <p>{props.patient.FirstName} {props.patient.LastName}</p>
            <button type="submit" onClick={props.onRequestClose}>x</button>
          </div>

          <p>Section Assignment: Smith Ward</p>
          <p>COVID Status: Negative</p>
        </div>
        <div className="doctor-actions">
          <div className="change-section">
            <p>Move Patient to New Ward</p>

          </div>
          <div
            role="button"
            tabIndex="0"
            onClick={() => { props.onDelete(props.patient.personID); props.onRequestClose(); }}
            className="doctor-delete"
          >
            <p>Check Out </p>
          </div>
        </div>
        <Dropdown style={{ margin: '20px' }} options={['option 1', 'option 2', 'option3']} placeholder="Select new section" />

      </ReactModal>
    )
  );
};

export default PatientModal;
