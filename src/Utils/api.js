import axios from "axios";

const API = axios.create({ baseURL: "https://navankurbackend.onrender.com/api/auth" });

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.post("/logout", {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
