import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Main from "./Pages/FoodUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
