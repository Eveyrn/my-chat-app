import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const App: React.FC = () => {
  return (
    <Container>
      <Box textAlign="center" style={{ marginTop: '20px' }}>
        <Typography variant="h4">Chat IT App</Typography>
      </Box>
      <MessageForm />
      <MessageList />
    </Container>
  );
};

export default App;
