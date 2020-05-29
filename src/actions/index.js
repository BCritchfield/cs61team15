import { getDoctor } from '../services';

export const setDoctorAction = (payload) => ({
  type: 'SetDoctorAction',
  payload,
});

export const setPatientAction = (payload) => ({
  type: 'SetPatientAction',
  payload,
});

export const setWardAction = (payload) => ({
  type: 'SetWardAction',
  payload,
});

export const setBedAction = (payload) => ({
  type: 'SetBedAction',
  payload,
});

export const setDoctorsAction = (payload) => ({
  type: 'SetDoctorsAction',
  payload,
});

export const setPatientsAction = (payload) => ({
  type: 'SetDoctorsAction',
  payload,
});

export const setWardsAction = (payload) => ({
  type: 'SetWardsAction',
  payload,
});

export const getDoctorAction = (personId) => {
  return (dispatch) => {
    return getDoctor(personId).then((doctor) => {
      dispatch(setDoctorAction(doctor));
    });
  };
};
