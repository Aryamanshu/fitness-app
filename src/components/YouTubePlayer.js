import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const YouTubePlayer = ({ videoId, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleOpen}
        sx={{
          mt: 2,
          textTransform: 'none',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
          '&:hover': {
            background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
          }
        }}
      >
        Watch on this page
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="youtube-video-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '800px',
            bgcolor: '#000',
            borderRadius: '10px',
            boxShadow: 24,
            p: 1,
            position: 'relative',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#fff',
              minWidth: 'auto',
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </Button>
          
          <Typography variant="h6" sx={{ color: '#fff', p: 2 }}>
            {title}
          </Typography>
          
          <Box sx={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default YouTubePlayer;
