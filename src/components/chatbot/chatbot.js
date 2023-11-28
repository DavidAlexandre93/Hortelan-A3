import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const handleToggleChat = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    // Simulação de resposta do robô (adapte conforme necessário)
    const botResponse = { sender: 'bot', text: 'Obrigado por sua mensagem!' };
    setTimeout(() => {
      setMessages([...newMessages, botResponse]);
    }, 500);

    setInput('');
  };

  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 16, left: 16, zIndex: 1000 }}>
      {open ? (
        <div
          ref={chatRef}
          style={{
            width: 300,
            borderRadius: 20,
            backgroundColor: '#C8E6C9',
            padding: 10,
            overflowY: messages.length > 5 ? 'scroll' : 'auto',
          }}
        >
          <div style={{ maxHeight: 200, overflowY: 'auto', padding: 10 }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                  marginBottom: 5,
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
            style={{ marginTop: 10 }}
          >
            Enviar
          </Button>
        </div>
      ) : (
        <Fab
          color="primary"
          onClick={handleToggleChat}
          sx={{
            borderRadius: 20,
            '& .MuiSvgIcon-root': {
              borderRadius: 20, 
            },
          }}
        >
          <ChatBubbleIcon />
        </Fab>
      )}
    </div>
  );
};

export default Chatbot;
