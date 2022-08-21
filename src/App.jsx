import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actions from "./pages/Actions";
import Home from "./pages/Home";
import ListEmployee from "./pages/ListEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" index element={<Home />} />
        <Route path="employee" element={<ListEmployee />}></Route>
        <Route path="employee/add" element={<Actions />} />
        <Route path="employee/view/:id" element={<Actions />} />
        <Route path="employee/edit/:id" element={<Actions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
