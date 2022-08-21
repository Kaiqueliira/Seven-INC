import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export function useEmployee() {
  const employee = useContext(EmployeeContext);

  return employee;
}
