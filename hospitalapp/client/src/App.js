import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Onboard from "./Components/Onboard";
import Auth from "./Components/Auth";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboard" element={<Onboard />} />
      </Routes>
    </div>
  );
}

export default App;
