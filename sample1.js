const fs = require('fs');
const axios = require('axios');

const API_URL = 'https://api.example.com/v1/chat/completions'; // Replace with your actual model endpoint
const API_KEY = 'REDACTED_FOR_SECURITY'; // Replace with your API key

async function sendSketchToModel() {
  const imageData = fs.readFileSync('./contoso_layout_sketch.jpg', { encoding: 'base64' });

  const payload = {
    model: 'your-multimodal-model-name', // e.g., 'phi-4-multimodal-instruct'
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Convert this hand-drawn sketch into HTML/CSS for a website homepage.' },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${imageData}`,
            },
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

sendSketchToModel();
