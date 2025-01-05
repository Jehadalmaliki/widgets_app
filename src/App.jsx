import { useState, useEffect } from "react";
import axios from "axios";
import FastnWidget from "@fastn-ai/widget-react";
import qs from "qs";

const App = () => {
  const [authToken, setAuthToken] = useState("");

  const fetchAuthToken = async () => {
    try {
      const response = await axios.post(
        "https://live.fastn.ai/auth/realms/fastn/protocol/openid-connect/token",
        qs.stringify({
          grant_type: "password",
          username: "automation@fastn.ai",
          password: "automation",
          client_id: "fastn-app",
          scope: "openid",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setAuthToken(response.data.access_token);
      console.log(authToken);
    } catch (error) {
      console.error(
        "Error fetching auth token:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchAuthToken();
  }, []);

  return (
    <div>
      <FastnWidget
        style={{ backgroundColor: "black" }}
        projectId="a069807a-ef17-47cd-b4bc-ec29249049bd"
        authToken={authToken}
        tenantId="hello"
        apiKey="0a7b75ee-55be-4190-b811-f070d3469599"
        theme="light"
        env="LIVE"
      />
    </div>
  );
};

export default App;
