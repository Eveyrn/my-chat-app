import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { sendMessage } from '../axiosApi';

const MessageForm: React.FC = () => {
  const [author, setAuthor] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (author && message) {
      await sendMessage(author, message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Author"
        variant="outlined"
        fullWidth
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Send Message
      </Button>
    </form>
  );
};

export default MessageForm;
