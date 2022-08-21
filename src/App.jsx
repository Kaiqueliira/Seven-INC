import Home from "./pages/Home";
import ListEmployee from "./pages/ListEmployee";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" index element={<Home />}></Route>
        <Route path="/list" element={<ListEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
