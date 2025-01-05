import { useState, useEffect } from 'react';
import axios from 'axios';
import FastnWidget from "@fastn-ai/widget-react";
import qs from 'qs';

const App = () => {
  const [authToken, ] = useState('');
  const [error, ] = useState('');

  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const response = await axios.post('https://live.fastn.ai/auth/realms/fastn/protocol/openid-connect/token', 
          qs.stringify({
            grant_type: 'password',
            username: 'automation@fastn.ai',
            password: 'automation',
            client_id: 'fastn-app',
            scope: 'openid'
          }), 
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        console.log('Access Token:', response.data.access_token);
      } catch (error) {
        console.error('Error fetching auth token:', error.response?.data || error.message);
      }
    };
 

    fetchAuthToken();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>
          {error}
        </div>
      )}
      <FastnWidget
        style={{ backgroundColor: 'black' }}
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
