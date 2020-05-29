import axios from 'axios';

const url = 'http://localhost:5000';

export const getDoctor = (personId) => {
  return axios.get(`${url}/doctor`, { params: { personId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};


export const createDoctor = (firstName, lastName, age, covidPositive, wardId) => {
  return axios.post(`${url}/doctor`, {
    firstName, lastName, age, covidPositive, wardId,
  })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};


export const assignDoctorToWard = (personId, wardId) => {
  return axios.put(`${url}/doctor`, {
    personId, wardId,
  })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};


export const deletePerson = (personId) => {
  return axios.delete(`${url}/doctor`, { data: { personId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};
export const getAllDoctors = () => {
  return axios.get(`${url}/doctor/all`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getPatient = (personId) => {
  return axios.get(`${url}/patient`, { params: { personId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const createPatient = (firstName, lastName, age, covidPositive) => {
  return axios.post(`${url}/patient`, {
    firstName, lastName, age, covidPositive,
  })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const checkInPatient = (personId) => {
  return axios.put(`${url}/patient`, {
    personId,
  })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getAllPatient = () => {
  return axios.get(`${url}/patient/all`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const assignPatientToBed = (personId, bedId) => {
  return axios.put(`${url}/patient/bed`, { personId, bedId })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getWard = (wardId) => {
  return axios.get(`${url}/ward`, { params: { wardId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getAllWards = () => {
  return axios.get(`${url}/ward/all`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const getBed = (bedId) => {
  return axios.get(`${url}/bed`, { params: { bedId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const createBed = (bedId, wardId) => {
  return axios.post(`${url}/bed`, { wardId, bedId })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const deleteBed = (bedId) => {
  return axios.delete(`${url}/bed`, { data: { bedId } })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};
