import { createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import ListEmployee from "./pages/ListEmployee";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      main: "red",
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<ListEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
