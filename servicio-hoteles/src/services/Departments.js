import { useState, useEffect } from "react";
import axios from "axios";

const domain = "http://127.0.0.1:8000";

export const useDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const { data } = await axios.get(`${domain}/api/departments`);
      setDepartments(data);
    };

    getDepartments();
  }, []);

  return departments;
};
