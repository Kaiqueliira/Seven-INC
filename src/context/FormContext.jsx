import { createContext, useState } from "react";
export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [page, setPage] = useState("view");

  return (
    <FormContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
