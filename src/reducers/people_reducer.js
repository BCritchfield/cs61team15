
const initialState = {
  doctors: [],
  patients: [],
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCTORS':
      return { doctors: action.payload, patients: state.patients };
    case 'SET_PATIENTS':
      return { doctors: state.doctors, patients: action.payload };
    default:
      return state;
  }
};

export default PeopleReducer;
