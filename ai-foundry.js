import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const endpoint = process.env.AZURE_INFERENCE_SDK_ENDPOINT;
const apiKey = process.env.AZURE_INFERENCE_API_KEY;

const url = `${endpoint}/openai/deployments/your-deployment-name/chat/completions?api-version=2024-05-01`;

const headers = {
  'Content-Type': 'application/json',
  'api-key': apiKey,
};

const body = {
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Tell me a fun fact about AI.' },
  ],
  temperature: 0.7
};

async function callModel() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log('AI Response:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error calling Azure AI model:', error.message);
  }
}

callModel();
