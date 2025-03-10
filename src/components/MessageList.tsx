import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchMessages } from '../axiosApi';

interface Message {
  author: string;
  message: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const loadMessages = async () => {
    const data = await fetchMessages();
    const messagesArray: Message[] = Object.values(data || {}).map((msg: any) => ({
      author: msg.author,
      message: msg.message,
    }));
    setMessages(messagesArray);
  };

  useEffect(() => {
    loadMessages();
    const intervalId = setInterval(loadMessages, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <Card key={index} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6">{msg.author}</Typography>
            <Typography variant="body1">{msg.message}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MessageList;
