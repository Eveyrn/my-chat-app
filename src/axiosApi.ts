import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chat-compass-default-rtdb.europe-west1.firebasedatabase.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});


interface MessageData {
  author: string;
  message: string;
}

export const sendMessage = async (author: string, message: string) => {
  try {
    const response = await instance.post('/messages.json', { author, message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
  }
};


interface SMessages {
  [key: string]: MessageData;
}
export const fetchMessages = async (): Promise<SMessages> => {
  try {
    const response = await instance.get<SMessages>('/messages.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return {};
  }
};
