import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/Doctors.scss';
import { assignPatientAction } from '../actions';


class PatientModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSection: null,
    };
  }

  handleSubmit = () => {
    // find ward with newSection name
    const section = this.props.wards.find((ward) => ward.WardName === this.state.newSection);
    // check that this has worked/exists
    if (section) {
      this.props.assignPatientAction(this.props.patient.PersonID, section.WardID);
      this.props.onRequestClose();
    }
  }

  handleChange = (e) => {
    this.setState({ newSection: e.value });
  }

  render() {
    let options = this.props.wards.map((ward) => { return ward.WardName; });
    if (this.props.patient && this.props.patient.COVIDPositive) {
      options = this.props.wards.filter((ward) => { return ward.COVIDExposed; }).map((ward) => { return ward.WardName; });
    }
    const wardAssignment = !this.props.patient ? null : this.props.wards.find((ward) => { return ward.WardID === this.props.patient.WardID; });
    return (!this.props.patient ? <div />
      : (
        <ReactModal
          isOpen={this.props.open}
          shouldCloseOnOverlayClick
          ariaHideApp={false}
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
              <p style={this.props.patient.COVIDPositive ? { color: 'pink' } : {}}>{this.props.patient.FirstName} {this.props.patient.LastName}</p>
              <button type="submit" onClick={this.props.onRequestClose}>x</button>
            </div>

            <p>Section Assignment: {!wardAssignment ? 'none' : wardAssignment.WardName}</p>
            <p>COVID Status: {this.props.patient.COVIDPositive ? 'Positive' : 'Negative'}</p>
          </div>
          <div className="doctor-actions">
            <div
              role="button"
              tabIndex="0"
              className="change-section"
              onClick={this.handleSubmit}
            >
              <p>{wardAssignment ? 'Move Patient to New Ward' : 'Check In Patient to New Ward'} </p>

            </div>
            {!wardAssignment ? <div />
              : (
                <div
                  role="button"
                  tabIndex="0"
                  onClick={() => { this.props.onDelete(this.props.patient.personID); this.props.onRequestClose(); }}
                  className="doctor-delete"
                >
                  <p>Check Out </p>
                </div>
              )}
          </div>
          <p style={{
            color: 'red', padding: '0px', margin: '0px', marginTop: '-5px', fontSize: '10px',
          }}
          >{this.props.patient.COVIDPositive ? 'Patient is COVID Postive and may only be checked in to COVID Positive Units' : ''}
          </p>
          <Dropdown value={this.state.newSection} onChange={this.handleChange} style={{ margin: '20px' }} options={options} placeholder="Select new section" />

        </ReactModal>
      )
    );
  }
}

const mapStateToProps = (state) => (
  {
    people: state.people,
    wards: state.wards.ward,
  }
);


export default withRouter(connect(mapStateToProps, { assignPatientAction })(PatientModal));
