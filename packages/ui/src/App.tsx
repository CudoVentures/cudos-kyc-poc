import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KYC from "./containers/KYC";
import Register from "./containers/Register";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <br />
            <Routes>
                <Route path="/" element={<div>Welcome to cudos-kyc-poc!</div>} />
                <Route path="register" element={<Register />} />
                <Route path="kyc" element={<KYC />} />
            </Routes>
        </div>
    );
};

export default App;
