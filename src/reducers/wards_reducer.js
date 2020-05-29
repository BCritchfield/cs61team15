
const initialState = {
  wards: [],
};

const WardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WARDS':
      return { ward: action.payload };
    default:
      return state;
  }
};

export default WardsReducer;
