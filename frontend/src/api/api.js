import axios from "axios";

const API_URL = "http://localhost:5001/api/appointments";

export const getAppointments = async () => axios.get(API_URL);
export const getAppointmentById = async (id) => axios.get(`${API_URL}/${id}`);
export const createAppointment = async (data) => axios.post(API_URL, data);
export const updateAppointment = async (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteAppointment = async (id) => axios.delete(`${API_URL}/${id}`);
