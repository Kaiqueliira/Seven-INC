import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function usePage() {
  const page = useContext(FormContext);
  return page;
}
