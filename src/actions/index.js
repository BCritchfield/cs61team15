import {
  getDoctor, getPatient, getWard, getBed, getAllDoctors, getAllPatients, getAllWards,
} from '../services';

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

export const getPatientAction = (personId) => {
  return (dispatch) => {
    return getPatient(personId).then((patient) => {
      dispatch(setPatientAction(patient));
    });
  };
};

export const getWardAction = (wardId) => {
  return (dispatch) => {
    return getWard(wardId).then((ward) => {
      dispatch(setWardAction(ward));
    });
  };
};

export const getBedAction = (bedId) => {
  return (dispatch) => {
    return getBed(bedId).then((bed) => {
      dispatch(setBedAction(bed));
    });
  };
};

export const getDoctorsAction = () => {
  return (dispatch) => {
    return getAllDoctors.then((doctors) => {
      dispatch(setDoctorsAction(doctors));
    });
  };
};

export const getPatientsAction = () => {
  return (dispatch) => {
    return getAllPatients.then((patients) => {
      dispatch(setPatientsAction(patients));
    });
  };
};

export const getWardsAction = () => {
  return (dispatch) => {
    return getAllWards.then((wards) => {
      dispatch(setWardsAction(wards));
    });
  };
};
