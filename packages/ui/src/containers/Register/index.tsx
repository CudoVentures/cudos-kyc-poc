import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { updateState, useAppDispatch } from "../../store";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let applicant: {
        firstName: string;
        lastName: string;
        email: string;
        address: {
            street: string;
            postcode: string;
            town: string;
            country: string;
        };
    } = {
        firstName: "",
        lastName: "",
        email: "",
        address: {
            street: "",
            postcode: "",
            town: "",
            country: "",
        },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const registerRes = await axios.post(
                `${process.env.REACT_APP_CUDOS_KYC_POC_SERVER_URL}/register-applicant`,
                applicant
            );

            dispatch(
                updateState({
                    token: registerRes.data.token,
                    applicantId: registerRes.data.applicantId,
                })
            );

            navigate("/kyc");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    First name:
                    <input
                        type="text"
                        onChange={(e) => (applicant.firstName = e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Last name:
                    <input
                        type="text"
                        onChange={(e) => (applicant.lastName = e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="text"
                        onChange={(e) => (applicant.email = e.target.value)}
                    />
                </label>
            </div>
            <br />
            <div>Address:</div>
            <div>
                <label>
                    Street:
                    <input
                        type="text"
                        onChange={(e) => (applicant.address.street = e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Postcode:
                    <input
                        type="text"
                        onChange={(e) => (applicant.address.postcode = e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Town:
                    <input
                        type="text"
                        onChange={(e) => (applicant.address.town = e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Country:
                    <input
                        type="text"
                        onChange={(e) => (applicant.address.country = e.target.value)}
                    />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Register;
