import axios from "../utils/axios";

export const getCourses = () => axios.get("/courses");

export const getCourseById = (id: number) =>
  axios.get(`/courses/${id}`);

export const addCourse = (data: any) =>
  axios.post("/courses", data);

export const updateCourse = (id: number, data: any) =>
  axios.put(`/courses/${id}`, data);

export const deleteCourse = (id: number) =>
  axios.delete(`/courses/${id}`);
