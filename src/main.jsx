import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { EmployeeProvider } from "./context/EmployeeContext";
import { FormProvider } from "./context/FormContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeProvider>
      <FormProvider>
        <CssBaseline />
        <Toaster toastOptions={{}} />
        <App />
      </FormProvider>
    </EmployeeProvider>
  </React.StrictMode>
);
