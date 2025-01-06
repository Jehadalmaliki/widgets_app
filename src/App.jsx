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
        projectId="727294f7-862a-47d1-bd8b-b696e30a6a36"
        authToken={authToken}
        tenantId="oauth"
        apiKey="f4271323-4693-4c49-83bc-47fa42db9760"
        theme="light"
        env="LIVE"
      />
    </div>
  );
};

export default App;
