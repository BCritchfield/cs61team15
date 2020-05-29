import { setDoctorsAction, setPatientsAction } from '../actions';

const initialState = {
  doctors: [],
  patients: [],
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case setDoctorsAction:
      return { doctors: action.payload, patients: state.patients };
    case setPatientsAction:
      return { doctors: state.doctors, patients: action.payload };
    default:
      return state;
  }
};

export default PeopleReducer;
