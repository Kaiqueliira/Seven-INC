import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmployeeProvider } from "./context/EmployeeContext";
import { FormProvider } from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeProvider>
      <FormProvider>
        <CssBaseline />
        <App />
      </FormProvider>
    </EmployeeProvider>
  </React.StrictMode>
);
