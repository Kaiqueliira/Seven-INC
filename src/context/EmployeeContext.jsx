import { createContext, useState } from "react";

export const EmployeeContext = createContext({});

export const EmployeeProvider = ({ children }) => {
  const [employee, setEmployees] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    salary: "",
    created_at: "",
  });

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
