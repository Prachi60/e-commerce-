import axios from "axios";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1OGM5NDNlYmM4ZTQ4YzA4YjBmNDQiLCJ1c2VyTmFtZSI6ImFkbWluIGt1bGllcyIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MzM1NjUwOTZ9.NHAfARXRivrr448iiWLo-P5gVqGxYggIRG8U8Lcok9U"
// Create an instance of axios
const api = axios.create({  
  baseURL: "http://139.59.46.251:3300/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Function to handle GET requests
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to handle POST requests
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Function to handle PUT requests
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to handle DELETE requests
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

