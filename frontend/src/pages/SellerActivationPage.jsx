import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import request from "../utils/request";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          const res = await request.post(`/shop/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (err) {
            console.log(err.response.data.message)
          setError(true);
        }
      };
      sendRequest();
    }
  }, []);
  

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your shop has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
