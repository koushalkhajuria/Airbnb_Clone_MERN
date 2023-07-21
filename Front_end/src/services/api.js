import axios from 'axios';




// -------------------------- All Listing----------------------------
 
export function getData() {
  return axios.get(`/`);
}

// -------------------------------- Quick Search------------------------------------

export function getDataByFilterName(filterName) {
  return axios.get(`/?title=${filterName}`);
}

// ----------------------------- Search Data------------------------------

export function getDataBySearchParam(data) {
      const {location, checkInDate, checkOutDate, guests } = data;
      return axios.get(`/search/?country=${location}&startDate=${checkInDate}&endDate=${checkOutDate}&capacity=${guests}`); 
}

// ------------------------------- Getting individual data by id--------------------------------------

export function getRoomById(id) {
  console.log(id)
  return axios.get(`/${id}`);
}


// -------------------------------- Create Host Room-------------------------------

export function createHostApi(data) {
  return axios.post(`/`, data);
}

export function updateDataById(id, data) {
  return axios.put(`/${id}`, data);
}

export function deleteData(id) {
  return axios.delete(`/data/${id}`);
}


// ----------------------------- User ----------------------------------

export function registerUser(data) {
  return axios.post(`/auth/register`, data);
}

export function loginUser(data) {
  console.log(data)
  return axios.post(`/auth/login`, data,
  {withCredentials: true});
}

export function getRefreshToken() {
  return axios.get(`/auth/refresh`, {
    withCredentials: true
  })
}