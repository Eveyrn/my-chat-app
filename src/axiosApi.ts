import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chat-compass-default-rtdb.europe-west1.firebasedatabase.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (author: string, message: string) => {
  try {
    const response = await instance.post('/messages.json', { author, message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const fetchMessages = async () => {
  try {
    const response = await instance.get('/messages.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return {};
  }
};
