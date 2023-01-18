import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={(e) => navigate("/")}>Home</button>
            <button onClick={(e) => navigate("register")}>Register</button>
            {/* <button onClick={(e) => navigate("kyc")}>KYC</button> */}
        </nav>
    );
};

export default Navbar;
