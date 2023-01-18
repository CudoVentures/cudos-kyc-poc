import * as Onfido from "onfido-sdk-ui";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { selectToken, useAppSelector } from "../../store";

const KYC = () => {
    const token = useAppSelector(selectToken);

    if (token === null || token === "") {
        return <Navigate to="/" />;
    }

    const initOnfido = async () => {
        try {
            Onfido.init({
                token: token,
                steps: ["welcome", "document", "complete"],
                onComplete: (data) => {
                    console.log("Everything is complete", data);
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        initOnfido();
    }, []);

    return <div id="onfido-mount"></div>;
};

export default KYC;
