import {
  getDoctor, getPatient, getWard, getBed, getAllDoctors, getAllPatients, getAllWards, createPatient, deletePatient,
  assignPatientToWard, assignDoctorToWard,
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

// export const setDoctorsAction = (payload) => ({
//   type: 'SetDoctorsAction',
//   payload,
// });

export const setPatientsAction = (payload) => ({
  type: 'SetPatientsAction',
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
    return getAllDoctors().then((doctors) => {
      dispatch({ type: 'SET_DOCTORS', payload: doctors });
    });
  };
};

export const getPatientsAction = () => {
  return (dispatch) => {
    return getAllPatients().then((patients) => {
      dispatch({ type: 'SET_PATIENTS', payload: patients });
    });
  };
};

export const getWardsAction = () => {
  return (dispatch) => {
    return getAllWards().then((wards) => {
      dispatch({ type: 'SET_WARDS', payload: wards });
    });
  };
};

export const createPatientAction = (firstName, lastName, age = null, COVID) => {
  return (dispatch) => {
    return createPatient(firstName, lastName, age, COVID).then(() => {
      dispatch(getPatientsAction());
    });
  };
};

export const deletePatientAction = (personId) => {
  return (dispatch) => {
    return deletePatient(personId).then(() => {
      dispatch(getPatientsAction());
      dispatch(getDoctorsAction());
    });
  };
};

export const assignPatientAction = (personID, wardID) => {
  return (dispatch) => {
    return assignPatientToWard(personID, wardID).then(() => {
      dispatch(getPatientsAction());
    });
  };
};

export const assignDoctorAction = (personID, wardID) => {
  return (dispatch) => {
    return assignDoctorToWard(personID, wardID).then(() => {
      dispatch(getDoctorsAction());
    });
  };
};
